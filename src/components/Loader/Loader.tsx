import style from './Loader.module.css';

const Loader = () => (
  <div className={style.lds_ellipsis}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Loader;
