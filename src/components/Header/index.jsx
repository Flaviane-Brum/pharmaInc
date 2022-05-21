import React from "react";
import * as S from "./styles";
import { FirstAid, User } from "phosphor-react";
const Header = () => {
  return (
    <S.Header>
      <S.AreaLogo>
        <FirstAid size={32} color="#DCE9E2" />
        Pharma<span>Inc</span>
      </S.AreaLogo>
      <S.AreaUser>
        <User size={24} color="#00453A" />
      </S.AreaUser>
    </S.Header>
  );
};

export default Header;
