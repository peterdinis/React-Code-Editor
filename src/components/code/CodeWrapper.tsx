import { FC } from "react";
import { useRecoilState } from "recoil";
import {
  htmlEditorState,
  cssEditorState,
  javascriptEditorState,
} from "../../state/atoms/editorAtoms";
import { CodeWrapperContainer } from "../../styles/Code.styles";
import Editor from "./Editor";

const CodeWrapper: FC = () => {
  const [html, setHtml] = useRecoilState(htmlEditorState);
  const [css, setCss] = useRecoilState(cssEditorState);
  const [js, setJs] = useRecoilState(javascriptEditorState);

  return (
    <CodeWrapperContainer>
      <Editor
        language="xml"
        heading="HTML"
        value={html}
        onChange={setHtml}
        icon="/"
        color="#FF3C41"
      />
      <Editor
        language="css"
        heading="CSS"
        value={css}
        onChange={setCss}
        icon="*"
        color="#0EBEFF"
      />
      <Editor
        language="javascript"
        heading="JS"
        value={js}
        onChange={setJs}
        icon="( )"
        color="#FCD000"
      />
    </CodeWrapperContainer>
  );
};

export default CodeWrapper;
