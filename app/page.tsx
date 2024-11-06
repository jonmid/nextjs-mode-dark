import ThemeSwitch from './components/ThemeSwitch';

export default function Home() {
  return (
    <main className='flex items-center justify-center w-screen h-screen bg-app-200 dark:bg-app-900 font-[family-name:var(--font-kode-mono-bold)]'>
      <section className='flex flex-col items-center gap-y-10'>
        <ThemeSwitch />
        <h1 className='text-6xl font-extrabold text-app-900 dark:text-app-200'>
          Hi, mode dark in Next.js!
        </h1>
      </section>
    </main>
  );
}
