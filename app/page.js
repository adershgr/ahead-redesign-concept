
import RootLayout from './layout';
import Eq from '@/components/Eq';
import MeetsAhead from '@/components/MeetsAhead';
import Landingpage from '@/components/Landingpage';
import Socialskills from '@/components/Socialskills';
import Privacy from '@/components/Privacy';
import Vacancy from '@/components/Vacancy';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <RootLayout>
      <Landingpage />
      <MeetsAhead />
       <Eq />
      <Socialskills />
      <Privacy />
      <Vacancy />
      <Footer />
    </RootLayout>

  )
}