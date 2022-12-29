import { useCallback, useEffect, useState } from "react";

import { PrimaryButton } from "../../component/UI/Button";
import { Input } from "../../component/UI/Input";
import { noop } from "../../utils";

import PasswordRules from "./PasswordRules";
import { StyledFormFieldWrapper } from "./style";
import { FormFiledType } from "./type";

const FormField = ({
  formValues,
  onChangeHandler,
  allowSubmitAction,
  handleUserCreation,
  userData,
  isLoading,
}: FormFiledType) => {
  const [focusedPassword, setPasswordFocused] = useState(false);
  if (userData) {
    console.log({ userData });
  }

  const passwordRules = useCallback(() => {
    return <PasswordRules password={formValues.password} />;
  }, [formValues.password]);
  
  useEffect(()=>{
    formValues.fieldsCheck["name"].isValid &&
            formValues.fieldsCheck["email"].isValid &&
            formValues.fieldsCheck["confirmPassword"].isValid &&
            handleUserCreation();
  }, [  formValues.fieldsCheck["name"].isValid,
  formValues.fieldsCheck["email"].isValid ,
  formValues.fieldsCheck["confirmPassword"].isValid])
  
  return (
    <StyledFormFieldWrapper>
      <Input
        type="text"
        name="name"
        label="Name"
        value={formValues.name}
        placeholder="name"
        onChangeHandler={({ name }: { name: string }) => {
          onChangeHandler({ type: "name", payload: name });
        }}
        errorMessage={
          !formValues.fieldsCheck["name"].isPresent
            ? formValues.fieldsCheck["name"].requiredErrorMessage
            : ""
        }
      />
      <Input
        type="email"
        name="email"
        label="Email"
        value={formValues.email}
        placeholder="email"
        onChangeHandler={({ email }: { email: string }) => {
          onChangeHandler({ type: "email", payload: email });
        }}
        errorMessage={
          !formValues.fieldsCheck["email"].isPresent
            ? formValues.fieldsCheck["email"].requiredErrorMessage
            : ""
        }
      />

      <div className="signup-password-rule">
        <Input
          type="password"
          name="password"
          label="Password"
          value={formValues.password}
          placeholder="password"
          onFocus={() => setPasswordFocused(true)}
          onChangeHandler={({ password }: { password: string }) => {
            onChangeHandler({ type: "password", payload: password });
          }}
          errorMessage={
            !formValues.fieldsCheck["password"].isPresent
              ? formValues.fieldsCheck["password"].requiredErrorMessage
              : ""
          }
        />
        {focusedPassword && passwordRules()}
      </div>

      <Input
        type="password"
        name="confirmPassword"
        label="Confirm password"
        value={formValues.confirmPassword}
        placeholder="confirm your password"
        onChangeHandler={({ confirmPassword }: { confirmPassword: string }) => {
          onChangeHandler({
            type: "confirmPassword",
            payload: confirmPassword,
          });
        }}
        errorMessage={
          !formValues.fieldsCheck["confirmPassword"].isPresent
            ? formValues.fieldsCheck["confirmPassword"].requiredErrorMessage
            : ""
        }
      />
      <PrimaryButton
        label={isLoading ? "Creating..." : "Signup"}
        type="submit"
        onClick={() => {
          onChangeHandler({ type: "check-field", payload: "" });

          console.log({ formValues });

          
        }}
      />
    </StyledFormFieldWrapper>
  );
};

export default FormField;
