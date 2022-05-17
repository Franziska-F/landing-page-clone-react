import './App.css';

import AppNavHeader from './AppNavHeader';
import CreateSection from './CreateSection';
import IconGrid from './IconGrid';
import Sections from './Sections';

function App() {
  return (
    <main>
      <AppNavHeader />
      <Sections />
      <IconGrid />
      <CreateSection />
    </main>
  );
}

export default App;
