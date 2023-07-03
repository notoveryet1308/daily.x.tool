import { Binoculars } from "phosphor-react";
import Loader from "../../../../component/UI/Loader";
import NoDataState from "../../../../component/UI/NoDataState";

import { useGetAllTickets } from "../../graphql";
import { StyledTicket } from "./style";

import TicketList from "./TicketList";

const Ticket = () => {
  const { loading, data } = useGetAllTickets();

  return (
    <StyledTicket>
      {loading ? (
        <Loader />
      ) : data?.getAllTickets.length > 0 ? (
        <TicketList ticketData={data?.getAllTickets} />
      ) : (
        <NoDataState
          className="no-tickets-found"
          message="No tickets found"
          icon={<Binoculars className="no-tickets-found-icon" />}
        />
      )}
    </StyledTicket>
  );
};

export default Ticket;
