import { ReactNode, useEffect, useRef, useState } from "react";
import { CaretDown, CaretUp, ArrowsDownUp } from "phosphor-react";
import { StyledDropdownShell } from "./style";

export type DropdownShellPropType = {
  btnLabel: string;
  selectedValue?: any;
  multi?: boolean;
  selectedValueCount?: number;
  content?: ReactNode;
  btnIcon: ReactNode;
  onDropdownBtnClick?: Function;
  className?: string;
  contentZIndex?: number;
  hideContent?: boolean;
  name?: string;
  isContentVisible?: boolean;
  transparentButton?: boolean;
  closeDropdownContent?: boolean;
};

const DropdownShell = ({
  btnLabel = "Dropdown",
  selectedValue,
  selectedValueCount,
  multi,
  content,
  btnIcon = <ArrowsDownUp />,
  className,
  contentZIndex = 2,
  hideContent = false,
  onDropdownBtnClick,
  name,
  isContentVisible = false,
  transparentButton = false,
  closeDropdownContent = false,
}: DropdownShellPropType) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [contentVisible, setContentVisible] = useState(isContentVisible);

  const handleToggleDropdown = () => {
    setContentVisible(!contentVisible);
    onDropdownBtnClick && onDropdownBtnClick({ name: name || "" });
  };

  useEffect(() => {
    setContentVisible(isContentVisible);
  }, [isContentVisible]);

  useEffect(() => {
    if (closeDropdownContent) {
      setContentVisible(false);
    }
  }, [closeDropdownContent]);

  return (
    <StyledDropdownShell
      className={`dd-shell ${className}`}
      isSelected={!!selectedValue || !!selectedValueCount || !!contentVisible}
      contentZIndex={contentZIndex}
      transparentButton={transparentButton}
      ref={dropdownRef}
    >
      <button className="dd-shell-main-btn" onClick={handleToggleDropdown}>
        <div className="dd-shell-main-btn-label-wrapper">
          <span className="dd-shell-custom-icon">{btnIcon}</span>
          <span className="dd-main-btn-label">
            {btnLabel}
            {multi
              ? (!!selectedValueCount && ` ${selectedValueCount} value`) || ""
              : selectedValue || ""}
          </span>
        </div>
        {!contentVisible ? (
          <CaretDown className="dd-btn-caret-icon down" />
        ) : (
          <CaretUp className="dd-btn-caret-icon up" />
        )}
      </button>
      {!hideContent && contentVisible ? (
        <div className="dd-content">
          {content || (
            <span className="dd-content-empty">Empty {btnLabel} options..</span>
          )}
        </div>
      ) : null}
    </StyledDropdownShell>
  );
};

export default DropdownShell;
