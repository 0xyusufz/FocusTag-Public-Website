import { Container } from '../components/Container';

export function TrustStatement() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/50 py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xl font-medium leading-8 text-slate-800 sm:text-2xl sm:leading-10">
            "Focus starts with a physical commitment."
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-1 w-1 rounded-full bg-[var(--color-brand)]"></div>
            <div className="h-1 w-1 rounded-full bg-[var(--color-brand)]/50"></div>
            <div className="h-1 w-1 rounded-full bg-[var(--color-brand)]/20"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
