import Head from "next/head";
import { useRouter, withRouter } from "next/router";
import Date from "../../components/date";
import Layout from "../../components/layout";
import Navigation from "../../components/navigation";
import RenderCode from "../../components/renderCode";

import { getAllPostIds, getPostData, getSortedPostsData } from "../../lib/post";
import utilStyles from "../../styles/utils.module.css";

function Post({ postData, allPostsData: data }) {
  const router = useRouter();

  const dataId = [];
  const dataTitle = [];

  data.forEach((element) => {
    dataId.push(element.id);
    dataTitle.push(element.title);
  });

  const index = dataId.indexOf(postData.id);
  const leftIndex = index == 0 ? null : index - 1;
  const rightIndex = index == dataId.length - 1 ? null : index + 1;

  return (
    <>
      <Navigation allPostsData={data} />
      <Layout
        leftTitle={dataTitle[leftIndex]}
        leftId={dataId[leftIndex]}
        rightTitle={dataTitle[rightIndex]}
        rightId={dataId[rightIndex]}
      >
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>

          <RenderCode value={postData.contentHtml} />
          {/* <div
            style={{ fontSize: "18px" }}
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          /> */}
        </article>
      </Layout>
    </>
  );
}
export default withRouter(Post);

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allPostsData = getSortedPostsData();
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
      allPostsData,
    },
  };
}
