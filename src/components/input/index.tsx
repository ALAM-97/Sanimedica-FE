"use client";

type InputPropsTypes = {
  label?: string;
  name: string;
  type?: string;
  onChange: (value: string, name: string) => void;
  value?: string | number;
  required?: boolean;
  leftText?: string;
  placeholer?: string;
  className?: string;
  withLabel?: boolean;
};

const Input = (props: InputPropsTypes) => {
  const { onChange, withLabel = true } = props;

  return (
    <div>
      <div className={`${props.className} flex items-center justify-between `}>
        {withLabel && (
          <label
            htmlFor="email"
            className="block text-md font-semibold leading-3 text-gray-400 mb-2"
          >
            {props.label}
          </label>
        )}
        {props.leftText && (
          <div className="text-sm">
            <a href="#" className="font-semibold text-gray-400 ">
              {props.leftText}
            </a>
          </div>
        )}
      </div>
      <div className="">
        <input
          placeholder={props.placeholer || ""}
          id={props.name}
          name={props.name}
          type={props.type || "text"}
          value={props.value || ""}
          onChange={(e) => onChange(e.target.value, e.target.name)}
          required={props.required || true}
          className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-800"
        />
      </div>
    </div>
  );
};

export default Input;
