import { useEffect } from "react";

import NoteInputs from "../../CreateNoteDetail/InputFields";
import { NoteEditPropsType } from "./type";

import { StyledNoteEdit } from "./style";
import { useNoteDataHandler } from "../../CreateNoteDetail/hooks";
import { useNoteContext } from "../../../Context/NoteDataProvider";
import { PrimaryButton, SecondaryButton } from "../../UI/Button";
import Loader from "../../UI/Loader";
import { useUpdateNote } from "./hooks";

const NoteEdit = ({
  id,
  title,
  description,
  tags,
  hexCode,
  updatedOn,
  createdOn,
  isPinned,
  toggleIsEditing,
}: NoteEditPropsType) => {
  const { handleNoteUpdate } = useUpdateNote();
  const { noteDataHandler, updateCurrentNote } = useNoteDataHandler();
  const { currentNote } = useNoteContext();

  useEffect(() => {
    updateCurrentNote({
      id,
      title,
      description,
      tags: tags || [],
      hexCode,
      updatedOn,
      createdOn,
      isPinned,
    });
  }, []);

  if (!currentNote.isUpdated) {
    return <Loader />;
  }

  return (
    <StyledNoteEdit>
      <div className="note-edit-input">
        <NoteInputs
          noteDataHandler={noteDataHandler}
          currentNote={currentNote}
          tagOptions={[]}
        />
      </div>
      <div className="note-edit-action-btn">
        <SecondaryButton
          label="Cancel"
          onClick={toggleIsEditing}
          className="note-edit-cancel-btn"
        />
        <PrimaryButton
          label="Update note"
          onClick={() => {
            if (currentNote.isAllRequiredDataAvailable) {
              handleNoteUpdate();
              toggleIsEditing();
            }
          }}
          disabled={!currentNote.isAllRequiredDataAvailable}
        />
      </div>
    </StyledNoteEdit>
  );
};

export default NoteEdit;
