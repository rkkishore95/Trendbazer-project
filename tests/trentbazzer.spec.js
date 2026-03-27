import { test } from '@playwright/test';

test.skip('TC_BC_015  login to the application with Invalid Credentials', async ({ page }) => {

    //Launch the URL
    await page.goto('https://trendbazar.in/?v=13b5bfe96f3e');
    await page.waitForTimeout(3000);


    // TC_BC_015  login to the application

    await page.getByText('Login / Register').first().click(); 
    await page.waitForTimeout(2000);

    await page.locator('//div[@aria-label="Login sidebar"]//descendant::input[@id="username"]').fill('kannan.seba.');
    await page.locator('//div[@aria-label="Login sidebar"]//descendant::input[@id="password"]').fill('@f%wNfwwAIO2*');
     await page.waitForTimeout(2000);
    await page.locator('//button[@class="show-password-input"]').click();
    await page.waitForTimeout(2000);

    await page.locator('//div[@aria-label="Login sidebar"]//descendant::button[@class="button woocommerce-button woocommerce-form-login__submit"]').click();
    await page.waitForTimeout(2000);

    await page.screenshot({ path: 'screenshot.png' });


});

test.skip('TC_BC_002  Search the valid content in the search box', async ({ page }) => {

    //Launch the URL
    await page.goto('https://trendbazar.in/?v=13b5bfe96f3e');
    await page.waitForTimeout(3000);

    // TC_BC_002  Search the valid content in the search box


    await page.locator('//input[@class="s"]').first().fill('tshirt');
    await page.waitForTimeout(2000);

    await page.locator('//div[@class="wd-search-cat-btn wd-role-btn"]').click();
    await page.waitForTimeout(2000);

    await page.locator('//a[@data-val="trending-clothes"]').click();

    await page.locator('//button[@class="searchsubmit"]').first().click();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);

    await page.screenshot({ path: 'screenshot.png' });
    await page.waitForTimeout(2000);


});


test('TC_BC_053 Navigate to the Trending Clothes section', async ({ page }) => {

    //Launch the URL
    await page.goto('https://trendbazar.in/?v=13b5bfe96f3e');
    await page.waitForLoadState('load');
   
    //TC_BC_053 Navigate to the Trending Clothes section

    await page.hover('//div[@class="container"]//descendant::span[@class="menu-opener-icon"]');
    await page.waitForLoadState('load');
    
    await page.getByRole('link', { name: /trending clothes/i }).first().click();

    await page.waitForLoadState('load');
    await page.hover('//span[@class="menu-open-label"]');
    await page.waitForLoadState('load');

    await page.locator('//div[@class="container"]//descendant::span[@class="nav-link-text" and text()="Trending Clothes"]').first().click();
    await page.waitForLoadState('load');

    //Select the product having a hot tag in the trending clothes section
    
    await page.locator('//div[@class="product-wrapper"]//descendant::span[@class="featured product-label"]').first().click();
    await page.waitForLoadState('load');

    //Description handling

    await page.locator('//select[@data-attribute_name="attribute_color"]').click();
    await page.waitForLoadState('load');
    await page.locator('select[data-attribute_name="attribute_color"]').selectOption('White');
    await page.waitForLoadState('load');

    await page.locator('//select[@data-attribute_name="attribute_size"]').click();
    await page.waitForLoadState('load');
    await page.locator('select[data-attribute_name="attribute_size"]').selectOption('L');

    //Add to cart

    await page.locator('//input[@class="plus btn"]').click();
    await page.locator('//button[@type="submit" and text()="Add to cart"]').click();
    await page.waitForLoadState('load');

    await page.locator('//div[@class="close-side-widget wd-action-btn wd-style-text wd-cross-icon"]').first().click();
    await page.waitForLoadState('load');    

    await page.locator('//a[@title="Shopping cart"]//child::span[@class="wd-tools-icon wd-icon-alt"]').first().click();
    await page.waitForLoadState('load'); 
    
    await page.locator('//a[@class="button btn-cart wc-forward"]').click();
    await page.waitForLoadState('load'); 

    await page.locator('//a[@class="wc-block-components-button wp-element-button wc-block-cart__submit-button contained"]').click();
    await page.waitForLoadState('load'); 

    //Checkout page

    await page.locator('//input[@id="email"]').fill('sebastinkanna@gmail.com');
    await page.locator('//input[@id="shipping-first_name"]').fill('kannan');
    await page.locator('//input[@id="shipping-last_name"]').fill('sebastian');

    await page.locator('//input[@id="shipping-address_1"]').fill('2/191B Mylampatty road Karayampalayam Chinniyampalayam via, Coimbatore, Tamil Nadu 641062, 2/191B Mylampatty road Karayampalayam Chinniyampalayam via, Coimbatore, Tamil Nadu 641062, coimbatore 627760, Tamil Nadu, India, +916379144809');
    await page.locator('//input[@id="shipping-city"]').fill('Chennai');
    await page.locator('//input[@id="shipping-postcode"]').fill('600081');
    await page.locator('select#shipping-state').selectOption('TN');
    
    await page.waitForLoadState('load');
    //await page.hover('//button[@class="wc-block-components-button wp-element-button wc-block-components-checkout-place-order-button contained"]');
    //await page.locator('//div[contains(@class, "wc-block-checkout__actions_row")]//button').click();
    await page.locator('//div[text()="Place Order"]').click();
    await page.waitForTimeout(5000);

    await page.waitForLoadState('load');
    await page.screenshot({ path: 'screenshotproject.png' });

});
