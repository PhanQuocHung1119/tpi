import { Introduce } from './Introduce';
import { BestServices } from './BestServices';
import { TrustedBy } from './TrustedBy';
import { TeamMember } from './TeamMember';
import { LeaderIndustrial } from './LeaderIndustrial';
import { Testimonial } from './Testimonial';
import { OurProject } from './OurProject';
import { News } from './News';
import { Question } from './Question';

const Home = () => {
  return (
    <>
      <Introduce />
      <BestServices />
      <TrustedBy />
      <TeamMember />
      <LeaderIndustrial />
      <Testimonial />
      <OurProject />
      <News />
      <Question />
    </>
  );
};

export default Home;
