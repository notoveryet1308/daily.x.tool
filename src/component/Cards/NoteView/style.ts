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
  hexCode: string;
  showAnimation: boolean;
  editMode: boolean;
  isEditing: boolean;
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

  background-color: ${({ theme, hexCode, editMode }) =>
    !editMode
      ? theme.mixins.convertHexToHsl({
          hexCode,
          saturation: theme.colors.saturation,
          lightness: theme.colors.lightnessL1,
        })
      : theme.colors.tertiaryBgColor};

  .note-view-title {
    line-height: 18px;
    font-size: ${({ theme }) => theme.fontSize.large};
    color: ${({ theme }) => theme.colors.primaryTextColor};
    margin-bottom: 8px;
  }
  .note-preview-title {
    line-height: 18px;
    font-size: ${({ theme }) => theme.fontSize.large};
    color: ${({ theme }) => theme.colors.tertiaryTextColor};
    margin-bottom: 8px;
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

    .edit-icon {
      cursor: ${({ isEditing }) => (isEditing ? 'no-drop' : 'pointer')};
      color: ${({ theme, isEditing }) =>
        isEditing && theme.colors.disabledColor};
    }
  }

  .note-view-pinned {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${({ theme, hexCode }) =>
      theme.mixins.convertHexToHsl({
        hexCode,
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

export const StyledNoteEdit = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .note-edit-input {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .main-input-form-title {
      border: none;
      background-color: ${({ theme }) => theme.colors.secondaryBgColor};
    }
  }

  .note-edit-action-btn {
    display: flex;
    gap: 12px;
    align-self: flex-end;
  }
`;
