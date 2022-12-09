import styled, { keyframes } from 'styled-components';

const dropdownOpenAnimation = () => keyframes`
  from{
    transform: translateY(0);
  }
  to{
    transform: translateY(10%);
  }

`;

export const StyledSelect = styled.div<{ isSearchable: boolean }>`
  position: relative;
  width: 100%;
  .select-top {
    width: 100%;
    display: flex;
    border-radius: 4px;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.colors.secondaryBgColor};
    overflow: hidden;
    .selected-value-wrapper {
      display: flex;
      padding: 8px 16px;
    }

    .select-input-wrapper {
      cursor: ${({ isSearchable }) => (isSearchable ? 'auto' : 'pointer')};
      padding: 8px 16px;
      width: 100%;
      display: flex;
    }

    .ph-icon {
      font-size: 20px;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.secondaryTextColor};
    }
  }

  .select-menu-wrapper {
    width: 100%;
    margin-top: 4px;

    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.secondaryBgColor};
    padding: 8px 0px;

    .select-search {
      padding: 8px 16px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryColor};
      margin-bottom: 8px;
    }

    .render-options {
      .render-option-list {
        overflow-x: hidden;
        flex-wrap: wrap;
        height: 100%;
        overflow-y: auto;
        max-height: 300px;
        scrollbar-width: unset;

        &::-webkit-scrollbar {
          display: block; /* Safari and Chrome */
        }
      }
    }
  }
`;

export const StyledSelectInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  cursor: inherit;
  text-align: left;
  background-color: inherit;
  color: ${({ theme }) => theme.colors.primaryTextColor};

  &::placeholder {
    color: ${({ theme }) => theme.colors.tertiaryTextColor};
  }
`;

export const StyledRenderOption = styled.div`
  width: 100%;
  display: flex;
  padding: 8px 16px;
  align-items: center;
  justify-content: space-between;

  .render-option-list {
    flex: 1;
    gap: 8px;
    width: 90%;
    display: flex;
    overflow-x: auto;
    align-items: center;
    scrollbar-width: none;
    justify-content: flex-start;

    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
  }

  .empty-menu-option-message {
    font-size: ${({ theme }) => theme.fontSize.small2};
    color: ${({ theme }) => theme.colors.tertiaryTextColor};
  }

  .create-search-tag {
    display: flex;
    gap: 8px;
    align-items: center;
    .create-search-label {
      color: ${({ theme }) => theme.colors.secondaryTextColor};
    }
  }
`;
