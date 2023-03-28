import { useState } from "react";
import Letter from "../Letter/letter";
import Word from "../Word/word";
import nodeId from "react-id-generator";
import styles from "./gameArea.module.css";
export default function GameArea({ letters }) {
  const lettersStruct = (letters || "bionggdib".split("")).map((val) => ({
    value: val,
    available: true,
    key: nodeId()
  }));
  console.log("gameloaded");
  const [currentWord, setCurrentWord] = useState("");
  const [letterSet, setLetterSet] = useState(lettersStruct);

  return (
    <>
      {" "}
      <div className={styles.letterSet}>
        {letterSet.map((letter) => (
          <Letter
            value={letter.value}
            available={letter.available}
            // onClickHandler={(letter) => setCurrentWord((prev) => prev + letter)}
            onClickHandler={() => {
              setCurrentWord((prev) => prev + letter.value);
              setLetterSet((prev) =>
                prev.map((el) =>
                  el.key === letter.key
                    ? { ...el, available: false }
                    : { ...el }
                )
              );
            }}
            key={letter.key}
          />
        ))}
      </div>
      <Word value={currentWord || " "} />
      <div className={styles.actions}>
        <button type="button" onClick={clearWord}>
          Clear
        </button>
        <button type="button" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </>
  );
  function clearWord() {
    setCurrentWord("");
    setLetterSet((prev) => prev.map((el) => ({ ...el, available: true })));
  }
  function onSubmit() {
    console.log("submitting: ", currentWord);
  }
}
