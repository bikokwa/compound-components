import { useSelect } from "./Select";

const Option = ({ value, text }) => {
  const { value: activeValue, setValue } = useSelect();

  return (
    <div
      onClick={(e) => setValue(value)}
      className={activeValue === value ? "" : ""}
    >
      {text}
    </div>
  );
};

export default Option;
