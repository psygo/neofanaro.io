import { chromium } from "playwright"
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 900, height: 1200 } })
await page.goto("http://localhost:3000/articles/mammoths-jump", { waitUntil: "networkidle" })
await page.locator("svg[role='img']").scrollIntoViewIfNeeded()
await page.waitForTimeout(500)
const box = await page.locator("svg[role='img']").boundingBox()
await page.screenshot({ path: "/tmp/centered_text_check.png", clip: box })

// numeric verification via getBBox in-browser
const measurements = await page.evaluate(() => {
  const texts = Array.from(document.querySelectorAll("svg text"))
  return texts.map(t => {
    const box = t.getBBox()
    const targetY = parseFloat(t.getAttribute("y"))
    const inkCenterY = box.y + box.height / 2
    return { text: t.textContent, targetY, inkCenterY, offset: inkCenterY - targetY }
  })
})
console.log(JSON.stringify(measurements, null, 2))
await browser.close()
