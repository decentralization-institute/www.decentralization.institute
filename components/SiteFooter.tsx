import GitHubIcon from "./icons/GitHubIcon";
import TwitterIcon from "./icons/TwitterIcon";
import Wordmark from "./Wordmark";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.container}>
          <Wordmark inverted />
          <p className={styles.copyright}>All rights reserved.</p>
          <nav className={styles.links} aria-label="Social">
            <a
              className={styles.textLink}
              href="https://decentralizationinstitute.substack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
            <a
              className={styles.iconLink}
              href="https://twitter.com/decentinstitute"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </a>
            <a
              className={styles.iconLink}
              href="https://github.com/decentralization-institute"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
