exports.LoginPage = class LoginPage {

    constructor(page)
    {
        this.page = page
        this.userName_textBox = page.getByLabel('Username')
        this.passWord_textBox = page.getByLabel('Password')
        this.login_Btn = page.getByRole('button', { name: ' Login' })
    }

    async gotoLoginPage()
    {
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }

    async Login(Username,Password)
    {
        await this.userName_textBox.fill(Username)
        await this.passWord_textBox.fill(Password)
        await this.login_Btn.click()
    }

}