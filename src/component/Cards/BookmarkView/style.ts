import styled from "styled-components";

export const StyledBookmarViewCard = styled.a<{ isMouseHover: boolean }>`
  text-decoration: none;
  position: relative;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primaryGreyColor};
  overflow: hidden;
  display: flex;
  transition: border-color 300ms ease;

  .bkm-img-holder {
    width: 150px;
    height: 180px;
    position: relative;
  

    .bkm-img {
      width: 100%;
      max-height: 180px;
      object-fit: cover;
    }
    
    .bkm-img-empty{
      width: 150px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      
      .bkm-icon-bookmark{
        font-size: 32px;
        color:${({ theme }) => theme.colors.secondaryGreyColor};
      }
    }

    .bkm-actions {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      top: 0;
      opacity: ${({ isMouseHover }) => (isMouseHover ? 0.95 : 0.6)};
      background-color: ${({ theme }) => theme.colors.secondaryBgColor};

      .bkm-icon {
        font-size: 20px;
        color: ${({ theme }) => theme.colors.primaryColor};
        z-index: 2;
        filter: blur(0);

        &:hover {
          color: ${({ theme }) => theme.colors.primaryTextColor};
        }
      }
    }
  }

  .bkm-info-content {
    position: relative;
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;

    .bkm-title {
      color: ${({ theme }) => theme.colors.primaryTextColor};
      font-size: 14px;
    }
    .bkm-description {
      color: ${({ theme }) => theme.colors.secondaryTextColor};
      font-size: 12px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      white-space: pre-wrap;
    }
    .bkm-domain {
      color: ${({ theme }) => theme.colors.tertiaryTextColor};
      font-size: 12px;
    }

    .bkm-tags {
      position: relative;
      display: flex;
      gap: 8px;
      overflow-x: auto;
      flex: 1;
      align-items: flex-end;

      &::-webkit-scrollbar {
        display: none;
      }
      
      &::after{
        content:'',
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 40px;
        height: 40px;
      }
    }
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryColor};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_MOBILE}px) {
    flex-direction: column;

    .bkm-img-holder {
      width: 100%;
       height: 100px;
      .bkm-img {
        max-height: 100px;
      }
      
      .bkm-img-empty{  
        width: 100%;
        height: 100px;
      }
    }
  }
`;
