import SignupForm from "@/components/SignupForm/SignupForm";
import React from "react";

const SignupPage = ({ params: { locale } }) => {
  return (
    <div className="containerCenter">
      <SignupForm locale={locale} />
    </div>
  );
};

export default SignupPage;
