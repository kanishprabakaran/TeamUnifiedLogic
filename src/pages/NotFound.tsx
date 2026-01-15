import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center animated-gradient circuit-pattern">
      <div className="text-center glass-card p-12 rounded-2xl border border-cyan/30">
        <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-gold animate-pulse" />
        <h1 className="font-orbitron text-6xl font-bold mb-4 text-glow-cyan text-cyan">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! This route doesn't exist in our network.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg btn-solid-cyan font-orbitron text-sm"
        >
          <Home className="w-4 h-4" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
