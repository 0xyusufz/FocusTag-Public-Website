import { Container } from '../components/Container';

export function InstitutionSection() {
  return (
    <section id="for-institutions" className="py-24 sm:py-32 bg-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
            Give every focused space a digital layer.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 text-balance">
            Configure locations, NFC tags, classes, students, and authorized teacher access. Teachers can monitor active focus sessions for their designated classes.
          </p>
        </div>

        {/* Top-down Flow Visual */}
        <div className="mx-auto max-w-5xl">
          <div className="relative rounded-2xl bg-slate-50 border border-slate-100 p-8 sm:p-12 overflow-hidden shadow-xs">
            <div className="flex flex-col md:flex-row items-center justify-between relative z-10 gap-8">
              
              <div className="flex flex-col items-center text-center max-w-[140px]">
                <div className="h-16 w-16 bg-white border border-slate-200 rounded-xl shadow-xs flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 text-sm">NFC</h4>
                <p className="text-xs text-slate-500 mt-1">Physical Tags</p>
              </div>

              <div className="hidden md:block w-8 h-px bg-slate-300"></div>
              <div className="md:hidden h-8 w-px bg-slate-300"></div>

              <div className="flex flex-col items-center text-center max-w-[140px]">
                <div className="h-16 w-16 bg-white border border-slate-200 rounded-xl shadow-xs flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 text-sm">SPACE</h4>
                <p className="text-xs text-slate-500 mt-1">Classroom / Library</p>
              </div>

              <div className="hidden md:block w-8 h-px bg-slate-300"></div>
              <div className="md:hidden h-8 w-px bg-slate-300"></div>

              <div className="flex flex-col items-center text-center max-w-[140px]">
                <div className="h-16 w-16 bg-white border border-slate-200 rounded-xl shadow-xs flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 text-sm">STUDENT</h4>
                <p className="text-xs text-slate-500 mt-1">Taps to Focus</p>
              </div>

              <div className="hidden md:block w-8 h-px bg-[var(--color-brand)]/50"></div>
              <div className="md:hidden h-8 w-px bg-[var(--color-brand)]/50"></div>

              <div className="flex flex-col items-center text-center max-w-[140px]">
                <div className="h-16 w-16 bg-[var(--color-brand)] text-white rounded-xl shadow-md flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[var(--color-brand)] text-sm">SESSION</h4>
                <p className="text-xs text-slate-500 mt-1">Active & Logged</p>
              </div>

              <div className="hidden md:block w-8 h-px bg-[var(--color-brand)]/50"></div>
              <div className="md:hidden h-8 w-px bg-[var(--color-brand)]/50"></div>

              <div className="flex flex-col items-center text-center max-w-[140px]">
                <div className="h-16 w-16 bg-slate-900 text-white rounded-xl shadow-md flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 text-sm">TEACHER</h4>
                <p className="text-xs text-slate-500 mt-1">Monitoring</p>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
