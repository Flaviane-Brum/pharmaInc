import * as S from "./styles";
import React from "react";

const PersonalContact = ({ user }) => {
  return (
    <S.PersonalContact>
      <h3>Contact info</h3>
      <ul>
        <li>
          Email: <span>{user.email}</span>
        </li>
        <li>
          Phone: <span>{user.phone}</span>
        </li>
        <li>
          Address:{" "}
          <span>
            {user.location.street.name} {user.location.street.number}
          </span>
        </li>
      </ul>
    </S.PersonalContact>
  );
};

export default PersonalContact;
