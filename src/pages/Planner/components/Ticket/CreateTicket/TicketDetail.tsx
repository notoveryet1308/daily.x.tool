import RichTextInput, {
  RichTextReadOnly,
} from "../../../../../component/UI/RichTextEditor";

const TicketDetail = ({
  value,
  isCreating,
  onChangeHandler,
}: {
  isCreating: boolean;
  value: string;
  onChangeHandler: Function;
}) => {
  return (
    <>
      {isCreating ? (
        <RichTextInput
          value={value}
          name="ticketDetail"
          className="ticket-detail-input"
          placeholder="Add description"
          autoFocus={false}
          onChange={({
            ticketDetail,
            field,
          }: {
            ticketDetail: string;
            field: string;
          }) => {
            onChangeHandler({ value: ticketDetail, field });
          }}
        />
      ) : (
        <RichTextReadOnly
          value={value}
          name="ticketDetail"
          className="ticket-detail-input"
        />
      )}
    </>
  );
};

export default TicketDetail;
