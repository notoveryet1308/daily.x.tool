import { Input } from "../../../../../component/UI/Input";
import { StyledSummaryView } from "./style";

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
        <Input
          type="text"
          name="ticketSummary"
          placeholder="Add summary"
          value={value}
          onChangeHandler={({
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
