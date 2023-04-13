import StepOneView from "./StepOneView";
import TicketSummary from "./TicketSummary";
import { StyledCreateStepTwo } from "./style";

const CreateStepTwo = ({
  onCancel,
  ticketSummary = "",
  isCreating,
  onChangeHandler,
}: {
  onCancel?: Function;
  ticketSummary: string;
  isCreating: boolean;
  onChangeHandler: Function;
}) => {
  return (
    <StyledCreateStepTwo>
      <div className="section-left">
        <TicketSummary
          value={ticketSummary}
          isEditing={isCreating}
          onChangeHandler={onChangeHandler}
        />
      </div>
      <div className="section-right"></div>
    </StyledCreateStepTwo>
  );
};

export default CreateStepTwo;
