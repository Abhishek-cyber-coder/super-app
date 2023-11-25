import React, { useState } from "react";
import styles from "./SignupSection.module.css";
import { useNavigate } from "react-router-dom";
function SignupSection() {
  const [formData, setFormData] = useState({
    check: false,
    name: "",
    username: "",
    mail: "",
    mobile: "",
  });

  const navigate = useNavigate();

  const [nameError, setNameError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [mailError, setMailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let valid = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(formData.name.trim().length > 0)) {
      valid = false;
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!(formData.username.trim().length > 0)) {
      valid = false;
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }

    if (!(formData.mail.trim().length > 0)) {
      valid = false;
      setMailError(true);
    } else {
      setMailError(false);
    }

    if (!(formData.mail.trim().length > 0)) {
      valid = false;
      setMailError(true);
    } else {
      setMailError(false);
    }

    if (!(formData.mobile.trim().length > 0)) {
      valid = false;
      setMobileError(true);
    } else {
      setMobileError(false);
    }

    if (!formData.check) {
      valid = false;
      setCheckboxError(true);
    } else {
      setCheckboxError(false);
    }

    if (valid) {
      window.localStorage.setItem("userData", JSON.stringify(formData));
      navigate("/category");
    }
  };
  return (
    <>
      <div className={styles.regPageContainer}>
        <div className={styles.topSecOfRegPage}>
          <p className={styles.headingRegPage}>Super app</p>
          <p className={styles.textRegPage}>Create your new account</p>
        </div>
        <form className={styles.formMain} action="" method="post">
          <input
            type="text"
            name="name"
            id="nameInForm"
            placeholder="Name"
            className={styles.inpField}
            onChange={(e) => handleChange(e)}
          />
          {nameError ? (
            <p className={styles.error}>Field is required</p>
          ) : (
            <>
              <p style={{ marginTop: "10px" }}></p>
            </>
          )}
          <input
            type="text"
            name="username"
            id="userNameInForm"
            placeholder="UserName"
            className={styles.inpField}
            onChange={(e) => handleChange(e)}
          />
          {usernameError ? (
            <p className={styles.error}>Field is required</p>
          ) : (
            <>
              <p style={{ marginTop: "10px" }}></p>
            </>
          )}
          <input
            type="email"
            name="mail"
            id="mailInForm"
            placeholder="Email"
            className={styles.inpField}
            onChange={(e) => handleChange(e)}
          />
          {mailError ? (
            <p className={styles.error}>Field is required</p>
          ) : (
            <>
              <p style={{ marginTop: "10px" }}></p>
            </>
          )}
          <input
            type="tel"
            name="mobile"
            id="mobileInForm"
            placeholder="Mobile"
            className={styles.inpField}
            onChange={(e) => handleChange(e)}
          />
          {mobileError ? (
            <p className={styles.error}>Field is required</p>
          ) : (
            <>
              <p style={{ marginTop: "10px" }}></p>
            </>
          )}
          <div className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              name="check"
              id={styles.checkboxInForm}
              onChange={(e) => {
                setFormData({ ...formData, [e.target.name]: e.target.checked });
              }}
            />
            <label
              className={styles.checkboxLabel}
              htmlFor={styles.checkboxInForm}
            >
              Share my registration data with Superapp
            </label>
          </div>
          {checkboxError ? (
            <p className={styles.error}>
              Check this box if you want to proceed
            </p>
          ) : (
            <>
              <p style={{ marginTop: "10px" }}></p>
            </>
          )}
          <input
            type="submit"
            value="SIGN UP"
            className={styles.signUpBtn}
            onClick={(e) => handleSubmit(e)}
          />
          <div className={styles.tAndcText}>
            <p>
              By clicking on Sign up. you agree to Superapp
              <a href="#"> Terms and Conditions of Use</a>
            </p>
            <p>
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp
              <a href="#"> Privacy Policy</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignupSection;
