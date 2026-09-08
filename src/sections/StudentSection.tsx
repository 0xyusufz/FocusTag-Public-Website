import { Container } from '../components/Container';

export function StudentSection() {
  return (
    <section id="for-students" className="py-24 sm:py-32 bg-slate-50 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
              A physical commitment to focus.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 text-balance">
              Students tap an NFC checkpoint to start a focused session. The session remains associated with the location where it started.
            </p>
            <div className="mt-8">
              <ul className="space-y-4 text-slate-600">
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-[var(--color-brand)]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Builds intentional focus habits through physical action.</span>
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-[var(--color-brand)]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Helps restrict mobile distractions during study time.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 rounded-xl bg-slate-200/50 mix-blend-multiply blur-xl lg:-inset-8"></div>
            <div className="relative rounded-2xl bg-white p-2 ring-1 ring-slate-900/10 shadow-lg">
              <div className="rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center p-12 aspect-[4/3] border border-slate-100">
                {/* Mobile session visual */}
                <div className="w-[240px] h-[480px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl relative">
                  <div className="w-full h-full bg-slate-50 rounded-[2.25rem] overflow-hidden flex flex-col items-center pt-16 relative border border-slate-200">
                    <div className="absolute top-0 inset-x-0 h-7 flex justify-center pt-2">
                      <div className="w-20 h-4 bg-slate-900 rounded-full"></div>
                    </div>
                    
                    <div className="h-20 w-20 rounded-full bg-[var(--color-brand-light)] flex items-center justify-center mb-6">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-10 w-10 text-[var(--color-brand)]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Focus Active</h3>
                    <p className="text-sm text-slate-500 mb-8">Main Library</p>
                    
                    <div className="text-4xl font-light text-slate-900 font-mono tracking-tighter">
                      45:00
                    </div>
                    <div className="text-xs text-slate-400 mt-2 uppercase tracking-widest font-semibold">
                      Remaining
                    </div>
                    
                    <div className="absolute bottom-8 w-full px-6">
                      <div className="h-12 w-full bg-red-50 text-red-600 rounded-full flex items-center justify-center text-sm font-semibold border border-red-100">
                        End Session Early
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
