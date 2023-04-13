import { PRIORITIES_DATA } from "./constant";
import { StyledPriorityLabel } from "./style";

const PriorityLabel = ({
  type,
  onClick,
}: {
  type: string;
  onClick: Function;
}) => {
  const { hexCode, label, value, Icon } = PRIORITIES_DATA[type];
  return (
    <StyledPriorityLabel
      onClick={() => {
        onClick({ type: value });
      }}
      hexCode={hexCode}
    >
      <Icon className="priority-icon" />
      <span className="priority-name">{label}</span>
    </StyledPriorityLabel>
  );
};

export default PriorityLabel;
