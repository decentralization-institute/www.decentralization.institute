import Newsletter from "./Newsletter";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import styles from "./SiteLayout.module.css";

type SiteLayoutProps = {
  children: React.ReactNode;
  /** Show the "Stay up to date" mailing list block above the footer. */
  newsletter?: boolean;
};

export default function SiteLayout({
  children,
  newsletter = true,
}: SiteLayoutProps) {
  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <SiteHeader />
        <main className={styles.main}>
          {children}
          {newsletter && <Newsletter />}
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
