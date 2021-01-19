const { expect } = require("chai");
const loginPage = require("../pageobjects/JiraLogin.page");

describe("This test checks the Searh functionality", () => {
  it("This test checks the Searh functionality", () => {
    browser.url("http://localhost:8080/login.jsp");
    loginPage.loginInput.setValue("shashikiransv");
    loginPage.passwordInput.setValue("Control@1");
    loginPage.submitButton.click();
  });
  it("second Test", () => {
    expect(1);
  });
  it("third Test", () => {
    expect(1).to.equal(2);
  });

  it("fourth Test", () => {
    expect(1).to.equal(3);
  });
  it("fifth Test", () => {
    expect(1 === 1);
  });
});
