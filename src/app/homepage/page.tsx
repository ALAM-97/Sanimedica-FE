"use client";

import { useEffect, useMemo, useState } from "react";
import Select from "@/components/select";
import { monthsOptions, yearsOptions } from "@/data";
import { XMarkIcon } from "@heroicons/react/20/solid";
import HomepageBody from "../page-components/homepage/body";

const Homepage = () => {
  const [period, setPeriod] = useState({ month: "Gennaio", year: "2024" });
  const [loadedFile, setLoadedFile] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (period.month === "Gennaio" && period.year === "2024") {
      return setLoadedFile("consolidato(32).csv");
    }
    return setLoadedFile("");
  }, [period]);

  const onUploadFile = (value: string) => {
    setShowLoader(true);
    setTimeout(() => {
      setLoadedFile(value);
      // Assuming you have a function to hide the loader
      setShowLoader(false);
      setLoadedFile(value);
    }, 2000); // 2000 milliseconds = 2 seconds
  };

  return (
    <>
      <div className={`flex flex-col justify-center items-center h-5/6`}>
        <div className="flex gap-5 mb-10 w-4/12">
          <Select
            options={monthsOptions}
            name="month"
            label="Mese"
            value={period.month}
            onChange={(value, name) => setPeriod({ ...period, [name]: value })}
          />
          <Select
            options={yearsOptions}
            name="year"
            label="Anno"
            value={period.year}
            onChange={(value, name) => setPeriod({ ...period, [name]: value })}
          />
        </div>
        <HomepageBody
          loadedFile={loadedFile}
          onUploadFile={onUploadFile}
          showLoader={showLoader}
        />
      </div>
      {loadedFile !== "" && !showLoader && (
        <div className="text-center flex justify-center items-center text-xl">
          <p className="font-semibold text-neutral-600 me-2">File caricato: </p>
          <p className="font-semibold text-neutral-400">{loadedFile}</p>
          <XMarkIcon
            className="h-8 w-8 text-red-600 cursor-pointer"
            onClick={() => setLoadedFile("")}
          />
        </div>
      )}
    </>
  );
};

export default Homepage;
