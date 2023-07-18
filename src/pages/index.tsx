import styles from './index.less';
import { Link } from 'umi';

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <Link to="/custom-style">
        <button>组件封装-自定义样式</button>
      </Link>
      <Link to="/global-css">
        <button>GlobalCSS</button>
      </Link>
      <Link to="/transfer-func">
        <button>父子组件互相调用函数</button>
      </Link>
      <Link to="/use-ref">
        <button>useRef</button>
      </Link>
      <Link to="/create-ref">
        <button>createRef</button>
      </Link>
    </div>
  );
}
