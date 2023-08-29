import { Toolbar } from "@mui/material";
import { Container, Logo } from "../../styles/Header.styles";
import logo from "../../images/logo.png";
import { FC } from "react";

const Header: FC = () => {
  return (
    <Container>
      <Toolbar>
        <Logo src={logo} alt="logo" />
      </Toolbar>
    </Container>
  );
};

export default Header;
