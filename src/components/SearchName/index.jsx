import React from "react";
import * as S from "./styles";
import { UserList } from "phosphor-react";

const SearchName = ({ setSearchForName, searchForName }) => {
  return (
    <S.FormIput>
      <input
        type="text"
        placeholder="Search by name"
        value={searchForName}
        onChange={({ target }) => setSearchForName(target.value)}
      />
      <UserList size={32} />
    </S.FormIput>
  );
};

export default SearchName;
