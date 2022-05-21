import React from "react";
import * as S from "./styles";
import { Globe } from "phosphor-react";

const SearchNat = ({ searchForNat, setSearchForNat }) => {
  return (
    <S.FormIput>
      <input
        type="text"
        placeholder="Search by nationality"
        value={searchForNat}
        onChange={({ target }) => setSearchForNat(target.value)}
      />
      <Globe size={32} />
    </S.FormIput>
  );
};

export default SearchNat;
