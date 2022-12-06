import styled from 'styled-components';

export const StyledMasonryGridWrapper = styled.div<{ minWidth: number | null }>`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ minWidth }) => `${minWidth}px` || '300px'}, 1fr)
  );
  grid-auto-rows: 5px;
`;
