import { getInitials, noop } from "../../../../utils";
import { StyledMemberLabel } from "./style";

const MemberLabel = ({
  name,
  avatar,
  onClick = noop,
}: {
  name: string;
  avatar?: string;
  onClick?: Function;
}) => {
  return (
    <StyledMemberLabel onClick={() => onClick()}>
      <div className="member-dp">
        {avatar ? (
          <img src={avatar} />
        ) : (
          <span className="initial">{getInitials(name)}</span>
        )}
      </div>
      <p className="member-name">{name}</p>
    </StyledMemberLabel>
  );
};

export default MemberLabel;
