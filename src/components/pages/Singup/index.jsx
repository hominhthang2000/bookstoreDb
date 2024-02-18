import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Singup = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState([]);

  const handleSinup = async (e) => {
    const res = await fetch("http://localhost:7000/users", {
      method: "GET",
    });

    const users = await res.json();
    console.log(users);
    let isCheck = true;

    users.forEach((user) => {
      if (user.username === newUser.username) {
        isCheck = false;
      }
    });

    if (isCheck) {
      const res = await fetch("http://localhost:7000/users", {
        method: "POST",
        body: JSON.stringify({
          username: newUser.username,
          password: newUser.password,
        }),
      });
      if (res.ok) {
        alert("okkkk");
        navigate("/Login");
      }
    } else {
      alert("user nay da ton tai !");
    }
  };

  const isValidateUser = () => {
    const errorData = [];
    Object.keys(newUser).forEach((key) => {
      if (key !== "confirmPassword") {
        if (newUser[key] === "") {
          errorData.push(key);
        }
      }

      if (newUser.confirmPassword !== newUser.password) {
        errorData.push("passwordNotSame");
      }
    });

    setErrors(errorData);

    if (!errorData.length) {
      handleSinup();
    }
  };

  return (
    <div className="min-h-[100vh]">
      <div className="text-[25px] pt-3 ml-4 text-[#62ab00] font-bold cursor-pointer hover:text-black">
        <Link to="/">◀ Trang chủ</Link>
      </div>
      <div className="flex  flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-24 w-auto"
            src="./Images/vector 3222 book .jpg"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Đăng ký tài khoản mới
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Tên đăng nhập
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  value={newUser.username}
                  onChange={(e) => {
                    setNewUser({ ...newUser, username: e.target.value });
                    setErrors(errors.filter((x) => x !== "username"));
                  }}
                  required
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.includes("username") && (
                  <span className="text-[red] text-[12px]">
                    Không được để trống username
                  </span>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mật khẩu
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  value={newUser.password}
                  onChange={(e) => {
                    setNewUser({ ...newUser, password: e.target.value });
                    setErrors(errors.filter((x) => x !== "password"));
                  }}
                  required
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.includes("password") && (
                  <span className="text-[red] text-[12px]">
                    Không được để trống password
                  </span>
                )}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nhập lại mật khẩu
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={newUser.confirmPassword}
                  onChange={(e) => {
                    setNewUser({ ...newUser, confirmPassword: e.target.value });
                    setErrors(errors.filter((x) => x !== "confirmPassword"));
                  }}
                  autocomplete="current-password"
                  required
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.includes("passwordNotSame") && (
                  <span className="text-[red] text-[12px]">
                    Mat khau deu giong
                  </span>
                )}
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={isValidateUser}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Đăng ký
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Bạn đã có tài khoản?
            <Link
              to="/Login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Singup;
