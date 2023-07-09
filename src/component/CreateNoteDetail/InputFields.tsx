import { currentNoteDataType, tagType } from "../../Context/types";
import { isUserAuthenticated } from "../../utils";
import ColorPicker from "../UI/ColorPicker";
import { Input } from "../UI/Input";
import Loader from "../UI/Loader";
import RichTextInput from "../UI/RichTextEditor";
import Select from "../UI/Select";
import { useCreateTag, useGetTags } from "../../CommonGQL/hooks";

import { StyledNoteInputField } from "./style";

const InputFields = ({
  noteDataHandler,
  currentNote,
  tagOptions,
}: {
  noteDataHandler: Function;
  currentNote: currentNoteDataType;
  tagOptions: tagType[];
}) => {
  const { handleCreateTag } = useCreateTag();
  const tagQuery = useGetTags();

  return (
    <StyledNoteInputField>
      <div className="main-note-inputs">
        <Input
          type="text"
          name="noteTitle"
          placeholder="Enter note title"
          onChangeHandler={noteDataHandler}
          value={currentNote.data.title}
          className="main-input-form-title"
        />
        <RichTextInput
          maxHeight={400}
          minHeight={200}
          autoFocus={false}
          name="noteDescription"
          onChange={noteDataHandler}
          placeholder="Note description"
          className="create-note-description"
          value={currentNote.data.description}
        />
      </div>
      {isUserAuthenticated() && tagQuery.loading ? (
        <Loader />
      ) : (
        <Select
          isCreatable
          name="noteTags"
          options={tagQuery?.data?.getTag || tagOptions}
          onChange={noteDataHandler}
          values={currentNote.data.tags}
          searchPlaceholder="Search tags"
          onCreation={handleCreateTag}
          creationQueryState={{
            loading: tagQuery.loading,
            error: `${tagQuery.error}`,
          }}
        />
      )}

      <ColorPicker name="noteColor" onChange={noteDataHandler} />
    </StyledNoteInputField>
  );
};

export default InputFields;
