import { useCallback, useEffect, useMemo, useState } from "react";
import isHotkey from "is-hotkey";
import { Editable, withReact, Slate } from "slate-react";

import { createEditor, Descendant, Transforms, Editor, Node } from "slate";
import { withHistory } from "slate-history";

import Elements from "./Elements";
import Leaf from "./Leaf";

import Toolbar from "./Components/Toolbar";
import { toggleMark } from "./Components/Blocks";
import { StyledRichTextWrapper } from "./style";
import { _debounce } from "../../../utils";

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
};

export const serialize = (nodes: Descendant[]) => {
  const data = nodes.map((n) => Node.string(n)).join("\n");
  return !!data;
};

const RichTextInput = ({
  name,
  onChange,
  placeholder,
  minHeight,
  maxHeight = 250,
  autoFocus = true,
  clearEditor = false,
  value,
  errorBorder,
  errorMessage,
  className,
}: {
  name: string;
  minHeight?: number;
  maxHeight?: number;
  autoFocus?: boolean;
  onChange?: Function;
  placeholder?: string;
  value?: string;
  clearEditor?: boolean;
  errorMessage?: string;
  errorBorder?: boolean;
  className?: string;
}) => {
  const renderElement = useCallback((elProps) => <Elements {...elProps} />, []);
  const renderLeaf = useCallback((elProps) => <Leaf {...elProps} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  if (clearEditor) {
    Transforms.delete(editor, {
      at: {
        anchor: Editor.start(editor, []),
        focus: Editor.end(editor, []),
      },
    });
  }

  useEffect(() => {
    if (value) {
      onChange && onChange({ [name]: value, field: name });
    }
  }, []);

  return (
    <StyledRichTextWrapper
      title={name}
      minHeight={minHeight}
      className={className}
    >
      <Slate
        editor={editor}
        value={value ? JSON.parse(value) : initialValue}
        onChange={(value) => {
          const isAstChange = editor.operations.some(
            (op) => "set_selection" !== op.type
          );
          if (isAstChange) {
            const isDataPresent = serialize(value);
            const content = JSON.stringify(value);
            // _debounce({
            //   func: () => onChange({ [name]: content }),
            //   delay: 500,
            // });

            !clearEditor &&
              onChange &&
              onChange({ [name]: isDataPresent ? content : "", field: name });
          }
        }}
      >
        <Toolbar />
        <Editable
          className="rich-text-editor"
          placeholder={placeholder}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          spellCheck
          autoFocus={autoFocus}
          style={{
            maxHeight: `${maxHeight}px`,
            overflowY: "auto",
          }}
          onKeyDown={(event) => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event as any)) {
                event.preventDefault();
                const mark = HOTKEYS[hotkey];
                toggleMark(editor, mark);
              }
            }
          }}
        />
      </Slate>
      {errorMessage && <span className="rich-text-error">{errorMessage}</span>}
    </StyledRichTextWrapper>
  );
};

export const RichTextReadOnly = ({
  value = initialValue,
  className = "",
  placeholder = "Rich text here..",
}) => {
  const renderElement = useCallback((elProps) => <Elements {...elProps} />, []);
  const renderLeaf = useCallback((elProps) => <Leaf {...elProps} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  editor.children = value;

  return (
    <StyledRichTextWrapper className={`rich-text-view-mode ${className}`}>
      <Slate editor={editor} value={value}>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          readOnly
          placeholder={placeholder}
        />
      </Slate>
    </StyledRichTextWrapper>
  );
};

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

export default RichTextInput;
