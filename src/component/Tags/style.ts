import styled from 'styled-components';

export const StyledTag = styled.span<{ colorHex: string }>`
  padding: 4px 8px;
  color: ${({ theme }) => theme.colors.primaryTextColor};
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: 12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;

  background-color: ${({ theme, colorHex }) =>
    theme.mixins.convertHexToHsl({
      colorHex,
      saturation: theme.colors.saturation,
      lightness: theme.colors.lightnessL2,
    })};
`;
