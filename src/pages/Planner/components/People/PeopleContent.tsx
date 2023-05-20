import { useState } from "react";

import { User } from "phosphor-react";

import { TertiaryButton, PrimaryButton } from "../../../../component/UI/Button";
import Loader from "../../../../component/UI/Loader";
import { InlineNoDataFound } from "../../../../component/UI/NoDataState";
import { useAddTeamMember, useGetMyTeamMemberDetail } from "../../graphql";
import { StyledPeopleContent } from "./style";
import { UserFiled } from "../../type";
import { useScreenWidth } from "../../../../hooks";
import { breakpoints } from "../../../../theme/breakpoint";
import { StyledModal } from "../../style";
import AddToTeam from "./AddToTeam";
import ActionFooter from "../ActionFooter";
import MemberLabel from "../MemberLabel";

const PeopleContent = ({
  onHideContent,
  handleAddingMember,
}: {
  onHideContent: Function;
  handleAddingMember: Function;
}) => {
  const { loading, data, error } = useGetMyTeamMemberDetail();

  // if (isAddingMember) {
  //   return (
  //     <>
  //       {screenWidth > breakpoints.LARGE_MOBILE ? (
  //         <StyledModal
  //           open={isAddingMember}
  //           onClose={handleAddingMember}
  //           title="People"
  //           align="center"
  //           showFooter={false}
  //         >
  //           <AddToTeam onCancel={handleAddingMember} />
  //         </StyledModal>
  //       ) : (
  //         <AddToTeam onCancel={handleAddingMember} />
  //       )}
  //     </>
  //   );
  // }

  return (
    <StyledPeopleContent>
      <div className="team-member-list">
        {loading && <Loader />}
        {!loading &&
          !error &&
          (data?.getMyTeamMemberDetail.length ? (
            data.getMyTeamMemberDetail.map((d: UserFiled) => (
              <MemberLabel
                key={d._id}
                name={d.name || d.email}
                avatar={d.avatar}
              />
            ))
          ) : (
            <InlineNoDataFound
              icon={<User />}
              mainText="Your team list is empty"
              subText="Add people by their email"
            />
          ))}
      </div>
      <ActionFooter
        onCancel={onHideContent}
        onConfirm={handleAddingMember}
        primaryActionLabel="Add People"
      />
    </StyledPeopleContent>
  );
};

export default PeopleContent;
