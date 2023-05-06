import { RichTextReadOnly } from "../../../../../../component/UI/RichTextEditor";
import TicketDescription from "./components/TicketDescription";
import TicketSummary from "./components/TicketSummary";
import { StyledViewFiled } from "./style";

const ViewFields = ({
  summaryValue,
  descriptionValue,
  onDoubleClick,
}: {
  summaryValue: string;
  descriptionValue: string;
  onDoubleClick: Function;
}) => {
  return (
    <StyledViewFiled onDoubleClick={() => onDoubleClick()}>
      <TicketSummary value={summaryValue} isCreating={false} />
      <TicketDescription value={descriptionValue} isCreating={false} />
    </StyledViewFiled>
  );
};

export default ViewFields;
