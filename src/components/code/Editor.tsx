import CodeMirror from "@uiw/react-codemirror";
import { Box } from "@mui/material";
import { CloseFullscreen } from "@mui/icons-material";
import { FC, useState } from "react";
import {
  EditorContainer,
  EditorHeader,
  EditorHeading,
} from "../../styles/Code.styles";
import { hyperLink } from "@uiw/codemirror-extensions-hyper-link";
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { zebraStripes } from '@uiw/codemirror-extensions-zebra-stripes';

interface IEditorProps {
  heading: string;
  language: string;
  value: string;
  onChange: any;
  icon: string;
  color: string;
}

const Editor: FC<IEditorProps> = ({
  heading,
  value,
  onChange,
  icon,
  color,
}: IEditorProps) => {
  const [open, setOpen] = useState(true);

  const handleChange = (value: string) => {
    onChange(value);
  };

  console.log(open);

  return (
    <EditorContainer>
      <EditorHeader>
        <EditorHeading>
          <Box
            component="span"
            style={{
              background: color,
              borderRadius: 5,
              marginRight: 5,
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              color: "#000",
              paddingBottom: 2,
            }}
          >
            {icon}
          </Box>
          {heading}
        </EditorHeading>
        <CloseFullscreen
          fontSize="small"
          style={{ alignSelf: "center" }}
          onClick={() => setOpen((prevState) => !prevState)}
        />
      </EditorHeader>
      <CodeMirror
        onChange={handleChange}
        value={value}
        theme={okaidia}
        autoSave="true"
        autoFocus={true}
        maxHeight="380px"
        basicSetup={{
          foldGutter: true,
          dropCursor: true,
          allowMultipleSelections: true,
          indentOnInput: true,
          autocompletion: true,
          searchKeymap: true,
          bracketMatching: true,
          closeBrackets: true,
          highlightActiveLine: true,
        }}
        extensions={[
          hyperLink,
          zebraStripes({ step: 2 }),
        ]}
      />
    </EditorContainer>
  );
};

export default Editor;
