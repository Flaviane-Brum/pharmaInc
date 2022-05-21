import * as S from "./styles";
import React from "react";
const PersonalInfo = ({ user }) => {
  return (
    <S.PersonalInfo>
      <h3>Personal Info</h3>
      <ul>
        <li>
          Nationality: <span>{user.nat}</span>
        </li>
        <li>
          Birth: <span>{new Date(user.dob.date).toLocaleDateString()}</span>
        </li>
        <li>
          Genre: <span>{user.gender}</span>
        </li>
        <li>
          ID: <span>{user.login.uuid}</span>
        </li>
        <li>
          URL: <span> {document.documentURI}</span>
        </li>
      </ul>
    </S.PersonalInfo>
  );
};

export default PersonalInfo;
