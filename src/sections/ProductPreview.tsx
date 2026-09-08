import { Container } from '../components/Container';

export function ProductPreview() {
  return (
    <section className="py-20 bg-slate-900 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]"></div>
      
      <Container className="relative z-10">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 transform transition-transform hover:scale-[1.02] duration-300">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-slate-900 rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <span className="font-semibold text-slate-900">FocusTag</span>
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">Classroom 2</span>
            </div>

            <div className="flex flex-col items-center py-10 bg-slate-50 rounded-2xl border border-slate-100 mb-6">
              <div className="h-3 w-3 bg-[var(--color-brand)] rounded-full animate-pulse mb-3 shadow-[0_0_8px_var(--color-brand)]"></div>
              <h3 className="text-sm font-bold tracking-widest text-[var(--color-brand)] uppercase mb-2">Focus Active</h3>
              <div className="text-5xl font-light text-slate-900 font-mono tracking-tighter">42:18</div>
              <div className="text-sm text-slate-500 mt-2">Focused session</div>
            </div>

            <div className="flex justify-between items-center px-2">
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Started</span>
                <span className="text-sm font-medium text-slate-900">10:21 AM</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Location</span>
                <span className="text-sm font-medium text-slate-900">Room 402</span>
              </div>
            </div>
          </div>
          <p className="mt-8 text-sm text-slate-400 font-medium tracking-wide">ILLUSTRATIVE UI PREVIEW</p>
        </div>
      </Container>
    </section>
  );
}
