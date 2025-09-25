// Hàm kiểm tra hợp lệ
function validateForm(fullname, email, phone, password, confirmPassword) {
  // Kiểm tra họ tên
  if (fullname.trim().split(" ").length < 2) {
    alert("Vui lòng nhập đầy đủ họ và tên.");
    return false;
  }

  // Kiểm tra email với regex
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Email không hợp lệ.");
    return false;
  }

  // Kiểm tra số điện thoại (10 số)
  let phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    alert("Số điện thoại phải có 10 chữ số.");
    return false;
  }

  // Kiểm tra mật khẩu: ít nhất 6 ký tự, gồm chữ và số
  let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!passwordPattern.test(password)) {
    alert("Mật khẩu phải ít nhất 6 ký tự, có cả chữ và số.");
    return false;
  }

  // Kiểm tra nhập lại mật khẩu
  if (password !== confirmPassword) {
    alert("Mật khẩu nhập lại không khớp.");
    return false;
  }

  return true; // Nếu tất cả hợp lệ
}

// Xử lý submit
document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (validateForm(fullname, email, phone, password, confirmPassword)) {
      // Lưu thông tin vào localStorage
      let user = {
        fullname: fullname,
        email: email,
        phone: phone,
        password: password,
      };
      localStorage.setItem("user", JSON.stringify(user));

      alert("Đăng ký thành công! Mời bạn đăng nhập.");
      window.location.href = "login.html";
    }
  });
