import {
  Container,
  CustomToolbar,
  HeaderText,
  Logo,
} from "../../styles/Header.styles";
import logo from "../../images/logo.png";
import { FC } from "react";

const Header: FC = () => {
  return (
    <Container>
      <CustomToolbar>
        <Logo src={logo} alt="logo" />
        <HeaderText>React Codepen</HeaderText>
      </CustomToolbar>
    </Container>
  );
};

export default Header;
