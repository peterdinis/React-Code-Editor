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
import { ICodeEditorProps } from "../../interfaces/IEditor";
import { FileCopy } from "@mui/icons-material";
import { CopyIcon } from "../../styles/Editor.styles";
import { toast } from "react-hot-toast";
import { editorTheme } from "../../utils/editorTheme";

const CodeEditor: FC<ICodeEditorProps> = ({
  heading,
  value,
  onChange,
  icon,
  color,
}: ICodeEditorProps) => {
  const [open, setOpen] = useState(true);

  const handleChange = (value: string) => {
    onChange(value);
  };

  const copiedValue = () => toast.success("Copied");

  return (
    <EditorContainer style={open ? undefined : { flexGrow: 0 }}>
      <EditorHeader>
        <EditorHeading>
          <Box
            component="span"
            style={{
              background: color,
              borderRadius: 5,
              marginRight: 5,
              height: 20,
              width: 30,
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
        <CopyIcon
          size="small"
          onClick={() => {
            navigator.clipboard.writeText(value);
            copiedValue();
          }}
        >
          <FileCopy fontSize="small" />
        </CopyIcon>

        <CloseFullscreen
          fontSize="small"
          style={{ alignSelf: "center" }}
          onClick={() => setOpen((prevState) => !prevState)}
        />
      </EditorHeader>
      <CodeMirror
        onChange={handleChange}
        value={value}
        theme={editorTheme}
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
        extensions={[hyperLink]}
      />
    </EditorContainer>
  );
};

export default CodeEditor;
