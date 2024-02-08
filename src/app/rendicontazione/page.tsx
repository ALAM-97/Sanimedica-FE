"use client";

import FilterBar from "@/app/page-components/rendicontazione/filter-bar";
import Modal from "@/app/page-components/rendicontazione/modal";
import Table from "@/app/page-components/rendicontazione/table/Index";
import Header from "@/components/header";
import { useState } from "react";

const Rendicontazione = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentOperator, setCurrentOperator] = useState("");
  const [rows, setRows] = useState([0]);
  const [filterObj, setFilterObj] = useState({
    name: "",
    asl: "",
    profession: "",
    status: "",
  });

  const handleFilterChange = (value: string, name: string) => {
    setFilterObj({ ...filterObj, [name]: value });
  };

  const handleAccessChange = () => {};

  const handleOpenModal = (name: string) => {
    setCurrentOperator(name);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setRows([0]);
  };

  const handleAddRow = () => {
    // add next number to the array to show more rows
    const rowsLength = rows.length;
    setRows([...rows, rows[rowsLength - 1] + 1]);
  };

  return (
    <>
      <FilterBar handleChange={handleFilterChange} filterObj={filterObj} />
      <Table onOpenModal={(name: string) => handleOpenModal(name)} />

      <Modal
        handleChange={handleAccessChange}
        currentOperator={currentOperator}
        open={modalIsOpen}
        onClose={handleCloseModal}
        rows={rows}
        onAddRow={handleAddRow}
      />
    </>
  );
};

export default Rendicontazione;
