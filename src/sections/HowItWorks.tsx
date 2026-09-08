import { Container } from '../components/Container';

const steps = [
  {
    id: '01',
    name: 'TAP',
    description: 'Tap the designated FocusTag NFC point.',
  },
  {
    id: '02',
    name: 'FOCUS',
    description: 'Your focused session begins.',
  },
  {
    id: '03',
    name: 'STAY FOCUSED',
    description: 'Distractions are restricted while your session is active.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold leading-7 text-[var(--color-brand)]">How it works</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            From tap to focus in seconds.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col relative group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-200 group-hover:border-[var(--color-brand)]/30 group-hover:bg-[var(--color-brand-light)] transition-colors">
                    <span className="text-lg font-bold text-slate-900 group-hover:text-[var(--color-brand)] transition-colors">{step.id}</span>
                  </div>
                  <div className="h-px flex-1 bg-slate-100 hidden lg:block group-last:hidden"></div>
                </div>
                <dt className="text-lg font-semibold leading-7 text-slate-900">
                  {step.name}
                </dt>
                <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
