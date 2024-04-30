import styles from './SuperInfo.module.css';

function SuperInfo() {
  console.log(styles);
  return (
    <div>
      <h1 className={styles.titulo}>Notebook</h1>
      <p>R$ 20.000</p>
      <button>Comprar</button>
    </div>
  );
}

export { SuperInfo };
