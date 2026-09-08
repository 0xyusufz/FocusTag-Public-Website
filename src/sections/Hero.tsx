import { Container } from '../components/Container';
import { Button } from '../components/Button';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[var(--color-brand-light)] to-[var(--color-brand)] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>
      
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <span className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-600 ring-1 ring-slate-900/10 hover:ring-slate-900/20 transition-all bg-white shadow-xs">
              Now available for Android.{' '}
              <a href="#how-it-works" className="font-semibold text-[var(--color-brand)]"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl text-balance">
            Turn a tap into focused time.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 text-balance">
            FocusTag combines physical NFC checkpoints with mobile focus enforcement to help students stay focused where it matters.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              href="https://github.com/0xyusufz/FocusTag-Releases/releases/download/v1.0/FocusTag-v1.0.apk"
              variant="primary"
              aria-label="Download FocusTag APK for Android"
            >
              Download FocusTag
            </Button>
            <Button href="#for-institutions" variant="outline">For Institutions</Button>
          </div>
        </div>

        {/* Hero Visualization */}
        <div className="mt-16 sm:mt-24 lg:mt-32">
          <div className="mx-auto max-w-4xl rounded-2xl bg-slate-50/50 p-2 ring-1 ring-inset ring-slate-900/5 lg:rounded-3xl lg:p-4 shadow-sm">
            <div className="rounded-xl bg-white p-6 lg:p-10 shadow-sm ring-1 ring-slate-200 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 overflow-hidden relative">
              
              {/* Step 1 */}
              <div className="flex flex-col items-center flex-1 z-10">
                <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center mb-4 ring-1 ring-slate-200">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8 text-slate-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z" />
                    <circle cx="12" cy="12" r="2.5" />
                  </svg>
                </div>
                <div className="text-sm font-semibold text-slate-900">NFC TAP</div>
                <div className="text-xs text-slate-500 mt-1">Physical Checkpoint</div>
              </div>

              {/* Arrow */}
              <div className="hidden md:block text-slate-300">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center flex-1 z-10">
                <div className="h-16 w-16 rounded-2xl bg-[var(--color-brand-light)] flex items-center justify-center mb-4 ring-1 ring-[var(--color-brand)]/20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8 text-[var(--color-brand)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-sm font-semibold text-slate-900">FOCUS SESSION</div>
                <div className="text-xs text-slate-500 mt-1">Device Connected</div>
              </div>

              {/* Arrow */}
              <div className="hidden md:block text-slate-300">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center flex-1 z-10">
                <div className="h-16 w-16 rounded-2xl bg-[var(--color-brand)] flex items-center justify-center mb-4 shadow-md shadow-[var(--color-brand)]/30">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-sm font-semibold text-slate-900">FOCUS ACTIVE</div>
                <div className="text-xs text-[var(--color-brand)] font-medium mt-1">Distractions restricted</div>
              </div>

              {/* Connecting line for mobile */}
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-100 -z-0 md:hidden"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
