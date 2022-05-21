import { Route, Routes } from "react-router-dom";
import Modal from "../../components/Modal";
import { Table } from "../../components/Table";
import * as S from "./styles";
const Home = () => {
  return (
    <S.MainContainer>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
        doloremque accusamus cumque voluptates reprehenderit, voluptatum, eaque
        in tenetur exercitationem iste esse aut. Recusandae iusto .
      </p>

      <Table />
      <Routes>
        <Route path="pacient/:id" element={<Modal />} />
      </Routes>
    </S.MainContainer>
  );
};

export default Home;
