import FormField from "./FormField";
import { useUserSignup } from "./hooks";
import { StyledSignupPageWrapper } from "./style";

const Signup = () => {
  const { signupValues, dispatchSignup } = useUserSignup();
  return (
    <StyledSignupPageWrapper>
      <div className="main-content">
        <h2 className="signup-title">Create account 🎉</h2>
        <FormField
          formValues={signupValues}
          onChangeHandler={dispatchSignup}
          allowSubmitAction={false}
        />
      </div>
    </StyledSignupPageWrapper>
  );
};

export default Signup;
