import styles from './index.less';
import { Link } from 'umi';

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <Link to="/custom-style">
        <button>组件封装-自定义样式</button>
      </Link>
      <Link to="/dice">
        <button>骰子</button>
      </Link>
      <Link to="/grid">
        <button>基础网格布局（平分空间）</button>
      </Link>
      <Link to="/percent">
        <button>百分比布局</button>
      </Link>
      <Link to="/holyGrail">
        <button>圣杯布局</button>
      </Link>
      <Link to="/input">
        <button>输入框布局</button>
      </Link>
      <Link to="/flow">
        <button>流式布局</button>
      </Link>
      <Link to="/hang">
        <button>悬挂式布局</button>
      </Link>
      <Link to="/fiex-footer">
        <button>固定的底栏</button>
      </Link>
    </div>
  );
}
