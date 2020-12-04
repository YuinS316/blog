import styles from "../styles/navigation.module.css";
import Logo from "../public/logo.svg";
import Router from "next/router";
import Link from "next/link";
import { useRouter, withRouter } from "next/router";
import styled from "styled-components";
import { useState } from "react";

const StyledItem = styled.div`
  margin: 0;
  line-height: normal;
  width: 120%;

  height: 2rem;
  line-height: 2rem;
  padding-left: 1rem;
  border-radius: 0.3rem;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;

  color: ${({ nowPath, path }) => (nowPath == path ? "#25c2a0" : "#606770")};
  background: ${({ nowPath, path }) =>
    nowPath == path ? "rgba(0, 0, 0, 0.05)" : "inherit"};
`;

const StyledTag = styled.div`
  display: inline-block;
  font-size: large;
  width: 120%;
  height: 2.25rem;
  line-height: 2.25rem;
  padding-left: 0.5rem;
  margin: 0.1rem 0;
  border-radius: 0.3rem;

  & ::after {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    position: absolute;
    left: 270px;
    border-top: 3px solid black;
    border-right: 3px solid black;

    transition: 0.2s ease;
    transition-property: transform;

    transform: translateY(10px)
      ${({ expand }) => (!expand ? "rotate(45deg)" : "rotate(135deg)")};
  }
`;

function Navigation({ allPostsData: data }) {
  const router = useRouter();

  let tags = new Set();
  data.forEach((element) => {
    tags.add(element.tag);
  });
  tags = [...tags];

  const len = tags.length;

  const [expand, setexpand] = useState(new Array(len).fill(false));

  function goBackHome() {
    Router.push({ pathname: "/" });
  }

  function handleExpand(index) {
    let state = [...expand];
    state[index] = !state[index];
    setexpand(state);
  }

  return (
    <>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <div className={styles.container}>
        <div className={styles.menuTogger}>
          <input type="checkbox" />
          <i className="fa fa-bars fa-lg" aria-hidden="true"></i>

          <ul className={styles.menu}>
            {tags.map((item, index) => (
              <details key={item}>
                <summary>
                  <StyledTag
                    id={`item+${index}`}
                    expand={expand[index]}
                    onClick={() => handleExpand(index)}
                  >
                    {item}
                  </StyledTag>
                </summary>

                {data.map(({ id, title, tag }) => {
                  return (
                    tag == item && (
                      <li key={id}>
                        <Link href="/posts/[id]" as={`/posts/${id}`}>
                          <StyledItem
                            nowPath={router.asPath}
                            path={`/posts/${id}`}
                          >
                            {title}
                          </StyledItem>
                        </Link>
                      </li>
                    )
                  );
                })}
              </details>
            ))}
          </ul>
        </div>

        {
          //<SideBar status={true} />
        }

        <Logo className={styles.logoStyle} onClick={goBackHome} />

        <a href="https://www.nextjs.cn/docs/getting-started" target="_blank">
          <button className={styles.buttonStyle}>Next.js官网</button>
        </a>
      </div>
      <hr className={styles.hrStyle} />
    </>
  );
}

export default withRouter(Navigation);
