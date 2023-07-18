import React, { memo } from 'react';
import styles from './index.less';
import Btn from '../components/Btn';

const Hang = memo(() => {
  return (
    <div>
      <Btn />
      <div className={styles.container}>
        <img className={styles.figure} src="" alt="" />
        {/* 单行省略 */}
        <p className={`${styles.body} ${styles.oneline}`}>
          The wind carries away in glee the tinkling of your anklet bells.
          风高兴地带走了你踝铃的丁当。 The sun smiles and watches your toilet.
          The sky watches over you when you sleep in your mother's arms, and the
          morning comes tiptoe to your bed and kisses your eyes.
          太阳微笑着，望着你的打扮。 The wind carries away in glee the tinkling
          of your anklet bells. 风高兴地带走了你踝铃的丁当。 The sun smiles and
          watches your toilet. The sky watches over you when you sleep in your
          mother's arms, and the morning comes tiptoe to your bed and kisses
          your eyes.
        </p>
      </div>

      <div className={styles.container}>
        <img className={styles.figure} src="" alt="" />
        {/* 2行省略 */}
        <p className={`${styles.body} ${styles.twoline}`}>
          The wind carries away in glee the tinkling of your anklet bells.
          风高兴地带走了你踝铃的丁当。 The sun smiles and watches your toilet.
          The sky watches over you when you sleep in your mother's arms, and the
          morning comes tiptoe to your bed and kisses your eyes.
          太阳微笑着，望着你的打扮。 The wind carries away in glee the tinkling
          of your anklet bells. 风高兴地带走了你踝铃的丁当。 The sun smiles and
          watches your toilet. The sky watches over you when you sleep in your
          mother's arms, and the morning comes tiptoe to your bed and kisses
          your eyes.
        </p>
      </div>
    </div>
  );
});

export default Hang;
