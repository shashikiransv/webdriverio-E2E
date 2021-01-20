const { expect } = require("chai");
const loginPage = require("../pageobjects/JiraLogin.page");

describe("22222222222This test checks the Searh functionality", () => {
  it("This test checks the Searh functionality", () => {
    browser.url("http://localhost:8080/login.jsp");
    loginPage.loginInput.setValue("shashikiransv");
    loginPage.passwordInput.setValue("Control@1");
    loginPage.submitButton.click();
  });
  it("222222222second Test", () => {
    expect(1);
  });
  it("22222third Test", () => {
    expect(1).to.equal(2);
  });

  it("2222fourth Test", () => {
    expect(1).to.equal(3);
  });
  it("2222fifth Test", () => {
    expect(1 === 1);
  });
});
