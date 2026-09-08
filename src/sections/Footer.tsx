import { Container } from '../components/Container';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 sm:py-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xl font-bold tracking-tight text-slate-900 mb-2">FocusTag</span>
            <p className="text-sm text-slate-500">
              Focus better. Stay accountable.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-600">
            <a href="#how-it-works" className="hover:text-slate-900 transition-colors">How it works</a>
            <a href="#for-students" className="hover:text-slate-900 transition-colors">For Students</a>
            <a href="#for-institutions" className="hover:text-slate-900 transition-colors">For Institutions</a>
            <a href="#download" className="hover:text-[var(--color-brand)] transition-colors">Download</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs leading-5 text-slate-500">
            &copy; 2026 FocusTag. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
