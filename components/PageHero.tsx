import styles from "./PageHero.module.css";

type PageHeroProps = {
  title: string;
  description: string;
  /** Illustration shown to the right of the title card. */
  image: string;
  /** Desktop illustration height in pixels (width is always 400px). */
  imageHeight?: number;
  /**
   * Illustration shown above the title card on mobile. Defaults to `image`;
   * pass `null` to show no illustration on mobile.
   */
  mobileImage?: string | null;
};

/**
 * Sand-colored page header: a translucent title card overlapping an
 * illustration on desktop, stacked under the illustration on mobile.
 */
export default function PageHero({
  title,
  description,
  image,
  imageHeight = 350,
  mobileImage = image,
}: PageHeroProps) {
  const imageClass =
    mobileImage === null ? `${styles.image} ${styles.desktopOnly}` : styles.image;

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.card}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.description}>{description}</p>
            </div>
          </div>
          <div className={styles.column}>
            <picture className={styles.picture}>
              {mobileImage !== null && mobileImage !== image && (
                <source media="(max-width: 767px)" srcSet={mobileImage} />
              )}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={imageClass}
                src={image}
                alt=""
                width={400}
                height={imageHeight}
                style={{ "--image-height": `${imageHeight}px` } as React.CSSProperties}
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
