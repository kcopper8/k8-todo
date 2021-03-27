import { ChangeEvent } from "react";

interface Props {
  checked: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<Props> = ({ checked, disabled = false, onChange }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export { Checkbox };
