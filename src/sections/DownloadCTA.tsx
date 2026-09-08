import { Container } from '../components/Container';
import { Button } from '../components/Button';

export function DownloadCTA() {
  return (
    <section id="download" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 border border-slate-100">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Ready to focus?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Start with FocusTag for Android.
          </p>
          
          <div className="mt-8 flex flex-col items-center justify-center gap-y-4">
            <Button
              href="https://github.com/0xyusufz/FocusTag-Releases/releases/download/v1.0/FocusTag-v1.0.apk"
              variant="primary"
              className="px-8 py-3.5 text-base"
              aria-label="Download FocusTag APK for Android, Version 1.0"
            >
              Download FocusTag
            </Button>
            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.523 15.3414C17.523 15.3414 16.1438 15.3414 15.2241 15.3414C14.3043 15.3414 13.9366 14.2838 13.9366 14.2838L12.419 9.87329L10.9015 14.2838C10.9015 14.2838 10.5338 15.3414 9.61405 15.3414C8.6943 15.3414 7.31505 15.3414 7.31505 15.3414C7.31505 15.3414 7.95886 13.4444 8.78663 11.0069C9.61441 8.56942 10.4882 6.08588 10.4882 6.08588C10.4882 6.08588 10.9479 4.70636 12.419 4.70636C13.8901 4.70636 14.3499 6.08588 14.3499 6.08588C14.3499 6.08588 15.2237 8.56942 16.0514 11.0069C16.8792 13.4444 17.523 15.3414 17.523 15.3414ZM21.9128 17.4338C21.9128 17.4338 20.3952 17.4338 19.3375 17.4338C18.2798 17.4338 17.774 15.9163 17.774 15.9163L16.9922 13.525C16.9922 13.525 15.7506 13.525 12.419 13.525C9.08741 13.525 7.84578 13.525 7.84578 13.525L7.06399 15.9163C7.06399 15.9163 6.55813 17.4338 5.50043 17.4338C4.44273 17.4338 2.92518 17.4338 2.92518 17.4338C2.92518 17.4338 5.77635 9.07525 8.3516 1.60251C8.3516 1.60251 8.94943 0 12.419 0C15.8886 0 16.4864 1.60251 16.4864 1.60251C19.0617 9.07525 21.9128 17.4338 21.9128 17.4338Z" />
              </svg>
              Android • Version 1.0
            </div>
          </div>
          
          {/* Subtle background decoration */}
          <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
            <circle cx="512" cy="512" r="512" fill="url(#gradient)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="var(--color-brand-light)" />
                <stop offset="1" stopColor="var(--color-brand)" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </Container>
    </section>
  );
}
