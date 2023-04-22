import { useState } from "react";
import { Input } from "../../../../component/UI/Input";
import ActionFooter from "../ActionFooter";
import { useAddTeamMember } from "../../graphql";
import { StyledAddToTeam } from "./style";
import { useScreenWidth } from "../../../../hooks";
import { StyledModal } from "../../style";
import { breakpoints } from "../../../../theme/breakpoint";

const AddToTeam = ({ onCancel }: { onCancel: Function }) => {
  const [memberEmail, setMemberEmail] = useState("");
  const { handleAddTeamMember, addMemberState } = useAddTeamMember();

  return (
    <>
      <StyledAddToTeam>
        <Input
          type="email"
          name="teamMemberEmail"
          label="Team member email"
          placeholder="Enter email"
          value={memberEmail}
          onChangeHandler={({
            teamMemberEmail,
          }: {
            teamMemberEmail: string;
          }) => {
            setMemberEmail(teamMemberEmail);
          }}
        />
      </StyledAddToTeam>

      <ActionFooter
        onCancel={onCancel}
        onConfirm={() => {
          handleAddTeamMember(memberEmail);
        }}
        primaryActionLabel="Add people"
        inProcessActionLabel="Adding..."
        allowAction={!!memberEmail}
        loading={addMemberState.called && addMemberState.loading}
      />
    </>
  );
};

const AddToTeamContainer = ({
  isAddingMember,
  handleAddingMember,
}: {
  isAddingMember: boolean;
  handleAddingMember: Function;
}) => {
  const [screenWidth] = useScreenWidth();

  return (
    <>
      {screenWidth > breakpoints.LARGE_MOBILE ? (
        <StyledModal
          open={isAddingMember}
          onClose={handleAddingMember}
          title="People"
          align="center"
          showFooter={false}
        >
          <AddToTeam onCancel={handleAddingMember} />
        </StyledModal>
      ) : (
        <AddToTeam onCancel={handleAddingMember} />
      )}
    </>
  );
};

export default AddToTeamContainer;
