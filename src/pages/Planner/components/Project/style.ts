import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledProjectContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .project-list {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 400px;
    overflow-y: auto;
  }

  .project-content-footer {
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 16px;
    justify-content: flex-end;
    padding: 12px;
  }
`;

export const StyledProjectCard = styled(NavLink)`
  text-decoration: none;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primaryGreyColor};
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.tertiaryBgColor};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 4px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondaryGreyColor};
  }

  .project-name {
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-size: 14px;
  }

  .project-details {
    display: flex;
    flex-wrap: wrap;
    row-gap: 4px;
    column-gap: 16px;
    font-size: 12px;

    .project-filed-info {
      display: flex;
      gap: 4px;
      align-items: center;
      color: ${({ theme }) => theme.colors.tertiaryTextColor};

      .project-filed-value {
        color: ${({ theme }) => theme.colors.primaryTextColor};
      }
    }
  }
`;

export const StyledCreateProjectFiled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  padding: 24px;
`;

export const StyledProjectName = styled.div`
  display: flex;
  padding: 4px 16px;
  background: ${({ theme }) => theme.colors.secondaryBgColor};
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primaryTextColor};
  font-size: 14px;
  border: 1px solid transparent;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryGreyColor};
  }
`;
