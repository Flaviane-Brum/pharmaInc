import React from "react";
import { useUsers } from "../../hooks/useUsers";
import * as S from "./styles";
import { Link, useNavigate, useParams } from "react-router-dom";
import PersonalInfo from "../PersonalInfo";
import PersonalContact from "../PersonalContact";
import { X } from "phosphor-react";

const Modal = () => {
  const { setUserModal, userList } = useUsers();
  const { id } = useParams();
  const navigate = useNavigate();
  const [user] = userList.filter((user) => {
    return user.login.uuid === id && user;
  });
  const closeModal = (event) => {
    if (event.target === event.currentTarget) {
      setUserModal(null);
      navigate("/");
    }
  };
  return (
    <>
      {user ? (
        <S.ModalContainer onClick={closeModal}>
          <S.Modal>
            <S.HeaderModal>
              <img
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
              />
              <Link to="/" onClick={closeModal} aria-label="Fechar Modal">
                <X size={24} />
              </Link>
            </S.HeaderModal>
            <S.UserInfo>
              <h2>{`${user.name.first} ${user.name.last}`}</h2>
            </S.UserInfo>
            <S.Info>
              <PersonalInfo user={user} />
              <PersonalContact user={user} />
            </S.Info>
          </S.Modal>
        </S.ModalContainer>
      ) : null}
    </>
  );
};

export default Modal;
