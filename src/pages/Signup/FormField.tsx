import { PrimaryButton } from "../../component/UI/Button";
import { Input } from "../../component/UI/Input";
import { noop } from "../../utils";
import { StyledFormFieldWrapper } from "./style";
import { FormFiledType } from "./type";

const FormField = ({
  formValues,
  onChangeHandler,
  allowSubmitAction,
}: FormFiledType) => {
  return (
    <StyledFormFieldWrapper>
      <Input
        type="text"
        name="name"
        label="Name"
        value={formValues.name}
        placeholder="name"
        onChange={({ name }: { name: string }) => {
          onChangeHandler({ type: "name", payload: name });
        }}
        errorMessage={!formValues.fieldsCheck['name'].isPresent ? formValues.fieldsCheck['name'].requiredErrorMessage:''}
      />
      <Input
        type="email"
        name="email"
        label="Email"
        value={formValues.email}
        placeholder="email"
        onChange={({ email }: { email: string }) => {
          onChangeHandler({ type: "email", payload: email });
        }}
        errorMessage={!formValues.fieldsCheck['email'].isPresent ? formValues.fieldsCheck['email'].requiredErrorMessage:''}
      />

      <Input
        type="password"
        name="password"
        label="Password"
        value={formValues.password}
        placeholder="password"
        onChange={({ password }: { password: string }) => {
          onChangeHandler({ type: "password", payload: password });
        }}
        errorMessage={!formValues.fieldsCheck['password'].isPresent ? formValues.fieldsCheck['password'].requiredErrorMessage:''}
      />

      <Input
        type="password"
        name="confirmPassword"
        label="Confirm password"
        value="Rahul Raj"
        placeholder={formValues.confirmPassword}
        onChange={({ confirmPassword }: { confirmPassword: string }) => {
          onChangeHandler({
            type: "confirmPassword",
            payload: confirmPassword,
          });
        }}
        errorMessage={!formValues.fieldsCheck['confirmPassword'].isPresent ? formValues.fieldsCheck['confirmPassword'].requiredErrorMessage:''}
      />
      <PrimaryButton
        label="Signup"
        type="submit"
        onClick={() => {
          onChangeHandler({type:'check-field', payload:''})
          
          formValues.fieldsCheck['name'].isValid &&
          formValues.fieldsCheck['email'].isValid && 
          formValues.fieldsCheck['confirmPassword'].isValid && console.log('creating user...', formValues)
          
        }}
      />
    </StyledFormFieldWrapper>
  );
};

export default FormField;
