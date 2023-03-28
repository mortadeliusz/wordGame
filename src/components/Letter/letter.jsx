import styles from "./letter.module.css";

export default function Letter({ value, available, onClickHandler }) {
  return (
    <span
      className={styles.letter + (available ? ` ${styles.available}` : "")}
      onClick={() => {
        if (!available) return;
        onClickHandler(value);
      }}
    >
      {value}
    </span>
  );
}
