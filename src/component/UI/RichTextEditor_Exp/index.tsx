// Import React dependencies.
import React, { useState } from "react";
// Import the Slate editor factory.
import { createEditor, BaseEditor, Descendant } from "slate";

// Import the Slate components and React plugin.
import { Slate, Editable, withReact, ReactEditor } from "slate-react";

type CustomElement = { type: "paragraph"; children: CustomText[] };
type CustomText = { text: string };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

const RichTextEditor_Exp = () => {
  // Create a Slate editor object that won't change across renders.
  const [editor] = useState(() => withReact(createEditor()));
  return (
    <Slate editor={editor} value={initialValue}>
      <Editable
        onKeyDown={(event) => {
          console.log(event.key);
        }}
      />
    </Slate>
  );
};

export default RichTextEditor_Exp;
