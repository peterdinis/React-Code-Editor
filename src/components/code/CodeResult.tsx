import { FC, useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
  htmlEditorState,
  cssEditorState,
  javascriptEditorState,
} from '../../recoil/atoms/editorAtoms';
import { CodeContainer } from '../../styles/Code.styles';

const CodeResult: FC = () => {
  const [src, setSrc] = useState('');

  const [html] = useRecoilState(htmlEditorState);
  const [css] = useRecoilState(cssEditorState);
  const [js] = useRecoilState(javascriptEditorState);

  const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 0);

    return () => clearTimeout(timeout);
  }, [html, css, js, srcCode]);

  return (
    <CodeContainer style={html || css || js ? {} : { background: '#444857' }}>
      <iframe
        srcDoc={src}
        title='code-output'
        sandbox='allow-scripts'
        width='100%'
        height='100%'
      />
    </CodeContainer>
  );
};

export default CodeResult;
