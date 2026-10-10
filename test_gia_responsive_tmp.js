const { chromium } = require("playwright")
;(async () => {
  const browser = await chromium.launch()
  for (const width of [375, 1280]) {
    const page = await browser.newPage({ viewport: { width, height: 1200 } })
    await page.goto("http://localhost:3000/software", { waitUntil: "networkidle" })
    const link = page.locator('a[href="/articles/gerentia"]')
    const bigImg = link.locator("img").first()
    const bigVisible = await bigImg.isVisible().catch(() => false)
    const titleRowImg = await link.locator("div.flex.items-center.gap-2 img").isVisible().catch(() => false)
    console.log(`width ${width}: big image visible=${bigVisible}, title-row small image visible=${titleRowImg}`)
    await page.close()
  }
  await browser.close()
})()
