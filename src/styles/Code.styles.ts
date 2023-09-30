import { Box, styled } from "@mui/material";

export const CodeContainer = styled(Box)`
  height: 41vh;
`;

export const CodeWrapperContainer = styled(Box)`
  background-color: #060606;
  height: 50vh;
  display: flex;
  overflow-x: scroll;
`;

export const EditorContainer = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`;

export const EditorHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  background: #060606;
  color: #aaaebc;
  font-weight: 700;
`;
export const EditorHeading = styled(Box)`
  background: #1d1e22;
  padding: 9px 12px;
  display: flex;
`;
