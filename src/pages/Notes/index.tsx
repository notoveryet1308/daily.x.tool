import { Plus } from "phosphor-react";

import { StyledNotesPageWrapper } from "./style";
import { CreateNavButton } from "../../component/UI/Button";
import NoteListDisplay from "./NoteListDisplay";
import { useNoteData } from "./hook";
import MovableWrapper from "../../component/MovableWrapper";

export const Notes = () => {
  const { noteCollection, getNoteQuery, userLogged } = useNoteData();

  return (
    <StyledNotesPageWrapper>
      <div className="main-content-wrapper">
        <div className="main-content">
          <div className="note-filter"></div>
          <div className="note-list-wrapper">
            <NoteListDisplay
              data={
                userLogged ? getNoteQuery.data?.getNote || [] : noteCollection
              }
              queryState={{
                isLoading: userLogged ? getNoteQuery.loading : false,
                error: userLogged ? getNoteQuery.error?.message : "",
              }}
            />
          </div>
          <MovableWrapper className="create-note-btn-wrapper">
            <CreateNavButton
              label="Create"
              className="create-note-btn"
              icon={<Plus className="plus-icon" weight="fill" />}
              to="/notes/create"
            />
          </MovableWrapper>
        </div>
      </div>
    </StyledNotesPageWrapper>
  );
};

export default Notes;
