import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ToolPage } from './pages/ToolPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Pricing } from './pages/Pricing';
import { Blog } from './pages/Blog';
import { Cookies } from './pages/Cookies';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tools/:slug" element={<ToolPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
