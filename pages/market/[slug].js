import React from 'react';
import { createClient } from 'contentful';
import { MarketDetail } from '@pages/public/market-detail';
import { Layout } from '@my-components';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  // environment: 'master', // defaults to 'master' if not set
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: 'news' });
  const paths = res.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await client.getEntries({
    content_type: 'news',
    'fields.slug': params.slug,
  });

  if (!res) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { news: res.items[0] },
    revalidate: 1,
  };
}

export default function Detail({ news }) {
  return (
    <Layout>
      <MarketDetail news={news} />;
    </Layout>
  );
}