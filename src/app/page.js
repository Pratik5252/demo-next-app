import styles from "./page.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <img className={styles.bgIcon} alt="" src="/Bg.png" />
      <div className={styles.leftside}>
        <div className={styles.button}>
          <div className={styles.buttonContainer}>
            <a href="/" className={styles.explore}>{`Explore `}</a>
            <img
              className={styles.rightArrowIcon}
              alt=""
              src="/Rightarrow.svg"
            />
          </div>
        </div>
        <div className={styles.unleashYourCreativeContainer}>
          <span>{`Unleash Your Creative Brilliance: A `}</span>
          <span className={styles.designerHub}>Designer Hub</span>
          <span> for Innovation, Collaboration, and Inspiration</span>
        </div>
        <img className={styles.vectorIcon} alt="" src="/Vector.svg" />
        <div className={styles.designersHub}>
          <p className={styles.designers}>Designers</p>
          <p className={styles.designers}>Hub</p>
        </div>
      </div>
      <div className={styles.rightside}>
        <div className={styles.card2}>
          <div className={styles.card2Child} />
          <img className={styles.dicons} alt="" src="/3dicons.svg" />
        </div>
        <div className={styles.card1}>
          <div className={styles.card1Child} />
          <img className={styles.dicons} alt="" src="/3dicons-1.svg" />
        </div>
      </div>

      <div className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.ul}>
            <a href="/" className={styles.caseStudy}>
              Case study
            </a>
            <a href="/" className={styles.docs}>
              Docs
            </a>
            <a href="/" className={styles.products}>
              Products
            </a>
            <a href="/" className={styles.trends}>
              Trends
            </a>
            <a href="/" className={styles.about}>
              About
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
