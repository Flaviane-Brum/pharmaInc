import { useState } from "react";
import { createContext } from "react";
import { api } from "../services/api";

export const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [userModal, setUserModal] = useState(null);
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingUser, setLoadingUser] = useState(false);
  const PAGES = 50;
  const [page, setPage] = useState(PAGES);

  const handleUserList = async (selectGender) => {
    try {
      const res = await api.get(`/?gender=${selectGender}`, {
        params: {
          results: PAGES,
        },
      });
      const response = res.data.results;
      setUserList(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMoreUsers = async (page, selectGender) => {
    setLoadingUser(true);
    const res = await api.get(`/?gender=${selectGender}`, {
      params: {
        results: PAGES,
        page,
      },
    });

    const response = res.data.results;
    setUserList((user) => [...user, ...response]);
    setPage((page) => page + PAGES);
    setLoadingUser(false);
  };

  return (
    <UserContext.Provider
      value={{
        userList,
        loading,
        fetchMoreUsers,
        loadingUser,
        setUserModal,
        userModal,
        handleUserList,
        page,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
