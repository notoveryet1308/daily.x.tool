import styled from 'styled-components';

export const StyledTag = styled.span<{
  colorHex: string;
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
  cursor: ${({ isClearable }) => (isClearable ? 'pointer' : 'auto')};
  line-height: 14px;

  background-color: ${({ theme, colorHex }) =>
    theme.mixins.convertHexToHsl({
      colorHex,
      saturation: theme.colors.saturation,
      lightness: theme.colors.lightnessL2,
    })};

  .close-icon {
    font-size: 12px;
  }
`;
