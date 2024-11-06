import ThemeSwitch from './components/ThemeSwitch';

export default function Home() {
  return (
    <main className='flex items-center justify-center w-screen h-screen bg-cyan-200 dark:bg-cyan-900'>
      <section className='flex flex-col items-center gap-y-10'>
        <ThemeSwitch />
        <h1 className='text-6xl font-extrabold text-cyan-900 dark:text-cyan-200'>
          Hi, mode dark in Next.js!
        </h1>
      </section>
    </main>
  );
}
