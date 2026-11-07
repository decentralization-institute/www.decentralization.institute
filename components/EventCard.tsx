import styles from "./EventCard.module.css";

export type EventCardProps = {
  image: string;
  /** Intrinsic aspect ratio of the image, e.g. "3 / 2". */
  imageAspectRatio: string;
  title: string;
  /** Title shown on mobile, when it differs from the desktop title. */
  mobileTitle?: string;
  excerpt: string;
  /** Slightly tighter text layout used by one card on the original page. */
  compact?: boolean;
};

export default function EventCard({
  image,
  imageAspectRatio,
  title,
  mobileTitle,
  excerpt,
  compact = false,
}: EventCardProps) {
  return (
    <article className={styles.cell}>
      <div className={styles.card}>
        <div className={styles.media}>
          <div className={styles.imageFrame}>
            <span
              className={styles.spacer}
              style={{ aspectRatio: imageAspectRatio }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.image} src={image} alt="" />
          </div>
        </div>
        <div className={styles.body}>
          <div className={compact ? `${styles.text} ${styles.compact}` : styles.text}>
            <h4 className={styles.title}>
              {mobileTitle ? (
                <>
                  <span className={styles.desktopOnly}>{title}</span>
                  <span className={styles.mobileOnly}>{mobileTitle}</span>
                </>
              ) : (
                title
              )}
            </h4>
            <p className={styles.excerpt}>{excerpt}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
