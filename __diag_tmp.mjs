import { chromium, devices } from "playwright"

const browser = await chromium.launch()
const device = devices["Pixel 7"]
const context = await browser.newContext({ ...device })
const page = await context.newPage()
await page.goto("http://localhost:3000/articles/haengma3", { waitUntil: "networkidle" })
await page.waitForTimeout(1000)

const result = await page.evaluate(() => {
  const html = document.documentElement
  const body = document.body
  return {
    htmlClientWidth: html.clientWidth,
    htmlScrollWidth: html.scrollWidth,
    htmlOffsetWidth: html.offsetWidth,
    bodyClientWidth: body.clientWidth,
    bodyScrollWidth: body.scrollWidth,
    bodyOffsetWidth: body.offsetWidth,
    innerWidth: window.innerWidth,
    outerWidth: window.outerWidth,
    bodyRect: body.getBoundingClientRect(),
    htmlOverflowX: getComputedStyle(html).overflowX,
    bodyOverflowX: getComputedStyle(body).overflowX,
  }
})
console.log(JSON.stringify(result, null, 2))
await browser.close()
