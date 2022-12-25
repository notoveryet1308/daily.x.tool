import { Input } from 'antd';
import styled from 'styled-components';

const { TextArea } = Input;

export const StyledInput = styled.input<{ bordered: boolean | undefined }>`
  padding: ${({ bordered }) => (bordered ? '8px 16px' : 0)};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryColor};
  background-color: inherit;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: inherit;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  outline: none;
  border: ${({ bordered }) => !bordered && 'none'};

  &&::placeholder {
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colors.tertiaryTextColor};
  }
  &.ant-input-disabled {
    cursor: no-drop;
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

  .user-input-label {
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    font-size: ${({ theme }) => theme.fontSize.medium};
    text-transform: capitalize;

    .optional-field {
      color: ${({ theme }) => theme.colors.tertiaryTextColor};
      margin-left: ${({ theme }) => theme.space.xSmall};
    }
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
