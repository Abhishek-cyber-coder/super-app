import React from "react";
import LeftImg from "../components/RegisterPage/LeftImg";
import SignupSection from "../components/RegisterPage/SignupSection";
function RegisterPage() {
  return (
    <div style={{ display: "flex" }}>
      <LeftImg />
      <SignupSection />
    </div>
  );
}

export default RegisterPage;
