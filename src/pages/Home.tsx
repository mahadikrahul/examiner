import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <header className="hero-header">
        <h1 className="hero-title">Examiner Dashboard</h1>
        <p className="hero-subtitle">Generate high-quality printable practice worksheets for multiple subjects.</p>
      </header>

      <div className="cards-grid">
        <Link to="/maths" className="card">
          <div className="card-header">Mathematics</div>
          <div className="preview">
            <h3 style={{color: 'var(--text-color)'}}>Mathematics Worksheets</h3>
            <p style={{color: '#64748b', fontSize: '14px', textAlign: 'center'}}>Arithmetic, Number Sense, Visual &amp; Spatial Concepts</p>
          </div>
        </Link>

        <Link to="/english" className="card">
          <div className="card-header" style={{background: 'linear-gradient(135deg, #ec4899, #f43f5e)'}}>English Language</div>
          <div className="preview">
            <h3 style={{color: 'var(--text-color)'}}>Grammar & Vocabulary</h3>
            <p style={{color: '#64748b', fontSize: '14px', textAlign: 'center'}}>Coming soon...</p>
          </div>
        </Link>
      </div>

      <footer className="home-footer">
        © {new Date().getFullYear()} Examiner | Crafted by <a href="https://github.com/mahadikrahul" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>Rahul Mahadik</a>
      </footer>
    </div>
  );
}
