import Loader from "../../../../component/UI/Loader";

import { useGetAllTickets } from "../../graphql";
import { StyledTicket } from "./style";

import TicketList from "./TicketList";

const Ticket = () => {
  const { loading, data } = useGetAllTickets();

  console.log({ data });

  return (
    <StyledTicket>
      {loading ? (
        <Loader />
      ) : (
        data?.getAllTickets.length > 0 && (
          <TicketList ticketData={data?.getAllTickets} />
        )
      )}
    </StyledTicket>
  );
};

export default Ticket;
