import styled from 'styled-components';

export const StyledNoteView = styled.div<{ colorHex: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 16px;
  gap: 8px;
  /* max-width: 300px; */

  background-color: ${({ theme, colorHex }) =>
    theme.mixins.convertHexToHsl({
      colorHex,
      saturation: theme.colors.saturation,
      lightness: theme.colors.lightnessL1,
    })};

  .note-view-title {
    font-size: ${({ theme }) => theme.fontSize.medium};
    line-height: 18px;
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-weight: bold;
    margin-top: 8px;
  }

  .note-view-description {
    font-size: ${({ theme }) => theme.fontSize.medium};
    line-height: 18px;
    color: ${({ theme }) => theme.colors.secondaryTextColor};
  }

  .note-view-tags {
    display: flex;
    gap: 8px;
    margin-top: 8px;
  }

  .edit-icon {
    position: absolute;
    bottom: 16px;
    right: 16px;
    font-size: 20px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  .note-view-pinned {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${({ theme, colorHex }) =>
      theme.mixins.convertHexToHsl({
        colorHex,
        saturation: theme.colors.saturation,
        lightness: theme.colors.lightnessL3,
      })};
  }
`;
