import { StyledSummaryView } from "./style";
import { StyledTicketSummaryInput } from "./style";

const TicketSummary = ({
  value,
  isCreating,
  onChangeHandler,
}: {
  isCreating: boolean;
  value: string;
  onChangeHandler?: Function;
}) => {
  return (
    <>
      {isCreating ? (
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
            onChangeHandler && onChangeHandler({ value: ticketSummary, field });
          }}
        />
      ) : (
        <StyledSummaryView>{value}</StyledSummaryView>
      )}
    </>
  );
};

export default TicketSummary;
