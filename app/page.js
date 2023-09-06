
import RootLayout from './layout';
import Eq from '../components/Eq';
import MeetsAhead from '@/components/MeetsAhead';
import Landingpage from '@/components/Landingpage';
import Socialskills from '@/components/Socialskills';
import Privacy from '@/components/Privacy';

export default function Home() {
  return (
    <RootLayout>
      <Landingpage />
      <MeetsAhead />
      <Socialskills />
      {/* <Eq/> */}
      <Privacy />
    </RootLayout>

  )
}