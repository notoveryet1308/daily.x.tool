import {
  PrimaryButton,
  TertiaryButton,
} from "../../../../../../component/UI/Button";
import TicketDescription from "./components/TicketDescription";
import TicketSummary from "./components/TicketSummary";

import { StyledCreateEditFields } from "./style";

const CreateEditFields = ({
  isEditing,
  onSaveEdited = () => {},
  onCancelEditing = () => {},
  summaryValue,
  descriptionValue,
  onChangeHandler,
}: {
  isEditing?: boolean;
  onSaveEdited?: Function;
  onCancelEditing?: Function;
  summaryValue: string;
  descriptionValue: string;
  onChangeHandler: Function;
}) => {
  return (
    <StyledCreateEditFields>
      <TicketSummary
        isCreating
        value={summaryValue}
        onChangeHandler={onChangeHandler}
      />
      <TicketDescription
        isCreating
        value={descriptionValue}
        onChangeHandler={onChangeHandler}
      />
      {isEditing && (
        <div className="edit-filed-footer">
          <TertiaryButton label="Cancel" onClick={onCancelEditing} />
          <PrimaryButton label="Save" onClick={onSaveEdited} />
        </div>
      )}
    </StyledCreateEditFields>
  );
};

export default CreateEditFields;
