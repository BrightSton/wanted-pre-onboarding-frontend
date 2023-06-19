import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validateEmail, setValidateEmail] = useState(false);
  const [validatePassword, setValidatePassword] = useState(false);

  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
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

  const handleSignInSubmit = async (event) => {
    event.preventDefault();

    await axios
      .post("https://www.pre-onboarding-selection-task.shop/auth/signin", {
        email,
        password,
      })
      .then((res) => {
        window.localStorage.setItem("token", res.data.access_token);
        console.log("로그인에 성공!");
        navigate("/todo");
      })
      .catch((error) => {
        console.log("로그인에 실패!");
      });
  };

  return (
    <>
      <h2 aria-hidden="true">SignIn</h2>
      <input
        data-testid="email-input"
        type="text"
        value={email}
        placeholder="email 입력란"
        onChange={handleEmail}
      />
      <input
        data-testid="password-input"
        type="password"
        value={password}
        placeholder="8글자 이상"
        onChange={handlePassword}
      />
      <button
        data-testid="signIn-button"
        type="submit"
        onClick={handleSignInSubmit}
        disabled={validateEmail && validatePassword ? false : true}
      >
        로그인
      </button>
      <p>
        <button type="button" onClick={() => navigate("/signup")}>
          회원가입
        </button>
        하러가기
      </p>
    </>
  );
}

export default SignIn;
