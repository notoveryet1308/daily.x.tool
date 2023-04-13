import { useHistory } from "react-router-dom";

import { DropdownShell } from "../../../../../component/UI/Dropdown";

import { useInMobile } from "../../../../../hooks";
import { StyledModal } from "../../../style";
import MobileContentDrawer from "../../MobileContentDrawer";

import { ProjectFiled } from "../../../type";

import { StyledCreateTicket, StyledDropdownContentWrapper } from "../style";
import { useGetAllProjects } from "../../../graphql";
import Loader from "../../../../../component/UI/Loader";
import { InlineNoDataFound } from "../../../../../component/UI/NoDataState";

import Tags from "../../../../../component/Tags";
import { TICKET_ISSUES, ISSUE_TYPE_DATA } from "../../IssueType/constant";
import IssueTypeBase from "../../IssueType";
import ActionFooter from "../../ActionFooter";

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

const CreateTicketStepOne = ({
  onCancel,
  projectName,
  issueType,
  onClickHandler,
  allowAction,
  onConfirm,
}: {
  onCancel: Function;
  projectName: string;
  issueType: string;
  onClickHandler: Function;
  allowAction: boolean;
  onConfirm: Function;
}) => {
  const { loading, data, called } = useGetAllProjects();

  return (
    <>
      <StyledCreateTicket>
        <DropdownShell
          btnLabel="Select project"
          dropdownName="Project"
          selectedContent={
            projectName ? (
              <DropdownSelectedContent
                label={projectName || ""}
                dataFetched={!!projectName}
                onClick={() =>
                  onClickHandler({ value: null, field: "project" })
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
                      onClickHandler({ value: data, field: "project" })
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
            issueType ? (
              <DropdownSelectedContent
                label={ISSUE_TYPE_DATA[issueType].label || ""}
                dataFetched
                onClick={() =>
                  onClickHandler({ value: null, field: "issueType" })
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
                    onClickHandler({ value: data, field: "issueType" })
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
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
};

const CreateTicketStepOneShell = ({
  isCreating,
  projectName,
  issueType,
  onClickHandler,
  allowAction,
  onConfirm,
}: {
  isCreating: boolean;
  projectName: string;
  issueType: string;
  onClickHandler: Function;
  allowAction: boolean;
  onConfirm: Function;
}) => {
  const inMobile = useInMobile();
  const history = useHistory();

  const onCancel = () => history.goBack();

  return (
    <>
      {inMobile ? (
        <MobileContentDrawer
          isOpen={isCreating}
          title="Create ticket"
          toggleDrawer={onCancel}
        >
          <CreateTicketStepOne
            onCancel={onCancel}
            issueType={issueType}
            projectName={projectName}
            onClickHandler={onClickHandler}
            allowAction={allowAction}
            onConfirm={onConfirm}
          />
        </MobileContentDrawer>
      ) : (
        <StyledModal
          align="center"
          open={isCreating}
          showFooter={false}
          title="Create ticket"
          onClose={onCancel}
        >
          <CreateTicketStepOne
            onCancel={onCancel}
            issueType={issueType}
            projectName={projectName}
            onClickHandler={onClickHandler}
            allowAction={allowAction}
            onConfirm={onConfirm}
          />
        </StyledModal>
      )}
    </>
  );
};

export { CreateTicketStepOne };

export default CreateTicketStepOneShell;
