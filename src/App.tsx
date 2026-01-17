import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import { GlyphorBadge } from './components/GlyphorBadge';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen w-full bg-zinc-50 text-zinc-900 font-sans selection:bg-zinc-900 selection:text-zinc-50">
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <GlyphorBadge />
      </div>
    </Router>
  );
}

export default App;