import React from "react";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import { resetPassValidation } from "../helper/validate";
import styles from "../styles/Login.module.css";
function Reset() {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_pwd: "",
    },
    validate: resetPassValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <div className="container mx-auto">
        <Toaster position="top-center" reverseOrder={false}></Toaster>
        <div className="flex justify-center items-center h-screen">
          <div className={styles.glass} style={{ width: "35%" }}>
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">Reset</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                Enter new password
              </span>
            </div>

            <form className="py-20" onSubmit={formik.handleSubmit}>
              <div className="textbox flex flex-col items-center gap-6">
                <input
                  {...formik.getFieldProps("password")}
                  className={styles.textbox}
                  type="text"
                  placeholder="New Password"
                />
                <input
                  {...formik.getFieldProps("confirm_pwd")}
                  className={styles.textbox}
                  type="text"
                  placeholder="Repeat Password"
                />
                <button
                  className="border bg-indigo-500 w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-red-400"
                  type="submit"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reset;
