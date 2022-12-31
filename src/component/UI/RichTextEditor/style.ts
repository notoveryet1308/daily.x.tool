import styled from 'styled-components';

export const StyledRichTextWrapper = styled.div<{ minHeight?: number }>`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};
  padding: 16px;
  width: 100%;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.secondaryTextColor};

  .rich-text-editor {
    min-height: ${({ minHeight }) => `${minHeight}px` || '100px'} !important;
  }

  &.rich-text-view-mode {
    background-color: inherit;
    padding: 0;
    blockquote {
      background: ${({ theme }) => theme.colors.secondaryBgColor};
    }
    &.show-border-left {
      padding-left: 8px;
      border-left: 1px solid ${({ theme }) => theme.colors.primaryTextColor};
      border-radius: 0;
    }
  }

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
  }

  h1,
  h2,
  blockquote,
  ul,
  ol,
  p {
    color: ${({ theme }) => theme.colors.secondaryTextColor};
  }

  code {
    padding: 4px 8px;
    color: #dc9544;
  }

  .rich-text-error{
    color: ${({ theme }) => theme.colors.errorDark};
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const StyledOlTag = styled.ol`
  margin: 12px 0 12px 20px;
  padding-left: 16px;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const StyledUlTag = styled.ul`
  margin: 12px 0 12px 20px;
  padding-left: 16px;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const StyledQuotes = styled.blockquote`
  border-left: 2px solid ${({ theme }) => theme.colors.primaryColor};
  margin: 10px 0;
  padding: 10px;
  color: ${({ theme }) => theme.colors.tertiaryTextColor};
  font-style: italic;
  background: ${({ theme }) => theme.colors.tertiaryBgColor};
`;
