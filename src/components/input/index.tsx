"use client";

type InputPropsTypes = {
  label: string;
  name: string;
  type: string;
  onChange: (value: string, name: string) => void;
  value?: string;
  required?: boolean;
  leftText?: string;
  placeholer?: string;
};

const Input = (props: InputPropsTypes) => {
  const { onChange } = props;

  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor="email"
          className="block text-md font-semibold leading-3 text-gray-400"
        >
          {props.label}
        </label>
        {props.leftText && (
          <div className="text-sm">
            <a href="#" className="font-semibold text-gray-400 ">
              {props.leftText}
            </a>
          </div>
        )}
      </div>
      <div className="mt-2">
        <input
          placeholder={props.placeholer || ""}
          id={props.name}
          name={props.name}
          type={props.type}
          value={props.value || ""}
          onChange={(e) => onChange(e.target.value, e.target.name)}
          required={props.required || true}
          className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-800 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default Input;
