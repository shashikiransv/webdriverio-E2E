class jiraLogin {
  get loginInput() {
    return $("#login-form-username");
  }
  get passwordInput() {
    return $("#login-form-password");
  }
  get submitButton() {
    return $("#login-form-submit");
  }
  static login() {}
}

module.exports = new jiraLogin();
/* browser.url("http://localhost:8080/login.jsp");
$("#login-form-username").setValue("shashikiransv");
$("#login-form-password").setValue("Control@1");
$("#login-form-submit").click(); */
