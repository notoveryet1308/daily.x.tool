import styled from 'styled-components';

export const StyledRichTextWrapper = styled.div`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};
  padding: 16px;
  width: 100%;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.secondaryTextColor};

  .rich-text-editor {
    min-height: 100px !important;
  }

  &.rich-text-view-mode {
    background-color: inherit;
    padding: 0;
    blockquote {
      background: ${({ theme }) => theme.colors.secondaryBgColor};
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
