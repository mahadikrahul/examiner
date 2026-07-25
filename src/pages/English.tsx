export default function English() {
  return (
    <div className="home-container">
      <header className="hero-header">
        <h1 className="hero-title">English Language</h1>
        <p className="hero-subtitle">English worksheets will be added here soon.</p>
      </header>
      <footer className="home-footer" style={{ marginTop: '10rem' }}>
        © {new Date().getFullYear()} Examiner | Crafted by <a href="https://github.com/mahadikrahul" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>Rahul Mahadik</a>
      </footer>
    </div>
  );
}
