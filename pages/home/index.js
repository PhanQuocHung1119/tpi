import { Layout } from '@my-components';
import { Home } from '@pages/public/home';
import cloudinary from 'cloudinary';

export async function getStaticProps() {
  cloudinary.v2.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });

  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute();

  let arrImage = [];
  let i = 0;
  for (let result of results.resources) {
    arrImage.push({
      id: i,
      src: result.url,
      width: result.width,
      height: result.height,
      public_id: result.public_id,
      format: result.format,
      caption: result.filename,
      thumbnailCaption: result.filename,
    });
    i++;
  }

  return {
    props: {
      images: arrImage,
    },
  };
}

const HomePage = ({ images }) => {
  return (
    <Layout>
      <Home images={images} />
    </Layout>
  );
};
export default HomePage;
