import React, { useEffect, useState } from "react";
import Loading from "../../helpers/Loading";
import { useUsers } from "../../hooks/useUsers";
import SearchName from "../SearchName";
import SearchNat from "../SearchNat";
import * as S from "./styles";
import Tr from "./Tr";

export const Table = () => {
  const {
    userList,
    loadingUser,
    fetchMoreUsers,
    page,
    setUserModal,
    handleUserList,
    loading,
  } = useUsers();
  const [selectGender, setSelectGender] = useState("");
  const [searchForName, setSearchForName] = useState("");
  const [searchForNat, setSearchForNat] = useState("");
  useEffect(() => {
    handleUserList(selectGender);
  }, [selectGender]);
  const openUserModal = (user) => {
    setUserModal(user);
  };
  return (
    <S.TableContainer>
      <S.InputArea>
        <SearchName
          searchForName={searchForName}
          setSearchForName={setSearchForName}
        />
        <SearchNat
          searchForNat={searchForNat}
          setSearchForNat={setSearchForNat}
        />
      </S.InputArea>
      <S.Select
        value={selectGender}
        onChange={({ target }) => setSelectGender(target.value)}
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </S.Select>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <S.TableWrapper>
          <S.Table>
            <S.Thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Birth</th>
                <th>Actions</th>
              </tr>
            </S.Thead>
            <S.Tbody>
              {userList
                .filter((user) => {
                  if (searchForName === "") {
                    return user;
                  } else if (
                    user.name.first
                      .toLowerCase()
                      .includes(searchForName.toLocaleLowerCase()) ||
                    user.name.last
                      .toLowerCase()
                      .includes(searchForName.toLocaleLowerCase())
                  ) {
                    return user;
                  }
                  return false;
                })
                .filter((user) => {
                  if (searchForNat === "") {
                    return user;
                  } else if (
                    user.nat.toLowerCase().includes(searchForNat.toLowerCase())
                  ) {
                    return user;
                  }
                  return false;
                })
                .map((user) => (
                  <Tr
                    user={user}
                    key={user.login.uuid}
                    openUserModal={openUserModal}
                  />
                ))}
            </S.Tbody>
          </S.Table>
        </S.TableWrapper>
      )}

      {loading ? null : loadingUser ? (
        <Loading />
      ) : (
        <button onClick={() => fetchMoreUsers(page, selectGender)}>
          Load more
        </button>
      )}
    </S.TableContainer>
  );
};
