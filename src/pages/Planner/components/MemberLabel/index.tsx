import { getInitials } from "../../../../utils";
import { StyledMemberLabel } from "./style";

const MemberLabel = ({ name, avatar }: { name: string; avatar?: string }) => {
  return (
    <StyledMemberLabel>
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
