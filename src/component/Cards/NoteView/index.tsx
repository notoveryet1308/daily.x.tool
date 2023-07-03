import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { StyledNoteView } from "./style";
import { useNoteContext } from "../../../Context/NoteDataProvider";

import { useState } from "react";
import NoteDisplay from "./NoteDisplay";
import { NotePropsType } from "./type";
import NoteEdit from "./NoteEdit";

const updatedNowLimit = "a few seconds ago";
dayjs.extend(relativeTime);

const NoteView = (props: NotePropsType) => {
  const { updatedOn, hexCode, className, id, isPinned } = props;
  const [isEditing, setEditing] = useState(false);

  const isAddedJustNow = dayjs(updatedOn).fromNow() === updatedNowLimit;

  const { noteDispatch, isEditing: inEditMode } = useNoteContext();

  const toggleIsEditing = () => {
    setEditing(!isEditing);
    noteDispatch({ type: "reset-current-note", payload: "" });
    noteDispatch({ type: "set-note-editing-status", payload: !isEditing });
  };

  return (
    <StyledNoteView
      hexCode={hexCode}
      className={`note-view-card ${className}`}
      showAnimation={isAddedJustNow}
      editMode={isEditing}
      isEditing={inEditMode}
      onDoubleClick={() =>
        noteDispatch({
          type: "update-isPinned-status",
          payload: { id, isPinned: !isPinned },
        })
      }
    >
      {!isEditing ? (
        <NoteDisplay
          {...props}
          toggleIsEditing={toggleIsEditing}
          isEditMode={inEditMode}
        />
      ) : (
        <NoteEdit {...props} toggleIsEditing={toggleIsEditing} />
      )}
    </StyledNoteView>
  );
};

export default NoteView;
