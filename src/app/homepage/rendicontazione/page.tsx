"use client";

import FilterBar from "@/app/page-components/rendicontazione/filter-bar";
import Header from "@/components/header";
import { useState } from "react";

const Rendicontazione = () => {
  const [filterObj, setFilterObj] = useState({
    name: "",
    asl: "",
    profession: "",
  });

  const handleChange = (value: string, name: string) => {
    setFilterObj({ ...filterObj, [name]: value });
  };
  return (
    <>
      <Header />
      <FilterBar handleChange={handleChange} filterObj={filterObj} />
    </>
  );
};

export default Rendicontazione;
