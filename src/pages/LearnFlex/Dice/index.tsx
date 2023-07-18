import styles from './index.less';
import { Link, history } from 'umi';

export default function Dice() {
  return (
    <div>
      <button style={{ marginBottom: '20px' }} onClick={() => history.goBack()}>
        返回上一级
      </button>
      {/* 1 */}
      <div className={`${styles.face} ${styles['first-face']}`}>
        <span className={styles.pip}></span>
      </div>
      {/* 2 */}
      <div className={`${styles.face} ${styles['second-face']}`}>
        <span className={styles.pip}></span>
        <span className={styles.pip}></span>
      </div>
      {/* 3 */}
      <div className={`${styles.face} ${styles['third-face']}`}>
        <span className={styles.pip}></span>
        <span className={styles.pip}></span>
        <span className={styles.pip}></span>
      </div>
      {/* 4 */}
      <div className={`${styles.face} ${styles['fourth-face']}`}>
        <div className={styles.column}>
          <span class={styles.pip}></span>
          <span class={styles.pip}></span>
        </div>
        <div className={styles.column}>
          <span class={styles.pip}></span>
          <span class={styles.pip}></span>
        </div>
      </div>
      {/* 5 */}
      <div className={`${styles.face} ${styles['fifth-face']}`}>
        <div className={styles.column}>
          <span class={styles.pip}></span>
          <span class={styles.pip}></span>
        </div>
        <div className={styles.column}>
          <span class={styles.pip}></span>
        </div>
        <div className={styles.column}>
          <span class={styles.pip}></span>
          <span class={styles.pip}></span>
        </div>
      </div>
      {/* 6 */}
      <div className={`${styles.face} ${styles['sixth-face']}`}>
        <div className={styles.column}>
          <span class={styles.pip}></span>
          <span class={styles.pip}></span>
          <span class={styles.pip}></span>
        </div>
        <div className={styles.column}>
          <span class={styles.pip}></span>
          <span class={styles.pip}></span>
          <span class={styles.pip}></span>
        </div>
      </div>
    </div>
  );
}
