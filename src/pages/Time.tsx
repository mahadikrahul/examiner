import { useState, useEffect } from "react";

const Clock = ({ hour, minute, drawHands }: { hour: number, minute: number, drawHands: boolean }) => {
  const minuteAngle = minute * 6; // 360 / 60 = 6 degrees per minute
  const hourAngle = (hour % 12) * 30 + (minute / 60) * 30; // 30 degrees per hour

  return (
    <svg width="90" height="90" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="48" fill="white" stroke="black" strokeWidth="2" />
      {/* Draw hour tick marks */}
      {[...Array(12)].map((_, i) => (
        <line 
          key={i}
          x1="50" y1="6" x2="50" y2="12" 
          stroke="black" strokeWidth="2"
          transform={`rotate(${i * 30} 50 50)`}
        />
      ))}
      {/* Draw numbers optionally? Too cluttered. Ticks are fine for Class 1, or numbers. Let's add numbers! */}
      {[...Array(12)].map((_, i) => {
        const num = i === 0 ? 12 : i;
        const angle = i * 30;
        // calculate position
        const rad = (angle - 90) * (Math.PI / 180);
        const x = 50 + 34 * Math.cos(rad);
        const y = 50 + 34 * Math.sin(rad);
        return (
          <text key={`text-${i}`} x={x} y={y} fill="black" fontSize="12" fontWeight="bold" textAnchor="middle" alignmentBaseline="middle">
            {num}
          </text>
        );
      })}
      
      {drawHands && (
        <>
          {/* Hour hand */}
          <line x1="50" y1="50" x2="50" y2="28" stroke="black" strokeWidth="4" strokeLinecap="round" transform={`rotate(${hourAngle} 50 50)`} />
          {/* Minute hand */}
          <line x1="50" y1="50" x2="50" y2="16" stroke="black" strokeWidth="2" strokeLinecap="round" transform={`rotate(${minuteAngle} 50 50)`} />
        </>
      )}
      <circle cx="50" cy="50" r="3" fill="black" />
    </svg>
  );
};

export default function Time() {
  const [questions, setQuestions] = useState<{hour: number, minute: number, isDraw: boolean}[]>([]);
  const TOTAL = 48; // 24 rows across 2 columns = 12 rows per page, perfectly fits 2 pages!

  useEffect(() => {
    generateQuestions();
  }, []);

  const generateQuestions = () => {
    const randomInt = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const newQuestions = [];
    for (let i = 0; i < TOTAL; i++) {
      // Class 1 usually learns O'clock (00) and Half past (30)
      const hour = randomInt(1, 12);
      const minute = Math.random() > 0.5 ? 0 : 30;
      // First half (page 1) is reading the clock, Second half (page 2) is drawing the hands
      const isDraw = i >= TOTAL / 2;
      newQuestions.push({ hour, minute, isDraw });
    }
    setQuestions(newQuestions);
  };

  const padZero = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="worksheet-page">
      <div className="no-print worksheet-controls" style={{ display: 'flex', justifyContent: 'center', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
        <button className="print-btn" style={{ background: "#64748b" }} onClick={generateQuestions}>
          Generate
        </button>
        <button className="print-btn" onClick={() => window.print()}>
          Print
        </button>
      </div>
      
      <h1>Time (Clocks)</h1>
      <p className="instructions">Read the time on the clocks, or draw the missing hands.</p>
      
      <div className="worksheet-grid-2">
        {questions.map((q, index) => (
          <div key={index} className="question-col-1">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', width: '100%' }}>
              <Clock hour={q.hour} minute={q.minute} drawHands={!q.isDraw} />
              
              {q.isDraw ? (
                <div style={{ fontSize: '24px', fontWeight: 'bold', width: '80px', textAlign: 'center' }}>
                  {q.hour}:{padZero(q.minute)}
                </div>
              ) : (
                <div className="worksheet-box standalone" style={{ width: '90px', letterSpacing: '2px', padding: '10px' }}>
                  &nbsp;:&nbsp;&nbsp;
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
