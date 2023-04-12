import Tags from "../../../../component/Tags";

import { STATUS_TAG_TYPE_DETAIL, STATUS_TYPE } from "./constant";

const BaseStatusTag = ({
  onClick,
  type,
}: {
  onClick: Function;
  type: string;
}) => {
  const { hexCode, label, value } = STATUS_TAG_TYPE_DETAIL[type];
  return (
    <Tags
      id={value}
      value={value}
      label={label}
      onClick={onClick}
      hexCode={hexCode}
      isClearable={false}
      isClickable
    />
  );
};

export const InProgressStatus = ({ onClick }: { onClick: Function }) => (
  <BaseStatusTag type={STATUS_TYPE.IN_PROGRESS} onClick={onClick} />
);

export const TodoStatus = ({ onClick }: { onClick: Function }) => (
  <BaseStatusTag type={STATUS_TYPE.TO_DO} onClick={onClick} />
);

export const SentToQaStatus = ({ onClick }: { onClick: Function }) => (
  <BaseStatusTag type={STATUS_TYPE.SENT_TO_QA} onClick={onClick} />
);

export const InQaReviewStatus = ({ onClick }: { onClick: Function }) => (
  <BaseStatusTag type={STATUS_TYPE.IN_QA_REVIEW} onClick={onClick} />
);

export const DoneStatus = ({ onClick }: { onClick: Function }) => (
  <BaseStatusTag type={STATUS_TYPE.DONE} onClick={onClick} />
);

export const BlockedStatus = ({ onClick }: { onClick: Function }) => (
  <BaseStatusTag type={STATUS_TYPE.BLOCKED} onClick={onClick} />
);

export const NotABugStatus = ({ onClick }: { onClick: Function }) => (
  <BaseStatusTag type={STATUS_TYPE.NOT_A_BUG} onClick={onClick} />
);

export const DuplicateStatus = ({ onClick }: { onClick: Function }) => (
  <BaseStatusTag type={STATUS_TYPE.DUPLICATE} onClick={onClick} />
);

export default BaseStatusTag;
