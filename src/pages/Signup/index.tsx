import { useCallback } from "react";
import { ErrorToast } from "../../component/Toast";
import FormField from "./FormField";
import { useUserSignup } from "./hooks";
import { StyledSignupPageWrapper } from "./style";

const Signup = () => {
  const { signupValues, dispatchSignup } = useUserSignup();

  const error = useCallback(() => {
    return Object.keys(signupValues.fieldsCheck).map((key) => {
      const fieldData = signupValues.fieldsCheck[key];
      if (fieldData.isPresent && !fieldData.isValid) {
        return (
          <ErrorToast
            key={key}
            message={fieldData.validateErrorMessage}
            position="inline"
          />
        );
      }
      return null;
    });
  }, [
    signupValues.fieldsCheck.name.isValid,
    signupValues.fieldsCheck.email.isValid,
    signupValues.fieldsCheck.password.isValid,
    signupValues.fieldsCheck.confirmPassword.isValid,
  ]);

  return (
    <StyledSignupPageWrapper>
      <div className="main-content">
        <h2 className="signup-title">Create an account 🎉</h2>
        <div className="signup-validation-error">{error()}</div>
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
