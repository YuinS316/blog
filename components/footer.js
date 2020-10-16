import styles from "../styles/footer.module.css";

const links = [
  { name: "Github", href: "https://github.com/" },
  { name: "Bilibili", href: "https://www.bilibili.com/" },
  { name: "React", href: "https://react.docschina.org/" },
  { name: "Nodejs", href: "http://nodejs.cn/learn" },
  { name: "Koa", href: "https://koa.bootcss.com/#" },
  { name: "MDN", href: "https://developer.mozilla.org/zh-CN/" },
  { name: "MDX", href: "https://www.mdxjs.cn/" },
  { name: "Markdown", href: "https://www.markdown.xyz/" },
  {
    name: "Styled components",
    href: "https://styled-components.com/docs/basics",
  },
  {
    name: "Styled components中文",
    href: "https://github.com/hengg/styled-components-docs-zh",
  },
  { name: "Labuladong", href: "https://labuladong.gitbook.io/algo/" },
];

const len = links.length;

export default function Footer() {
  return (
    <>
      <hr className={styles.hrStyle} />
      <div className={styles.container}>
        <ul className={styles.ulStyle}>
          <li>社区</li>
          <br />
          {links.slice(0, 2).map((item) => (
            <li>
              <a className={styles.a} href={item.href} target="_blank">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <ul className={styles.ulStyle}>
          <li>常用资源</li>
          <br />
          {links.slice(3, len - 1).map((item) => (
            <li>
              <a className={styles.a} href={item.href} target="_blank">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <ul className={styles.ulStyle}>
          <li>算法</li>
          <br />
          {links.slice(len - 1, len).map((item) => (
            <li>
              <a className={styles.a} href={item.href} target="_blank">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
