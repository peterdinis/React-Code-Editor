import { FC } from 'react';
import { useRecoilState } from 'recoil';
import {
  htmlEditorState,
  cssEditorState,
  javascriptEditorState,
} from '../../recoil/atoms/editorAtoms';
import { CodeWrapperContainer } from '../../styles/Code.styles';
import Editor from './CodeEditor';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';

const CodeWrapper: FC = () => {
  const [html, setHtml] = useRecoilState(htmlEditorState);
  const [css, setCss] = useRecoilState(cssEditorState);
  const [js, setJs] = useRecoilState(javascriptEditorState);

  return (
    <CodeWrapperContainer>
      <Editor
        language='xml'
        heading='HTML'
        value={html}
        onChange={setHtml}
        icon={<HtmlIcon />}
        color='#FF3C41'
      />
      <Editor
        language='css'
        heading='CSS'
        value={css}
        onChange={setCss}
        icon={<CssIcon />}
        color='#0EBEFF'
      />
      <Editor
        language='javascript'
        heading='JS'
        value={js}
        onChange={setJs}
        icon={<JavascriptIcon />}
        color='#FCD000'
      />
    </CodeWrapperContainer>
  );
};

export default CodeWrapper;
