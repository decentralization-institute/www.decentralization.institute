import ArrowRightIcon from "./icons/ArrowRightIcon";
import styles from "./ValueProposition.module.css";

type ValuePropositionProps = {
  title: string;
  text: string;
  image: string;
  /** Side the round photo sits on at desktop widths. */
  imagePosition: "left" | "right";
};

/** Two-column row with copy and a call to action beside a round photo. */
export default function ValueProposition({
  title,
  text,
  image,
  imagePosition,
}: ValuePropositionProps) {
  const copy = (
    <div className={styles.half}>
      <div className={styles.copy}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
        <button type="button" className={styles.button}>
          <span className={styles.buttonLabel}>Learn more</span>
          <ArrowRightIcon className={styles.buttonIcon} />
        </button>
      </div>
    </div>
  );
  const photo = (
    <div className={styles.half}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.photo} src={image} alt="" width={400} height={400} />
    </div>
  );

  // On mobile the photo always comes first. With the photo on the right that
  // means reversing the wrap order, as the original layout did.
  return (
    <div className={styles.row}>
      <div
        className={
          imagePosition === "right" ? `${styles.inner} ${styles.photoRight}` : styles.inner
        }
      >
        {imagePosition === "right" ? (
          <>
            {copy}
            {photo}
          </>
        ) : (
          <>
            {photo}
            {copy}
          </>
        )}
      </div>
    </div>
  );
}
