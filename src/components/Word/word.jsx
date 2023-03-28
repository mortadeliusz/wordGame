import styles from "./word.module.css";
import nextId from "react-id-generator";
export default function Word({ value }) {
  return (
    value && (
      <div className={styles.word}>
        {value.split("").map((letter) => (
          <span className={styles.letter} key={nextId()}>
            {letter}
          </span>
        ))}
      </div>
    )
  );
}
