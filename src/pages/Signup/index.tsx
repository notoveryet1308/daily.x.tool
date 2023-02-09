import { useCallback } from "react";
import { Redirect } from "react-router-dom";
import { ErrorToast, SuccessToast } from "../../component/Toast";
import { useAppDataContext } from "../../Context/AppDataContext";
import FormField from "./FormField";
import { useUserSignup } from "./hooks";
import { StyledSignupPageWrapper } from "./style";

const Signup = () => {
  const { isUserAuthenticated, loggedInUserDetail } = useAppDataContext();
  const {
    signupValues,
    dispatchSignup,
    handleUserCreation,
    data,
    loading,
    error: queryError,
  } = useUserSignup();

  const error = useCallback(() => {
    return Object.keys(signupValues.fieldsCheck).map((key) => {
      const fieldData = signupValues.fieldsCheck[key];
      if (
        fieldData.isPresent &&
        fieldData.isValid !== null &&
        !fieldData.isValid
      ) {
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

  if (isUserAuthenticated && loggedInUserDetail) {
    return <Redirect to="/" />;
  }

  return (
    <StyledSignupPageWrapper>
      {queryError?.message && (
        <ErrorToast message={queryError.message} position="full" />
      )}
      <div className="main-content">
        <h2 className="signup-title">Create an account 🎉</h2>
        <div className="signup-validation-error">{error()}</div>
        <FormField
          formValues={signupValues}
          onChangeHandler={dispatchSignup}
          allowSubmitAction={false}
          handleUserCreation={handleUserCreation}
          userData={data?.createUser}
          isLoading={loading}
        />
      </div>
    </StyledSignupPageWrapper>
  );
};

export default Signup;
