import { PrimaryButton, TertiaryButton } from "../../../../component/UI/Button";

import { StyledActionFooter } from "./style";

const ActionFooter = ({
  cancelBtnLabel = "Cancel",
  onCancel,
  onConfirm,
  allowAction = true,
  primaryActionLabel,
  inProcessActionLabel,
  loading = false,
}: {
  cancelBtnLabel?: string;
  onCancel: Function;
  onConfirm: Function;
  allowAction?: boolean;
  primaryActionLabel: string;
  inProcessActionLabel?: string;
  loading?: boolean;
}) => {
  return (
    <StyledActionFooter>
      <TertiaryButton size="small" label={cancelBtnLabel} onClick={onCancel} />
      <PrimaryButton
        size="small"
        onClick={onConfirm}
        disabled={!allowAction || loading}
        label={loading ? inProcessActionLabel : primaryActionLabel}
      />
    </StyledActionFooter>
  );
};

export default ActionFooter;
