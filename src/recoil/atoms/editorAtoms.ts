import { atom } from 'recoil';

export const htmlEditorState = atom({
  key: 'htmlEditorState',
  default: '',
});

export const cssEditorState = atom({
  key: 'cssEditorState',
  default: '',
});

export const javascriptEditorState = atom({
  key: 'javascriptEditorState',
  default: '',
});
