import Head from "next/head";
import DefaultLayout from "../components/layouts/Default";

import Card from "../components/ui/Card";
import Header from "../components/ui/Header";
import SearchBox from "../components/ui/SearchBox";

export default function Home({ articles }) {
  return (
    <DefaultLayout>
      <Head>
        <title>New York Time.</title>
        <meta name="description" content="New York Time | NextJs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container md:mx-auto">
        <Header title="New York Time." />
        <div className="block m-auto mb-5">
          <SearchBox />
        </div>
        
        <Card articles={articles} />
      </div>
    </DefaultLayout>
  );
}

export async function getServerSideProps() {
  const req = await fetch(
    `${process.env.API_URL}home.json?api-key=${process.env.API_KEY}`
  );
  const resp = await req.json();
  if (!resp) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      total: resp.num_results,
      articles: resp.results,
    },
  };
}
