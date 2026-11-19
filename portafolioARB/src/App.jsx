import { SECTION_ORDER } from '@/config/navigation';
import { Header } from '@/presentation/sections';

function App() {
  return (
    <>
      <Header />
      <main>
        {SECTION_ORDER.map((id, index) => (
          <section
            key={id}
            id={id}
            className="container"
            style={{ minHeight: '100vh', paddingTop: 'calc(var(--header-height) + 2rem)' }}
          >
            {index === 0 ? <h1>AlexHousky</h1> : <h2>{id}</h2>}
          </section>
        ))}
      </main>
    </>
  );
}

export default App;
