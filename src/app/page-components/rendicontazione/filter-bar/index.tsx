"use client";

import Input from "@/components/input";
import Select from "@/components/select";
import { aslOptions, professionsOptions } from "@/data";

type FilterBarPropsTypes = {
  handleChange: (value: string, name: string) => void;
  filterObj: ObjPropsTypes;
};

type ObjPropsTypes = {
  name: string;
  asl: string;
  profession: string;
};

const FilterBar = (props: FilterBarPropsTypes) => {
  const { filterObj, handleChange } = props;

  return (
    <div className="grid grid-cols-12 gap-5 py-10">
      <div className="col-span-3">
        <Input
          name="name"
          placeholer="Inserisci nome operatore"
          value={filterObj.name}
          label="Nome operatore"
          onChange={handleChange}
        />
      </div>
      <div className="col-span-2">
        <Select
          label="ASL"
          name="asl"
          value={filterObj.asl}
          emptyOption={true}
          options={aslOptions}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-2">
        <Select
          label="Professione"
          name="profession"
          value={filterObj.profession}
          emptyOption={true}
          options={professionsOptions}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default FilterBar;
