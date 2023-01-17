import { Input } from 'antd';
import styled from 'styled-components';

const { TextArea } = Input;

export const StyledInput = styled.input<{ bordered: boolean | undefined; isDisabled: boolean; errorBorder: boolean; }>`
  padding: ${({ bordered }) => (bordered ? '8px 16px' : 0)};
  border-radius: 4px;
  border: 1px solid ${({ theme, errorBorder }) => errorBorder? theme.colors.errorLight: theme.colors.secondaryColor};
  background-color: inherit;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: inherit;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  outline: none;
  border: ${({ bordered }) => !bordered && 'none'};
  cursor: ${({ isDisabled }) => isDisabled ? 'no-drop':'pointer'};

  &&::placeholder {
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colors.tertiaryTextColor};
  }


  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    box-shadow: none;
  }
`;

export const StyledUserInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.space.small};
  position: relative;

  .user-input-label {
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    font-size: ${({ theme }) => theme.fontSize.medium};
    text-transform: capitalize;

    .optional-field {
      color: ${({ theme }) => theme.colors.tertiaryTextColor};
      margin-left: ${({ theme }) => theme.space.xSmall};
    }
  }

  .error-message-input{
    position: absolute;
    bottom:-18px;
    color: ${({ theme }) => theme.colors.errorDark};
    font-size:${({ theme }) => theme.fontSize.small};
  }
`;

export const StyledTextArea = styled(TextArea)<{ minheight?: number }>`
  width: 100%;
  height: auto;
  outline: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-family: inherit;
  background-color: inherit;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  border: 1px solid ${({ theme }) => theme.colors.secondaryColor};

  &.ant-input {
    min-height: ${({ minheight }) => minheight}px;
  }
  &&::placeholder {
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colors.tertiaryTextColor};
  }

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    box-shadow: none;
  }
`;
