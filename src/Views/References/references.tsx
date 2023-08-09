import styles from "./references.module.css";

const imgUrls: string[] = [
  "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png",
];

export default function References() {
  return (
    <section className={styles.section}>
      <p>Made with:</p>
      <ul className={styles.ul}>
        {imgUrls.map((url, index) => (
          <li key={index} className={styles.imageLists}>
            <img alt={`Imagen ${index}`} src={url} className={styles.image} />
          </li>
        ))}
      </ul>
    </section>
  );
}
