import { useState } from "react";
import { DropdownShell } from "../../../../component/UI/Dropdown";
import { useCheckRequiredValue, useInMobile } from "../../../../hooks";
import { StyledModal } from "../../style";
import MobileContentDrawer from "../MobileContentDrawer";

import { ProjectFiled } from "../../type";

import { StyledCreateTicket, StyledDropdownContentWrapper } from "./style";
import { useGetAllProjects } from "../../graphql";
import Loader from "../../../../component/UI/Loader";
import { ProjectName } from "../Project/ProjectCard";
import { InlineNoDataFound } from "../../../../component/UI/NoDataState";
import { useImmer } from "use-immer";
import Tags from "../../../../component/Tags";
import { TICKET_ISSUES, ISSUE_TYPE_DATA } from "../IssueType/constant";
import IssueTypeBase from "../IssueType";
import Select from "../../../../component/UI/Select";
import ActionFooter from "../ActionFooter";

const DropdownSelectedContent = ({
  label,
  onClick,
  dataFetched,
}: {
  label: string;
  onClick: Function;
  dataFetched: boolean;
}) => {
  if (!dataFetched) {
    return null;
  }

  return (
    <Tags
      id=""
      label={label}
      value={label}
      isClickable
      isClearable
      onClick={onClick}
    />
  );
};

// const DropdownOptionContent = ({
//   isLoading,
//   onClick,
//   data = [],
// }: {
//   isLoading: boolean;
//   data: {}[] | [];
//   onClick: Function;
// }) => {
//   if (isLoading) {
//     return <Loader />;
//   }
//   return (
//     <StyledDropdownContentWrapper>
//       {data?.length ? (
//         data.map((d) => (
//           <Tags
//             id=""
//             key={d.id}
//             label={d.name}
//             value={d.name}
//             isClickable
//             onClick={onClick}
//           />
//         ))
//       ) : (
//         <InlineNoDataFound
//           mainText="No project found"
//           subText="Create project first"
//         />
//       )}
//     </StyledDropdownContentWrapper>
//   );
// };

const CreateTicket = ({ onCancel }: { onCancel: Function }) => {
  const { loading, data, called } = useGetAllProjects();
  const [createTicketData, setCreateTicketData] = useImmer<{
    project: ProjectFiled | null;
    issueType: string | null;
  }>({ project: null, issueType: null });

  const [allowAction] = useCheckRequiredValue({
    values: [!!createTicketData.project, !!createTicketData.issueType],
    type: "and",
  });

  return (
    <>
      <StyledCreateTicket>
        <DropdownShell
          btnLabel="Select project"
          dropdownName="Project"
          selectedContent={
            createTicketData.project ? (
              <DropdownSelectedContent
                label={createTicketData.project.name || ""}
                dataFetched={!!createTicketData.project}
                onClick={() =>
                  setCreateTicketData((d) => {
                    d.project = null;
                  })
                }
              />
            ) : null
          }
          content={
            <StyledDropdownContentWrapper>
              {called && loading ? (
                <Loader />
              ) : data?.getAllProjects.length ? (
                data.getAllProjects.map((data: ProjectFiled) => (
                  <Tags
                    id=""
                    key={data.id}
                    label={data.name}
                    value={data.name}
                    isClickable
                    onClick={() =>
                      setCreateTicketData((d) => {
                        d.project = data;
                      })
                    }
                  />
                ))
              ) : (
                <InlineNoDataFound
                  mainText="No project found"
                  subText="Create project first"
                />
              )}
            </StyledDropdownContentWrapper>
          }
          btnIcon={null}
        />

        <DropdownShell
          btnLabel="Select issue type"
          dropdownName="Issue type"
          selectedContent={
            createTicketData?.issueType ? (
              <DropdownSelectedContent
                label={ISSUE_TYPE_DATA[createTicketData.issueType].label || ""}
                dataFetched
                onClick={() =>
                  setCreateTicketData((d) => {
                    d.issueType = null;
                  })
                }
              />
            ) : null
          }
          content={
            <StyledDropdownContentWrapper>
              {TICKET_ISSUES.map((data) => (
                <IssueTypeBase
                  type={data}
                  onClick={() =>
                    setCreateTicketData((d) => {
                      d.issueType = data;
                    })
                  }
                />
              ))}
            </StyledDropdownContentWrapper>
          }
          btnIcon={null}
        />
      </StyledCreateTicket>
      <ActionFooter
        primaryActionLabel="Proceed"
        allowAction={allowAction}
        onConfirm={() => {}}
        onCancel={onCancel}
      />
    </>
  );
};

const CreateTicketShell = ({
  onCancel,
  isCreating,
}: {
  onCancel: Function;
  isCreating: boolean;
}) => {
  const inMobile = useInMobile();

  return (
    <>
      {inMobile ? (
        <MobileContentDrawer
          isOpen={isCreating}
          title="Create ticket"
          toggleDrawer={onCancel}
        >
          <CreateTicket onCancel={onCancel} />
        </MobileContentDrawer>
      ) : (
        <StyledModal
          align="center"
          open={isCreating}
          showFooter={false}
          title="Create ticket"
          onClose={onCancel}
        >
          <CreateTicket onCancel={onCancel} />
        </StyledModal>
      )}
    </>
  );
};

export { CreateTicket };

export default CreateTicketShell;
