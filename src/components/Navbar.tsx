import { useState, useEffect } from 'react';
import { Container } from './Container';
import { Button } from './Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-subtle py-3 shadow-[0_1px_2px_rgba(0,0,0,0.03)]' : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <span className="sr-only">FocusTag</span>
              {/* Simple subtle logo mark */}
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">FocusTag</span>
            </a>
          </div>

          <div className="hidden lg:flex lg:gap-x-10">
            <a href="#how-it-works" className="text-sm font-medium leading-6 text-slate-600 hover:text-slate-900 transition-colors">How it works</a>
            <a href="#for-students" className="text-sm font-medium leading-6 text-slate-600 hover:text-slate-900 transition-colors">For Students</a>
            <a href="#for-institutions" className="text-sm font-medium leading-6 text-slate-600 hover:text-slate-900 transition-colors">For Institutions</a>
          </div>

          <div className="flex flex-1 items-center justify-end gap-x-4 lg:gap-x-6">
            <a href="#for-institutions" className="hidden text-sm font-medium leading-6 text-slate-600 hover:text-slate-900 lg:block transition-colors">
              Pilot Program
            </a>
            <Button
              href="https://github.com/0xyusufz/FocusTag-Releases/releases/download/v1.0/FocusTag-v1.0.apk"
              variant="primary"
              aria-label="Download FocusTag APK for Android"
            >
              Download
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
