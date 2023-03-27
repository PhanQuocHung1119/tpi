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
  let paths = [];
  res.items.map((item) => {
    paths.push({
      params: {
        slug: item.fields.slug,
      },
      locale: 'vi',
    });
    paths.push({
      params: {
        slug: item.fields.slug,
      },
      locale: 'en-US',
    });
  });

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params, locale }) {
  const res = await client.getEntries({
    content_type: 'toanPhatMarketNews',
    'fields.slug': params.slug,
    locale: locale,
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
    revalidate: 10,
  };
}

export default function Detail({ news }) {
  return (
    <Layout>
      <MarketDetail news={news} />;
    </Layout>
  );
}
