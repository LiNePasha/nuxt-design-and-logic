describe('import vue components', () => {
  test('Normal Imported as expected Tested Fine', async () => {
      const ua = await import('../components/UserActivity.vue')
      expect(ua).toBeDefined()
  })
  test('NavBar Tested Fine', async () => {
    const nb = await import('../components/NavBar.vue')
    expect(nb).toBeDefined()
  })
  test('Dynamic Tested Fine', async () => {
    const dynamic = "QrCode"
    const dy = await import(`../components/${dynamic}.vue`)
    expect(dy).toBeDefined()
  })
})