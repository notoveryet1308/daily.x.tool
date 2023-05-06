import RichTextInput, {
  RichTextReadOnly,
} from "../../../../../../../component/UI/RichTextEditor";

const TicketDescription = ({
  isCreating,
  onChangeHandler,
  value,
}: {
  isCreating: boolean;
  value: string;
  onChangeHandler?: Function;
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
            onChangeHandler && onChangeHandler({ value: ticketDetail, field });
          }}
        />
      ) : (
        <RichTextReadOnly
          value={JSON.parse(value)}
          className="ticket-detail-input"
        />
      )}
    </>
  );
};

export default TicketDescription;
