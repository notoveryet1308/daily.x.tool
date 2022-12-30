import { CheckCircle, Circle } from "phosphor-react";
import React, { useEffect, useRef, useState } from "react";
import { useScreenWidth } from "../../hooks";
import { breakpoints } from "../../theme/breakpoint";

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
        <CheckCircle className="checked-circle-icon ph-icon" />
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
  const [screenWidth] = useScreenWidth()
  const [containerStyle, setContainerStyle] = useState<React.CSSProperties>({})
  const { validatedCheck, isValid } = validatePassword(password);
  const ruleContainer = useRef();

 
  

  useEffect(()=>{
    if(ruleContainer.current && screenWidth > breakpoints.TABLET){
      // const rect = ruleContainer.current.getBoundingClientRect()
      // console.log({rect});
      
      // setContainerStyle({
      //   position:'absolute', 
      //   bottom: `${rect.top - rect.height}px`, 
      //   width: `${rect.width}px`, 
      //   zIndex:2,
      //   boxShadow:'10px 2px 5px -7px rgba(124,99,207,1)'
      //   }
      // )
    }
  },[ruleContainer.current])

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
