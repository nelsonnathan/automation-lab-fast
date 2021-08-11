const { Builder, Capabilities, By } = require("selenium-webdriver")

const chromedriver = require('chromedriver')
const { testEnvironment } = require("./jest.config")

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5503/automation-lab-fast/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Adds a movie to the list', async () => {

    let movieLister = await driver.findElement(By.xpath("/html/body/main/section/form/input"))

    await movieLister.sendKeys("Good Will Hunting\n")

    await movieLister.sendKeys("A Bug's Life\n")

    await driver.sleep(3000)
})

test('deletes a defined movie', async () => {
    let deletePixar = await driver.findElement(By.xpath(`//*[@id="ABug'sLife"]`))

    await deletePixar.click()

    await driver.sleep(3000)
})

test('crosses off a predefined movie', async () => {
    let crossOffWill = await driver.findElement(By.xpath(`/html/body/main/ul/li/span`))

    await crossOffWill.click()

    await driver.sleep(3000)
})

// test('confirms message says the right thing', async () => {
//     let checkWill = await driver.findElement(By.xpath(`//*[@id="message"]`))

//     console.log(mess)

//     await driver.sleep(3000)
// })

