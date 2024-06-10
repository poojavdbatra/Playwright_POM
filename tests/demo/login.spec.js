import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage'

test('test', async ({ page }) => {

  const Login = new LoginPage(page)
 
   await Login.gotoLoginPage()
   await Login.Login('tosmith','SuperSecretPassword')
  // await page.getByLabel('Username').dblclick();
  // await page.getByLabel('Username').fill('tomsmith');
  // await page.getByLabel('Password').click();
  // await page.getByLabel('Password').fill('');
  // await page.getByRole('button', { name: ' Login' }).click();
});