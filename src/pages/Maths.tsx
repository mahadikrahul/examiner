import { Link } from "react-router-dom";

export default function Maths() {
  return (
    <div className="home-container">
      <header className="hero-header">
        <h1 className="hero-title">Mathematics Worksheets</h1>
        <p className="hero-subtitle">Generate high-quality printable math worksheets for primary school students.</p>
      </header>

      <div className="maths-category" style={{ marginTop: '2rem' }}>
        <h2 className="category-title">🔢 Number Sense & Sequencing</h2>
        <div className="cards-grid">
          <Link to="/before-number" className="card">
            <div className="card-header">Before Number</div>
            <div className="card-content">
              <p className="card-desc">Identify the number that comes immediately before the given value.</p>
            </div>
            <div className="preview">
              <div className="question-row">
                <span className="worksheet-box blank">&nbsp;</span>
                <span className="worksheet-box">18</span>
              </div>
            </div>
            <div className="card-action">Generate Worksheet &rarr;</div>
          </Link>

          <Link to="/after-number" className="card">
            <div className="card-header">After Number</div>
            <div className="card-content">
              <p className="card-desc">Practice finding the number that follows right after the given value.</p>
            </div>
            <div className="preview">
              <div className="question-row">
                <span className="worksheet-box">24</span>
                <span className="worksheet-box blank">&nbsp;</span>
              </div>
            </div>
            <div className="card-action">Generate Worksheet &rarr;</div>
          </Link>

          <Link to="/between-number" className="card">
            <div className="card-header">Between Number</div>
            <div className="card-content">
              <p className="card-desc">Fill in the missing number positioned squarely in the middle.</p>
            </div>
            <div className="preview">
              <div className="question-row">
                <span className="worksheet-box">12</span>
                <span className="worksheet-box blank">&nbsp;</span>
                <span className="worksheet-box">14</span>
              </div>
            </div>
            <div className="card-action">Generate Worksheet &rarr;</div>
          </Link>

          <Link to="/missing-number" className="card">
            <div className="card-header">Missing Number</div>
            <div className="card-content">
              <p className="card-desc">Complete the numerical sequence by filling in the blanks.</p>
            </div>
            <div className="preview">
              <div className="question-row" style={{transform: "scale(0.9)", transformOrigin: "center"}}>
                <span className="worksheet-box">51</span>
                <span className="worksheet-box blank">&nbsp;</span>
                <span className="worksheet-box">53</span>
                <span className="worksheet-box blank">&nbsp;</span>
                <span className="worksheet-box">55</span>
              </div>
            </div>
            <div className="card-action">Generate Worksheet &rarr;</div>
          </Link>

          <Link to="/ascending-order" className="card">
            <div className="card-header">Ascending Order</div>
            <div className="card-content">
              <p className="card-desc">Sort a jumbled set of five numbers from smallest to largest.</p>
            </div>
            <div className="preview">
              <div className="row">
                <span className="worksheet-box small">35</span>
                <span className="worksheet-box small">7</span>
                <span className="worksheet-box small">22</span>
                <span className="worksheet-box small">41</span>
                <span className="worksheet-box small">10</span>
              </div>
              <div className="row">
                <span className="worksheet-box small blank">&nbsp;</span>
                <span className="worksheet-box small blank">&nbsp;</span>
                <span className="worksheet-box small blank">&nbsp;</span>
                <span className="worksheet-box small blank">&nbsp;</span>
                <span className="worksheet-box small blank">&nbsp;</span>
              </div>
            </div>
            <div className="card-action">Generate Worksheet &rarr;</div>
          </Link>

          <Link to="/descending-order" className="card">
            <div className="card-header">Descending Order</div>
            <div className="card-content">
              <p className="card-desc">Sort a jumbled set of five numbers from largest to smallest.</p>
            </div>
            <div className="preview">
              <div className="row">
                <span className="worksheet-box small">12</span>
                <span className="worksheet-box small">49</span>
                <span className="worksheet-box small">2</span>
                <span className="worksheet-box small">18</span>
                <span className="worksheet-box small">33</span>
              </div>
              <div className="row">
                <span className="worksheet-box small blank">&nbsp;</span>
                <span className="worksheet-box small blank">&nbsp;</span>
                <span className="worksheet-box small blank">&nbsp;</span>
                <span className="worksheet-box small blank">&nbsp;</span>
                <span className="worksheet-box small blank">&nbsp;</span>
              </div>
            </div>
            <div className="card-action">Generate Worksheet &rarr;</div>
          </Link>

          <Link to="/number-comparison" className="card">
            <div className="card-header">Compare Numbers</div>
            <div className="card-content">
              <p className="card-desc">Compare two numbers using Greater Than, Less Than, or Equal To.</p>
            </div>
            <div className="preview">
              <div className="question-row" style={{ gap: '12px' }}>
                <span className="worksheet-box standalone">42</span>
                <span className="worksheet-box circle">&nbsp;</span>
                <span className="worksheet-box standalone">24</span>
              </div>
            </div>
            <div className="card-action">Generate Worksheet &rarr;</div>
          </Link>

          <Link to="/skip-counting" className="card">
            <div className="card-header">Skip Counting</div>
            <div className="card-content">
              <p className="card-desc">Identify the pattern and fill in the missing numbers.</p>
            </div>
            <div className="preview">
              <div className="question-row" style={{transform: "scale(0.9)", transformOrigin: "center"}}>
                <span className="worksheet-box">5</span>
                <span className="worksheet-box blank">&nbsp;</span>
                <span className="worksheet-box">15</span>
                <span className="worksheet-box">20</span>
                <span className="worksheet-box blank">&nbsp;</span>
              </div>
            </div>
            <div className="card-action">Generate Worksheet &rarr;</div>
          </Link>

          <Link to="/number-names" className="card">
            <div className="card-header">Number Names</div>
            <div className="card-content">
              <p className="card-desc">Practice translating numbers into words and vice-versa.</p>
            </div>
            <div className="preview">
              <div className="question-row" style={{justifyContent: 'flex-start', width: '100%', padding: '0 20px'}}>
                <span className="worksheet-box standalone">14</span>
                <div style={{ flex: 1, borderBottom: '2px dashed #94a3b8', height: '10px', marginLeft: '15px', alignSelf: 'flex-end' }}></div>
              </div>
            </div>
            <div className="card-action">Generate Worksheet &rarr;</div>
          </Link>
        </div>
      </div>

      <div className="maths-category">
        <h2 className="category-title">➕➖ Basic Arithmetic</h2>
        <div className="cards-grid">
          <Link to="/addition-single" className="card">
            <div className="card-header">Single-Digit Addition</div>
            <div className="card-content">
              <p className="card-desc">Practice basic addition with single digit numbers.</p>
            </div>
            <div className="preview">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontSize: '24px', fontFamily: 'monospace', position: 'relative', width: '60px', margin: '0 auto' }}>
                <div style={{ letterSpacing: '2px', paddingRight: '4px' }}>5</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                  <span style={{ fontSize: '18px', marginLeft: '-10px' }}>+</span>
                  <span style={{ letterSpacing: '2px', paddingRight: '4px' }}>3</span>
                </div>
                <div style={{ borderTop: '2px solid #000', width: '120%', height: '20px', marginTop: '2px', alignSelf: 'center' }}></div>
              </div>
            </div>
            <div className="card-action">Generate Worksheet &rarr;</div>
          </Link>

          <Link to="/subtraction-single" className="card">
            <div className="card-header">Single-Digit Subtraction</div>
            <div className="card-content">
              <p className="card-desc">Practice basic subtraction with single digit numbers.</p>
            </div>
            <div className="preview">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontSize: '24px', fontFamily: 'monospace', position: 'relative', width: '60px', margin: '0 auto' }}>
                <div style={{ letterSpacing: '2px', paddingRight: '4px' }}>8</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                  <span style={{ fontSize: '18px', marginLeft: '-10px' }}>−</span>
                  <span style={{ letterSpacing: '2px', paddingRight: '4px' }}>2</span>
                </div>
                <div style={{ borderTop: '2px solid #000', width: '120%', height: '20px', marginTop: '2px', alignSelf: 'center' }}></div>
              </div>
            </div>
            <div className="card-action">Generate Worksheet &rarr;</div>
          </Link>

          <Link to="/addition-double" className="card">
            <div className="card-header">Double-Digit Addition</div>
            <div className="card-content">
              <p className="card-desc">Practice addition with double digit numbers (no carrying).</p>
            </div>
            <div className="preview">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontSize: '24px', fontFamily: 'monospace', position: 'relative', width: '60px', margin: '0 auto' }}>
                <div style={{ letterSpacing: '2px', paddingRight: '4px' }}>24</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                  <span style={{ fontSize: '18px', marginLeft: '-10px' }}>+</span>
                  <span style={{ letterSpacing: '2px', paddingRight: '4px' }}>13</span>
                </div>
                <div style={{ borderTop: '2px solid #000', width: '120%', height: '20px', marginTop: '2px', alignSelf: 'center' }}></div>
              </div>
            </div>
            <div className="card-action">Generate Worksheet &rarr;</div>
          </Link>

          <Link to="/subtraction-double" className="card">
            <div className="card-header">Double-Digit Subtraction</div>
            <div className="card-content">
              <p className="card-desc">Practice subtraction with double digit numbers (no borrowing).</p>
            </div>
            <div className="preview">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontSize: '24px', fontFamily: 'monospace', position: 'relative', width: '60px', margin: '0 auto' }}>
                <div style={{ letterSpacing: '2px', paddingRight: '4px' }}>48</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                  <span style={{ fontSize: '18px', marginLeft: '-10px' }}>−</span>
                  <span style={{ letterSpacing: '2px', paddingRight: '4px' }}>25</span>
                </div>
                <div style={{ borderTop: '2px solid #000', width: '120%', height: '20px', marginTop: '2px', alignSelf: 'center' }}></div>
              </div>
            </div>
            <div className="card-action">Generate Worksheet &rarr;</div>
          </Link>

          <Link to="/multiplication" className="card">
            <div className="card-header">Multiplication</div>
            <div className="card-content">
              <p className="card-desc">Practice basic multiplication and times tables.</p>
            </div>
            <div className="preview">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontSize: '24px', fontFamily: 'monospace', position: 'relative', width: '60px', margin: '0 auto' }}>
                <div style={{ letterSpacing: '2px', paddingRight: '4px' }}>4</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                  <span style={{ fontSize: '18px', marginLeft: '-10px' }}>×</span>
                  <span style={{ letterSpacing: '2px', paddingRight: '4px' }}>3</span>
                </div>
                <div style={{ borderTop: '2px solid #000', width: '120%', height: '20px', marginTop: '2px', alignSelf: 'center' }}></div>
              </div>
            </div>
            <div className="card-action">Generate Worksheet &rarr;</div>
          </Link>
        </div>
      </div>

      <div className="maths-category">
        <h2 className="category-title">📐⏰ Visual & Spatial Concepts</h2>
        <div className="cards-grid">
          <Link to="/place-value" className="card">
            <div className="card-header">Place Value</div>
            <div className="card-content">
              <p className="card-desc">Write how many tens and ones are in each number.</p>
            </div>
            <div className="preview">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', justifyContent: 'center' }}>
                <span style={{ fontWeight: 600 }}>45</span> = 
                <span className="worksheet-box standalone small" style={{ width: '30px', height: '30px' }}>&nbsp;</span> T 
                <span className="worksheet-box standalone small" style={{ width: '30px', height: '30px' }}>&nbsp;</span> O
              </div>
            </div>
            <div className="card-action">Generate Worksheet &rarr;</div>
          </Link>

          <Link to="/time" className="card">
            <div className="card-header">Time (Clocks)</div>
            <div className="card-content">
              <p className="card-desc">Read the time on the clocks or draw the missing hands.</p>
            </div>
            <div className="preview">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                <svg width="40" height="40" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#64748b" strokeWidth="4" />
                  <line x1="50" y1="50" x2="50" y2="25" stroke="#64748b" strokeWidth="4" />
                  <line x1="50" y1="50" x2="70" y2="50" stroke="#64748b" strokeWidth="4" />
                </svg>
                <div className="worksheet-box standalone" style={{ width: '60px', height: '30px' }}>&nbsp;</div>
              </div>
            </div>
            <div className="card-action">Generate Worksheet &rarr;</div>
          </Link>

          <Link to="/shapes" className="card">
            <div className="card-header">Geometrical Shapes</div>
            <div className="card-content">
              <p className="card-desc">Count the randomly generated shapes in the box.</p>
            </div>
            <div className="preview">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <circle cx="10" cy="10" r="8" fill="none" stroke="#64748b" strokeWidth="2" />
                  <rect x="20" y="20" width="16" height="16" fill="none" stroke="#64748b" strokeWidth="2" />
                  <polygon points="30,4 38,16 22,16" fill="none" stroke="#64748b" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div className="card-action">Generate Worksheet &rarr;</div>
          </Link>

          <Link to="/patterns" className="card">
            <div className="card-header">Patterns</div>
            <div className="card-content">
              <p className="card-desc">Identify the pattern sequence and draw the missing shapes.</p>
            </div>
            <div className="preview">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                <svg width="16" height="16" viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="none" stroke="#64748b" strokeWidth="3" /></svg>
                <svg width="16" height="16" viewBox="0 0 40 40"><rect x="4" y="4" width="32" height="32" fill="none" stroke="#64748b" strokeWidth="3" /></svg>
                <svg width="16" height="16" viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="none" stroke="#64748b" strokeWidth="3" /></svg>
                <div style={{ width: '20px', borderBottom: '2px solid #64748b', marginLeft: '5px' }}></div>
              </div>
            </div>
            <div className="card-action">Generate Worksheet &rarr;</div>
          </Link>
        </div>
      </div>

      <footer className="home-footer">
        © {new Date().getFullYear()} Examiner | Crafted by <a href="https://github.com/mahadikrahul" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>Rahul Mahadik</a>
      </footer>
    </div>
  );
}
