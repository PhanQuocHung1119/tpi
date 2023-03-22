import { RouteAPI } from '@constants/Api.constants';
import { Layout } from '@my-components';
import { Market } from '@pages/public/market';
import { createClient } from 'contentful';
import ErrorPage from 'next/error';

export async function getStaticProps() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      // environment: 'master', // defaults to 'master' if not set
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    const res = await client.getEntries({ content_type: 'news' });

    if (!res) {
      return {
        notFound: true,
      };
    }

    return {
      props: { news: res.items },
    };
  } catch (error) {
    // res.statusCode = 404;
    return { props: {} };
  }
}

export default function News({ news }) {
  // if (!news) return <ErrorPage statusCode={statusCode} />;

  return (
    <Layout>
      <Market news={news} />
    </Layout>
  );
}
