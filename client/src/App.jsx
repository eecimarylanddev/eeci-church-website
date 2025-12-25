import { HomePage } from './components/HomePage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SiteSettingsProvider } from './contexts';

function App() {
  return (
    <SiteSettingsProvider>
      <Navbar />
      <HomePage />
      <Footer />
    </SiteSettingsProvider>
  );
}

export default App;
