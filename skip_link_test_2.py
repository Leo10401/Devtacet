from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:3000")

    # wait for loader to disappear
    page.wait_for_selector(".loader-root.is-done", timeout=10000)

    page.evaluate("document.querySelector('a[href=\"#main-content\"]').focus()")
    page.wait_for_timeout(500)

    active_element = page.evaluate("document.activeElement.tagName + ' ' + document.activeElement.href")
    print("Active element:", active_element)

    page.screenshot(path="verification/focus-skip-link-explicit.png")

    browser.close()
