
const langSelect = document.getElementById("language");
const formTitle = document.getElementById("form-title");
const username = document.getElementById("username");
const password = document.getElementById("password");
const btnLogin = document.getElementById("btn-login");
const btnRegister = document.getElementById("btn-register");
const forgotLink = document.getElementById("forgot-link");


const translations = {
  en: {
    title: "Hotel Login",
    username: "Username",
    password: "Password",
    login: "Login",
    register: "Register",
    forgot: "Forgot Password?"
  },
  vi: {
    title: "Đăng nhập",
    username: "Tên đăng nhập",
    password: "Mật khẩu",
    login: "Đăng nhập",
    register: "Đăng ký",
    forgot: "Quên mật khẩu?"
  }
};

function changeLanguage(lang) {
  formTitle.textContent = translations[lang].title;
  username.placeholder = translations[lang].username;
  password.placeholder = translations[lang].password;
  btnLogin.textContent = translations[lang].login;
  btnRegister.textContent = translations[lang].register;
  forgotLink.textContent = translations[lang].forgot;
}


langSelect.addEventListener("change", (e) => {
  changeLanguage(e.target.value);
});


changeLanguage("en");
