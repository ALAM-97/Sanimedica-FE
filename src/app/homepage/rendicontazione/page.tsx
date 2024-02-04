"use client";

import FilterBar from "@/app/page-components/rendicontazione/filter-bar";
import Modal from "@/app/page-components/rendicontazione/modal";
import Table from "@/app/page-components/rendicontazione/table/Index";
import Header from "@/components/header";
import { useState } from "react";

const Rendicontazione = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentOperator, setCurrentOperator] = useState("");
  const [filterObj, setFilterObj] = useState({
    name: "",
    asl: "",
    profession: "",
    status: "",
  });

  const handleChange = (value: string, name: string) => {
    setFilterObj({ ...filterObj, [name]: value });
  };

  const handleOpenModal = (name: string) => {
    setCurrentOperator(name);
    setModalIsOpen(true);
  };

  return (
    <>
      <Header />
      <FilterBar handleChange={handleChange} filterObj={filterObj} />
      <Table onOpenModal={(name: string) => handleOpenModal(name)} />

      <Modal
        currentOperator={currentOperator}
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      />
    </>
  );
};

export default Rendicontazione;
