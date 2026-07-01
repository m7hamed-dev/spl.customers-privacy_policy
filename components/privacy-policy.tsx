'use client';

import { Icon } from '@/components/icons';
import * as C from '@/lib/content';

/** Renders text, wrapping any [placeholder] run in a highlighted mark. */
function Prose({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]*\])/g).filter((p) => p.length > 0);
  return (
    <>
      {parts.map((p, i) =>
        /^\[[^\]]*\]$/.test(p) ? (
          <mark key={i} className="rounded bg-amber-100 px-1 text-amber-900 dark:bg-amber-400/20 dark:text-amber-200">
            {p}
          </mark>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

function Logo({ size = 36 }: { size?: number }) {
  return C.HAS_LOGO ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logo.png" alt={C.APP_NAME + ' logo'} className="rounded-lg object-cover" width={size} height={size} />
  ) : (
    <span
      className="grid place-items-center rounded-lg bg-primary text-white font-display font-extrabold"
      style={{ width: size, height: size }}
    >
      {C.MONOGRAM}
    </span>
  );
}

function Block({ block }: { block: C.Block }) {
  if (block.kind === 'p') {
    return (
      <p>
        <Prose text={block.text} />
      </p>
    );
  }
  if (block.kind === 'h') {
    return (
      <h3 className="font-display text-lg font-bold text-ink dark:text-slate-100 pt-2">
        <Prose text={block.text} />
      </h3>
    );
  }
  return (
    <ul className="list-disc ps-6 space-y-1.5 marker:text-primary">
      {block.items.map((item, i) => (
        <li key={i}>
          <Prose text={item} />
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicy() {
  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle('dark');
    localStorage.theme = root.classList.contains('dark') ? 'dark' : 'light';
  };

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/70 dark:bg-slate-950/70 border-b border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex items-center gap-4 h-16">
          <a href={C.HOME_HREF ?? '#top'} className="flex items-center gap-2.5 font-display font-extrabold text-lg">
            <Logo size={36} />
            <span>{C.APP_NAME}</span>
          </a>
          <div className="flex items-center gap-3 ms-auto">

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="grid place-items-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              <span className="dark:hidden">
                <Icon name="moon" className="w-5 h-5" />
              </span>
              <span className="hidden dark:inline">
                <Icon name="sun" className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Title */}
        <section className="border-b border-black/5 dark:border-white/10 bg-slate-50/50 dark:bg-white/5">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary-dark dark:text-primary ring-1 ring-primary/20">
              <Icon name="shield" className="w-4 h-4" /> Legal
            </div>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold tracking-tight">Privacy Policy for {C.APP_NAME}</h1>
            <p className="mt-3 text-slate-500 dark:text-slate-400">Last updated: {C.LAST_UPDATED}</p>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">


          {/* Table of contents */}
          <nav aria-label="Contents" className="mt-10 rounded-brand border border-black/5 dark:border-white/10 p-6">
            <h2 className="font-display font-bold text-lg">Contents</h2>
            <ol className="mt-3 grid sm:grid-cols-2 gap-x-8 text-sm text-slate-600 dark:text-slate-300 list-decimal list-inside marker:text-primary">
              {C.sections.map((s) => (
                <li key={s.id}>
                  <a href={'#' + s.id} className="inline-block py-1 hover:text-primary transition">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Policy body */}
          <article className="mt-12 space-y-12">
            {C.sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">{s.title}</h2>
                <div className="mt-4 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                  {s.blocks.map((b, i) => (
                    <Block key={i} block={b} />
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-500 dark:text-slate-400">
          <p>© {C.YEAR} {C.APP_NAME}. All rights reserved.</p>
          <p>Crafted with Flutter Pro Kit.</p>
        </div>
      </footer>
    </>
  );
}
