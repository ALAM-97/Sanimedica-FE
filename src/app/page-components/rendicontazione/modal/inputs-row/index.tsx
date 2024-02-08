import Input from "@/components/input";
import Select from "@/components/select";
import { accessTypes, aslOptions } from "@/data";
import { XMarkIcon } from "@heroicons/react/20/solid";

import { useEffect, useState } from "react";

type InputsRowPropsTypes = {
  handleChange: (access: object, key: string) => void;
  key: string;
};

const InputsRow = (props: InputsRowPropsTypes) => {
  const { handleChange, key } = props;

  const [access, setAccess] = useState({
    accesses: 0,
    accessType: "",
    asl: "",
  });

  useEffect(() => {
    handleChange(access, key);
  }, [access]);

  return (
    <div className="grid grid-cols-12 gap-5 py-2 items-center">
      <div className="col-span-4">
        <Input
          withLabel={false}
          placeholer="Inserisci n° accessi"
          type="number"
          name="accesses"
          value={""}
          onChange={(value, name) => setAccess({ ...access, [name]: value })}
        />
      </div>
      <div className="col-span-4">
        <Select
          name="accessType"
          withLabel={false}
          options={accessTypes}
          value={""}
          onChange={(value, name) => setAccess({ ...access, [name]: value })}
        />
      </div>
      <div className="col-span-3">
        <Select
          name="asl"
          withLabel={false}
          options={aslOptions}
          value={""}
          onChange={(value, name) => setAccess({ ...access, [name]: value })}
        />
      </div>
      <div className="col-span-1">
        <XMarkIcon className="h-6 w-6 text-red-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default InputsRow;
