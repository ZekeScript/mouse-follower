// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'

test('Dynamic Text Click Test', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const button = await page.$('button')

  // Get the initial text
  const initialButtonText = await button?.textContent()
  await button?.click()

  // Get the updated text
  const updatedButtonText = await button?.textContent()

  // Compare both
  expect(initialButtonText).not.toBe(updatedButtonText)
})

test('Pointer Tracker Test', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const button = await page.$('button')
  await button?.click()

  // Move the mouse ponter
  await page.mouse.move(100, 100)
  await page.waitForTimeout(1000)

  // Get the position fo the tracker
  const tracker = await page.$('#tracker')
  const trackerPosition = await tracker.boundingBox()

  // Compare with position (0, 0)
  expect(trackerPosition?.x).not.toBe(0)
  expect(trackerPosition?.y).not.toBe(0)
})
