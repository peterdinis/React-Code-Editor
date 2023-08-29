
import { AppBar, styled } from "@mui/material"

export const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 9vh;
`;

export const Logo = styled("img")({
    width: "40px",
    backgroundColor: "white",
    padding: "2px",
    borderRadius: "2rem"
})

export const HeaderText = styled("h2")({
    marginLeft: "1.5rem"
})