from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:3000")

    # wait for loader to disappear
    page.wait_for_selector(".loader-root.is-done", timeout=10000)

    # Focus the body then tab
    page.locator("body").focus()
    page.keyboard.press("Tab")
    page.wait_for_timeout(500)
    page.screenshot(path="verification/focus-skip-link-2.png")

    browser.close()
