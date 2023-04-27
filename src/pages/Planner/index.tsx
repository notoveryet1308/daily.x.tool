import PlannerActions from "./components/PlannerActions";
import Ticket from "./components/Ticket";

import PlannerShell from "./PlannerShell";

const Planner = () => {
  return (
    <PlannerShell>
      <PlannerActions />
      <Ticket />
    </PlannerShell>
  );
};

export default Planner;
