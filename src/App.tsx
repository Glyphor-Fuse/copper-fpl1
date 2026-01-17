import Index from './pages/Index';
import { GlyphorBadge } from './components/GlyphorBadge';

function App() {
  return (
    <div className="relative min-h-screen w-full bg-zinc-50 text-zinc-900 font-sans selection:bg-zinc-900 selection:text-zinc-50">
      <Index />
      <GlyphorBadge />
    </div>
  );
}

export default App;