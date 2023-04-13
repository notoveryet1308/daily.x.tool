import { Input } from "../../../../../component/UI/Input";
import { StyledSummaryView } from "./style";
import { StyledTicketSummaryInput } from "./style";

const TicketSummary = ({
  value,
  isEditing,
  onChangeHandler,
}: {
  isEditing: boolean;
  value: string;
  onChangeHandler: Function;
}) => {
  return (
    <>
      {isEditing ? (
        <StyledTicketSummaryInput
          name="ticketSummary"
          placeholder="Add summary"
          value={value}
          // bordered={false}
          className="ticket-summary-input"
          onChange={({
            ticketSummary,
            field,
          }: {
            ticketSummary: string;
            field: string;
          }) => {
            onChangeHandler({ ticketSummary, field });
          }}
        />
      ) : (
        <StyledSummaryView>{value}</StyledSummaryView>
      )}
    </>
  );
};

export default TicketSummary;
