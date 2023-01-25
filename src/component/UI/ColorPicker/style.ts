import styled from 'styled-components';

export const StyledColorPicker = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .color-picker-label {
    color: ${({ theme }) => theme.colors.secondaryTextColor};
  }

  .color-picker-content {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  #color-picker-input {
    visibility: hidden;
    width: 2px;
    height: 100%;
  }

  .plus-circle-icon {
    font-size: 28px;
    cursor: pointer;
    margin-left: 4px;
    color: ${({ theme }) => theme.colors.tertiaryTextColor};
  }
`;

export const StyledColorBox = styled.div<{
  hexCode: string;
  isSelected: boolean;
}>`
  width: 32px;
  height: 32px;
  display: flex;
  cursor: pointer;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.8)};
  background-color: ${({ theme }) => theme.colors.primaryBgColor};
  border: 2px solid
    ${({ hexCode, isSelected }) => (isSelected ? hexCode : 'transparent')};

  .color-box-select {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: ${({ hexCode }) => hexCode};
  }
`;

export const StyledColorInput = styled.input`
  border: none;
  width: 32px;
  height: 32px;
`;
