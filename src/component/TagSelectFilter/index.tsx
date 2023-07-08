import { useState } from "react";
import Select from "../UI/Select";
import Loader from "../UI/Loader";
import { isUserAuthenticated } from "../../utils";

import { useGetTags } from "../../CommonGQL/hooks";
import { StyledTagFilter } from "./style";
import { tagType } from "../../Context/types";

const TagSelectFilter = ({
  onDataChange,
  filterLabel,
  selectLabel,
}: {
  onDataChange: Function;
  filterLabel: string;
  tagFilterName: string;
  selectLabel?: string;
}) => {
  const [selectedValues, setSelectedValues] = useState<tagType[]>([]);
  const tagQuery = useGetTags();
  const logged = isUserAuthenticated();

  return (
    <StyledTagFilter>
      {!!filterLabel && <span className="tag-label"> {filterLabel} </span>}
      {logged && tagQuery.loading ? (
        <Loader />
      ) : (
        <Select
          name="filterTag"
          options={tagQuery.data?.getTag}
          btnLabel={selectLabel || "Choose tag"}
          values={selectedValues}
          onChange={({ filterTag }: { filterTag: tagType[] }) => {
            onDataChange({ filterTag });
            setSelectedValues(filterTag);
          }}
          isClearable
          isSearchable={false}
          creationQueryState={{
            loading: tagQuery.loading,
            error: `${tagQuery.error}`,
          }}
        />
      )}
    </StyledTagFilter>
  );
};

export default TagSelectFilter;
