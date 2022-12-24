import styled, { keyframes } from 'styled-components';

const borderAnimation = () => keyframes`
  from{
    border-color: rgba(38, 83, 217, .8);
  }
  to{
    border-color: rgba(172, 38, 217, .8);
    
  }
`;

export const StyledNoteView = styled.div<{
  colorHex: string;
  showAnimation: boolean;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 16px;
  gap: 16px;
  justify-content: space-between;
  border: 2px solid transparent;

  .top-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  background-color: ${({ theme, colorHex }) =>
    theme.mixins.convertHexToHsl({
      colorHex,
      saturation: theme.colors.saturation,
      lightness: theme.colors.lightnessL1,
    })};

  .note-view-title {
    line-height: 18px;
    font-size: ${({ theme }) => theme.fontSize.large};
    color: ${({ theme }) => theme.colors.primaryTextColor};
  }

  .note-view-description {
    font-size: ${({ theme }) => theme.fontSize.medium};
    line-height: 18px;
    color: ${({ theme }) => theme.colors.secondaryTextColor};
  }

  .note-view-tags {
    display: flex;
    gap: 12px;
    margin-top: 8px;
  }

  .action-btn-wrapper {
    position: absolute;
    display: flex;
    gap: 8px;
    bottom: 16px;
    right: 16px;
    .ph-icon {
      font-size: 20px;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.primaryColor};
    }
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

  .note-created-on {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.tertiaryTextColor};
  }

  animation-name: ${({ showAnimation }) => showAnimation && borderAnimation()};
  animation-duration: 5s;
  overflow: hidden;
`;
