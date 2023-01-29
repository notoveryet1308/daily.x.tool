import { StyledSortContent, StyledRadio } from "./style";

const SortContent = () => {
  return (
    <StyledSortContent>
      <StyledRadio.Group className="sort-by-date">
        <StyledRadio className="sort-by-option" value="createdOn">
          Created
        </StyledRadio>
        <StyledRadio className="sort-by-option" value="createdOn">
          Updated
        </StyledRadio>
      </StyledRadio.Group>
    </StyledSortContent>
  );
};

export default SortContent;
