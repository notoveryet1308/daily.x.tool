import { NavLink, Redirect, useHistory, useLocation } from "react-router-dom";

import { PrimaryButton } from "../../component/UI/Button";
import { Input } from "../../component/UI/Input";
import { StyledLoginPageWrapper } from "./style";
import { useLoginUser } from "./hooks";
import { noop } from "../../utils";
import { useAppDataContext } from "../../Context/AppDataContext";
import { ErrorToast } from "../../component/Toast";

const Login = () => {
  const history = useHistory();
  const { state } = useLocation();
  const { isUserAuthenticated, loggedInUserDetail } = useAppDataContext();

  const {
    loginHandler,
    dispatchLoginCred,
    allowAction,
    loginCred,
    loading,
    error: queryError,
  } = useLoginUser();

  if (isUserAuthenticated && loggedInUserDetail) {
    history.push({ pathname: state?.from || "/" });
  }

  return (
    <StyledLoginPageWrapper>
      <div className="main-content">
        <h2 className="login-title">Welcome back</h2>

        <div className="login-filed">
          {queryError && (
            <ErrorToast message={queryError.message} position="full" />
          )}
          <Input
            name="email"
            type="email"
            label="Email"
            value={loginCred.email}
            onChangeHandler={({ email }: { email: string }) => {
              dispatchLoginCred({ type: "login-email", payload: email });
            }}
            placeholder="Enter your email here"
            errorBorder={!!queryError?.message}
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
            errorBorder={!!queryError?.message}
          />

          <PrimaryButton
            label={loading ? "Logging in.." : "Login"}
            onClick={allowAction ? loginHandler : noop}
            disabled={loading}
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
