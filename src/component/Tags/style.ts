import styled from "styled-components";

export const StyledTag = styled.span<{
  hexCode: string;
  isClearable: boolean;
}>`
  padding: 4px 8px;
  color: ${({ theme }) => theme.colors.primaryTextColor};
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: 12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: ${({ isClearable }) => (isClearable ? "pointer" : "auto")};
  line-height: 14px;

  background-color: ${({ theme, hexCode }) =>
    theme.mixins.convertHexToHsl({
      hexCode,
      saturation: theme.colors.saturation,
      lightness: theme.colors.lightnessL2,
    })};

  .close-icon {
    font-size: 12px;
  }
`;

export const StyledColorTag = styled.div<{
  hexCode: string;
  isSelected: boolean;
}>`
  width: 60px;
  height: 24px;
  background-color: ${({ hexCode, isSelected }) =>
    !isSelected ? hexCode : "transparent"};
  border-radius: 16px;
  border: 2px solid ${({ hexCode }) => hexCode};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .selected {
    width: 50px;
    height: 16px;
    border-radius: 8px;
    background-color: ${({ hexCode, isSelected }) =>
      isSelected ? hexCode : "inherit"};
  }
`;
