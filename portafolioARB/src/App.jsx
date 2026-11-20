import { SECTION_ORDER } from '@/config/navigation';
import { Header, Hero } from '@/presentation/sections';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* Relleno temporal*/}
        {SECTION_ORDER.slice(1).map((id) => (
          <section
            key={id}
            id={id}
            className="container"
            style={{ minHeight: '100vh', paddingTop: 'calc(var(--header-height) + 2rem)' }}
          >
            <h2>{id}</h2>
          </section>
        ))}
      </main>
    </>
  );
}

export default App;
