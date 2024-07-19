import { TextField } from "./components";
import { ChangeEvent, useRef, useState } from "react";
import { decodeHeader, decodePayload } from "./shared";
import Style from "./App.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

function App() {
  function validateEncodeHeaderAndPayload(fn: (str: string) => object) {
    return (encodeString: string) => {
      if (!encodeString.length) return true;
      return Object.keys(fn(encodeString)).length > 0;
    };
  }

  function validateEncodeString(encodeString: string) {
    return (
      validateEncodeHeaderAndPayload(decodeHeader)(encodeString) &&
      validateEncodeHeaderAndPayload(decodePayload)(encodeString)
    );
  }

  const [decodeString, setDecodeString] = useState<string>("");
  const textRef = useRef("");

  function handleOnChange(e: ChangeEvent<HTMLTextAreaElement>) {
    let newEncodeString = e.target.value;
    textRef.current = newEncodeString;
    if (!validateEncodeString(newEncodeString)) {
      newEncodeString = "";
    }
    setDecodeString(newEncodeString);
  }

  function handleCopy(text: string) {
    navigator.clipboard.writeText(text).then(
      () => {
        console.log("Text copied to clipboard");
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  }

  return (
    <div className={Style.container}>
      <h1>JWT Token Decoder</h1>
      <div className={Style.encodeArea}>
        <h2>Enter JWT Token</h2>
        <TextField handleInputChange={handleOnChange} />
      </div>
      <div className={Style.decodeArea}>
        <h2>Decoded Output</h2>
        <div className={Style.children}>
          <div className={Style.section}>
            <div className={Style.header}>
              <h6>Header:</h6>
              <button
                onClick={() =>
                  handleCopy(
                    JSON.stringify(decodeHeader(decodeString), null, 2)
                  )
                }
              >
                <FontAwesomeIcon icon={faCopy} />
              </button>
            </div>
            <pre>{JSON.stringify(decodeHeader(decodeString), null, 2)}</pre>
          </div>
          <div className={Style.section}>
            <div className={Style.header}>
              <h6>Payload:</h6>
              <button
                onClick={() =>
                  handleCopy(
                    JSON.stringify(decodePayload(decodeString), null, 2)
                  )
                }
              >
                <FontAwesomeIcon icon={faCopy} />
              </button>
            </div>
            <pre>{JSON.stringify(decodePayload(decodeString), null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
