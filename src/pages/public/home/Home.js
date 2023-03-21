import { Introduce } from './Introduce';
import { BestServices } from './BestServices';
import { TrustedBy } from './TrustedBy';
import { TeamMember } from './TeamMember';
import { LeaderIndustrial } from './LeaderIndustrial';
import { Testimonial } from './Testimonial';
import { OurProject } from './OurProject';
import { News } from './News';
import { Question } from './Question';
import { LocationVideo } from 'components/own/location-video'

const Home = () => {
  return (
    <>
      <Introduce />
      <BestServices />
      <News />
      <LocationVideo />
      <TeamMember />
      <LeaderIndustrial />
      <TrustedBy />
      <Testimonial />
      <OurProject />
    </>
  );
};

export default Home;
