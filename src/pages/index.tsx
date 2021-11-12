import type { NextPage } from 'next';
import styles from 'styles/Home.module.css'; // example of import style files (module css)
import Header from 'components/head'; // example of import components

const Home: NextPage = function home() {
  return (
    <div className={styles.container}>
      {/* see line above! this is example of using module css */}
      <Header />
      <main>
        hello
        {/* fill here with oauth codes */}
      </main>
    </div>
  );
};

export default Home;
