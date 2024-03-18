<template>
  <div class="p-4">
    <v-container>
      <v-form ref="form" v-model="isFromValid" v-show="!table" @submit.prevent="submitForm">
        <!-- Show loading when isLoading is true -->
        <div v-if="isLoading" class="text-center mb-4">Loading mainCategories...</div> 

        <div class="flex gap-4 flex-col md:flex-row">
            <v-autocomplete
            label="Main Category"
            :items="mainCategories"
            item-title="name"
            item-value="id"
            v-model="choosenCategory.category"
            return-object
            :rules="[(value) => !!value || 'Required.']"
          ></v-autocomplete>
          <v-autocomplete
            label="Subcategory"
            :items="choosenCategory.category?.children"
            item-title="name"
            item-value="id"
            return-object
            v-model="choosenCategory.choosenProp"
            :rules="[(value) => !!value || 'Required.']"
            no-data-text="Choose SomeThing From Main Category!!!"
          ></v-autocomplete>
        </div>
        <template v-for="(prop, index) in choosenCategory.propertyOptions">
          <v-autocomplete
            :key="index"
            v-if="prop.options[0].id != 0"
            :label="prop.name"
            :items="prop.options"
            item-title="name"
            item-value="id"
            return-object
            v-model="choosenCategory.propertyOptions[index].choosenOption"
            @update:modelValue="getChildOptions(false, index, choosenCategory.propertyOptions[index].choosenOption)"
            :rules="[(value) => !!value || 'Required.']"
          ></v-autocomplete>
          <v-text-field
            v-if="choosenCategory.propertyOptions[index].choosenOption?.id == 0"
            v-model="choosenCategory.propertyOptions[index].choosenOption.otherValue"
            label="Please write your other value"
            :rules="[(value) => !!value || 'Required.']"
          ></v-text-field>
          <template v-if="choosenCategory.propertyOptions[index].children">
            <template v-for="(childOption, childIndex) in choosenCategory.propertyOptions[index].children" :key="childIndex">
              <v-autocomplete
                :label="childOption.name"
                :items="childOption.options"
                item-title="name"
                item-value="id"
                return-object
                v-model="choosenCategory.propertyOptions[index].children[childIndex].choosenChildOption"
                @update:modelValue="getChildOptions(true, index, choosenCategory.propertyOptions[index].children[childIndex].choosenChildOption, childIndex)"
                :rules="[(value) => !!value || 'Required.']"
              ></v-autocomplete>
              <v-text-field
                v-if="choosenCategory.propertyOptions[index].children[childIndex].choosenChildOption?.id == 0"
                v-model="choosenCategory.propertyOptions[index].children[childIndex].choosenChildOption.otherValue"
                label="Please write your other value"
                :rules="[(value) => !!value || 'Required.']"
              ></v-text-field>
            </template>
          </template>
        </template>
        <v-btn type="submit">Submit</v-btn>
      </v-form>
      <div v-show="table">
        <h2 class="text-center font-bold mb-4">Your Selected Data Is:</h2>
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Choosen Category</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sup category</th>
              <!-- Loop over property options -->
              <template v-for="option in choosenCategory.propertyOptions">
                <th v-if="option.options[0].id !== 0" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{{ option.name }}</th>
              </template>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <!-- Display chosen category and property -->
              <td class="px-6 py-4 whitespace-nowrap">{{ choosenCategory.category?.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ choosenCategory.choosenProp?.name }}</td>
              <!-- Loop over property options -->
              <template v-for="option in choosenCategory.propertyOptions">
                <td v-if="option.options[0].id !== 0" class="px-6 py-4 whitespace-nowrap">
                  <!-- Display chosen option -->
                  <div class="flex items-center">
                    <div>
                      {{ option?.choosenOption?.id == 0 ? option?.choosenOption?.otherValue : option?.choosenOption?.name }}
                    </div>
                  </div>
                  <!-- Loop over children options if they exist -->
                  <template v-if="option.children" v-for="childOption in option.children" :key="childOption.id">
                    <div class="mt-2">
                      <span class="inline-block px-2 py-1 text-xs font-semibold leading-none text-red-900 bg-red-200 rounded-full">{{ childOption.name }}:</span>
                      <!-- Display chosen child option -->
                      <span class="ml-2">{{ childOption.choosenChildOption?.id == 0 ? childOption.choosenChildOption.otherValue : childOption.choosenChildOption?.name }}</span>
                    </div>
                  </template>
                </td>
              </template>
            </tr>
          </tbody>
        </table>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

interface Endpoint {
    url: string;
    headers: Record<string, string>;
}

interface Category {
    id: number;
    name: string;
}

interface Property {
    id: number;
    name: string;
}

interface Option {
    id: number;
    name: string;
}

const apiUrl = "https://staging.mazaady.com/api/v1"
const privateKey = "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16"


const table = ref(false);
const isLoading = ref(false);
const isFromValid = ref(false);
const mainCategories = ref<Category[]>([]);

// Here I Fetch mainCategories (first load script)
(async () => {
    try {
        isLoading.value = true;

        const response = await fetch(`${apiUrl}/get_all_cats`, {
            headers: { "private-key": privateKey },
        });
        const responseData = await response.json();
        console.log('value', responseData.data.categories);
        mainCategories.value = responseData.data.categories;

        isLoading.value = false;
    } catch (error) {
        console.error("Error fetching categories:", error);

        isLoading.value = false;
    }
})();

const choosenCategory = reactive({
    category: null as Category | null,
    choosenProp: null as Property | null,
    propertyOptions: null as Option[] | null,
});

watch(
    () => choosenCategory.category,
    // Callback Function Behavior
    async () => {
        choosenCategory.choosenProp = null;
        choosenCategory.propertyOptions = [];
    },
    { deep: true }
);

// Define a function to assign children to a specific property option
const assignChildrenToPropertyOption = (index, modifiedData) => {
    const propertyOption = choosenCategory.propertyOptions[index];
    if (propertyOption.children) {
        propertyOption.children.push(...modifiedData);
    } else {
        propertyOption.children = modifiedData;
    }
};

// Update the watch function for fetching child options
watch(
    () => choosenCategory.choosenProp,
    async (value) => {
        if (!value?.id) return;
        try {
            const response = await fetch(
                `${apiUrl}/properties?cat=${value.id}`,
                {
                  headers: { "private-key": privateKey },
                }
            );
            const responseData = await response.json();
            const modifiedData = responseData.data.map((item: Property) => {
                item.options.push({ name: "other", id: 0 });
                return item;
            });
            choosenCategory.propertyOptions = modifiedData;
        } catch (error) {
            console.error("Error fetching properties:", error);
        }
    },
    { deep: true }
);

// Update the function for fetching child options
const getChildOptions = async (
    clearDeepChild: boolean,
    index: number,
    target: any
) => {
    if (target.child) {
        if (!clearDeepChild) {
            choosenCategory.propertyOptions[index].children = [];
        }
        try {
            const response = await fetch(
                `${apiUrl}/get-options-child/${target.id}`,
                {
                  headers: { "private-key": privateKey },
                }
            );
            const responseData = await response.json();
            const modifiedData = responseData.data.map((item: Option) => {
                item.options.push({ name: "other", id: 0 });
                return item;
            });
            assignChildrenToPropertyOption(index, modifiedData);
        } catch (error) {
            console.error("Error fetching child options:", error);
        }
    }
};

const submitForm = () => {
    if (!isFromValid.value) return;
    table.value = true;
};
</script>

<style scoped>
/* style */
</style>
