import axios from "axios";
import Link from "next/link";
import { withRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Test = ({ router, data }) => {
  return (
    <>
      <div className={styles.container}>
        <Link href="/">back to Index</Link>
        <main className={styles.main}>
          {data.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </main>
      </div>
    </>
  );
};

Test.getInitialProps = async () => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const res = await axios
    .get(
      "https://www.easy-mock.com/mock/5f4bbdac9279d93141e8721b/example/getUnFinList"
    )
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => console.log(error));

  return { data: res.unFinList };
};

export default withRouter(Test);
