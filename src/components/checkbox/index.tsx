type CheckboxPropsTypes = {
  text: string;
  name: string;
  value: string;
};

const Checkbox = (props: CheckboxPropsTypes) => {
  return (
    <div className="flex items-center">
      <input
        id="default-checkbox"
        type="checkbox"
        name={props.name}
        value={props.value}
        className="w-4 h-4 text-cyan-700 bg-gray-100 border-gray-300 rounded focus:ring-cyan-700 dark:focus:ring-cyan-700  focus:ring-2 "
      />
      <label
        htmlFor="default-checkbox"
        className="ms-1 text-sm font-medium text-gray-900 "
      >
        {props.text}
      </label>
    </div>
  );
};

export default Checkbox;
