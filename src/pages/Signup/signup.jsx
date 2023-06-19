import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [validateEmail, setValidateEmail] = useState(false);
  const [validatePassword, setValidatePassword] = useState(false);

  const navigate = useNavigate();

  const handleEmail = (event) => {
    setemail(event.target.value);
    if (event.target.value.match("@")) {
      setValidateEmail(true);
    } else {
      setValidateEmail(false);
    }
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length >= 8) {
      setValidatePassword(true);
    } else {
      setValidatePassword(false);
    }
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://www.pre-onboarding-selection-task.shop/auth/signup", {
        email,
        password,
      })
      .then((res) => {
        console.log("회원가입에 성공!");
        navigate("/signin");
      })
      .catch((errer) => {
        console.log("회원가입에 실패");
      });
  };

  return (
    <>
      <h2 aria-hidden="true">SignUp</h2>
      <input
        data-testid="email-input"
        type="text"
        value={email}
        onChange={handleEmail}
      />
      <input
        data-testid="password-input"
        type="password"
        value={password}
        onChange={handlePassword}
      />
      <button
        data-testid="signup-button"
        type="submit"
        onClick={handleSignUpSubmit}
        disabled={validateEmail && validatePassword ? false : true}
      >
        회원가입
      </button>
      <p>
        <button type="button" onClick={() => navigate("/signin")}>
          로그인
        </button>
        하러가기
      </p>
    </>
  );
}
export default SignUp;
