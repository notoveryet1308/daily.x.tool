import { CheckCircle, Circle } from "phosphor-react";
import React, { useEffect, useRef, useState } from "react";
import { darkThemeColors } from "../../theme/colors";

import { StyledPasswordRule } from "./style";
import { validatePassword } from "./utils";

const RULES_DATA = {
  length: "Minimum of 6 character is required.",
  uppercase: "At least one uppercase character is required.",
  lowercase: "At least one lowercase character is required ",
  specialChar: "At least one special ( *@$&/...) character is required ",
  number: "At least one number character is required",
};

const Rule = ({ followed, info }: { followed: boolean; info: string }) => {
  return (
    <div className="password-rule">
      {followed ? (
        <CheckCircle weight="fill" className="checked-circle-icon ph-icon" />
      ) : (
        <Circle className="circle-icon ph-icon" />
      )}
      <span
        className={`password-rule-info password-rule-${
          followed ? "followed" : ""
        }`}
      >
        {info}
      </span>
    </div>
  );
};

const PasswordRules = ({ password }: { password: string }) => {
  const [containerStyle, setContainerStyle] = useState<React.CSSProperties>({});
  const { validatedCheck } = validatePassword(password);
  const ruleContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ruleContainer.current) {
      const targetRect = ruleContainer.current.getBoundingClientRect();

      setContainerStyle({
        position: "absolute",
        top: `-${targetRect.height + 8}px`,
        left: "0px",
        width: `100%`,
        zIndex: 2,
        boxShadow: `0px 2px 1px ${darkThemeColors.primaryColor}`,
      });
    }
  }, [ruleContainer.current]);

  return (
    <StyledPasswordRule ref={ruleContainer} style={containerStyle}>
      <Rule followed={validatedCheck.length} info={RULES_DATA["length"]} />
      <Rule
        followed={validatedCheck.uppercase}
        info={RULES_DATA["uppercase"]}
      />
      <Rule
        followed={validatedCheck.lowercase}
        info={RULES_DATA["lowercase"]}
      />
      <Rule
        followed={validatedCheck.specialChar}
        info={RULES_DATA["specialChar"]}
      />
      <Rule followed={validatedCheck.number} info={RULES_DATA["number"]} />
    </StyledPasswordRule>
  );
};

export default PasswordRules;
