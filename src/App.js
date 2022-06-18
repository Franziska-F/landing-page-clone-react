import './App.css';

import AppNavHeader from './AppNavHeader';
import CreateSection from './CreateSection';
import FinalCreateSection from './FinalCreateSection';
import IconGrid from './IconGrid';
import LogoGrid from './LogoGrid';
import Sections from './Sections';
import VideoPlayer from './VideoPlayer';

function App() {
  return (
    <>
      <main>
        <AppNavHeader />
        <Sections />
        <IconGrid />
        <CreateSection />
        <VideoPlayer />
        <LogoGrid />
        <FinalCreateSection />
      </main>
      <footer />
    </>
  );
}

export default App;
