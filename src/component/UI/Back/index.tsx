import { useHistory } from "react-router-dom";

import { ArrowLeft } from "phosphor-react";
import { StyledBack } from "./style";
import { breakpoints } from "../../../theme/breakpoint";
import { useScreenWidth } from "../../../hooks";

const Back = ({ isMobile }: { isMobile?: boolean }) => {
  const [screenWidth] = useScreenWidth();
  if (!isMobile && screenWidth < breakpoints.TABLET) {
    return null;
  }
  if (isMobile && screenWidth > breakpoints.TABLET) {
    return null;
  }

  const history = useHistory();

  return (
    <StyledBack onClick={() => history.goBack()}>
      <ArrowLeft className="ph-arrow-left" />
    </StyledBack>
  );
};

export default Back;
