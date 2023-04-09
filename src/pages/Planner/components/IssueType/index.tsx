import { ISSUE_TYPES, ISSUE_TYPE_DATA } from "./constant";
import { StyledIssueType } from "./style";

const IssueTypeBase = ({
  onClick,
  type,
}: {
  onClick: Function;
  type: string;
}) => {
  const { Icon, label } = ISSUE_TYPE_DATA[type];
  return (
    <StyledIssueType onClick={() => onClick()}>
      <span className="issue-type-icon">{<Icon />}</span>
      <span className="issue-type-label">{label}</span>
    </StyledIssueType>
  );
};

export const FeatureIssue = ({ onClick }: { onClick: Function }) => (
  <IssueTypeBase onClick={onClick} type={ISSUE_TYPES.FEATURE} />
);

export const TestingDefectIssue = ({ onClick }: { onClick: Function }) => (
  <IssueTypeBase onClick={onClick} type={ISSUE_TYPES.TESTING_DEFECT} />
);

export const BugIssue = ({ onClick }: { onClick: Function }) => (
  <IssueTypeBase onClick={onClick} type={ISSUE_TYPES.BUG} />
);

export default IssueTypeBase;
