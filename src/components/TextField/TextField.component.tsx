import { ChangeEvent } from "react";
import Style from "./TextField.module.scss";

interface TextFieldProps {
  readonly handleInputChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextField({ handleInputChange }: TextFieldProps) {
  return (
    <div className={Style.textField}>
      <textarea
        onChange={handleInputChange}
        rows={5}
        name="encodeString"
        id="encode"
        placeholder="Enter JWT token"
      />
    </div>
  );
}

export { TextField };
