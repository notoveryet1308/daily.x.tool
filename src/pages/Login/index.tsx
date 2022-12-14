import { NavLink, Redirect } from "react-router-dom";

import { PrimaryButton } from "../../component/UI/Button";
import { Input } from "../../component/UI/Input";
import { StyledLoginPageWrapper } from "./style";
import { useLoginUser } from "./hooks";
import { noop } from "../../utils";

const Login = () => {
  const {
    loginHandler,
    dispatchLoginCred,
    allowAction,
    loginCred,
    loading,
    data,
    error,
  } = useLoginUser();

  if (data) {
    localStorage.setItem("accessToken", JSON.stringify(data.login));
    return <Redirect to="/" />;
  }

  return (
    <StyledLoginPageWrapper>
      <div className="main-content">
        <h2 className="login-title">Welcome back</h2>
        <div className="login-filed">
          <Input
            name="email"
            type="email"
            label="Email"
            value={loginCred.email}
            onChangeHandler={({ email }: { email: string }) => {
              dispatchLoginCred({ type: "login-email", payload: email });
            }}
            placeholder="Enter your email here"
          />
          <Input
            name="password"
            type="password"
            label="Password"
            value={loginCred.password}
            onChangeHandler={({ password }: { password: string }) => {
              dispatchLoginCred({ type: "login-password", payload: password });
            }}
            placeholder="Enter your password here"
          />

          <PrimaryButton
            label={loading ? "Logging in.." : "Login"}
            onClick={allowAction ? loginHandler : noop}
          />
        </div>
        <div className="login-footer">
          <span className="subtext">OR</span>
          <span className="create-account">
            Create an&nbsp;
            <NavLink to="sign-up" className="sign-up-link">
              account ?
            </NavLink>
          </span>
        </div>
      </div>
    </StyledLoginPageWrapper>
  );
};

export default Login;
