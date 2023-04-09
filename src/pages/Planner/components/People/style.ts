import styled from "styled-components";

export const StyledPeopleContent = styled.div`
  width: 100%;

  .team-member-list {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 200px;
    overflow-y: auto;
    gap: 12px;
    padding: 24px;
  }
`;

export const StyledAddToTeam = styled.div`
  padding: 0 24px;
  flex: 1;
`;
