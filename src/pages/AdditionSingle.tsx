import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function AdditionSingle() {
  const [searchParams, setSearchParams] = useSearchParams();
  const start = parseInt(searchParams.get("start") || "1", 10);
  const end = parseInt(searchParams.get("end") || "9", 10);
  
  const [localStart, setLocalStart] = useState(start);
  const [localEnd, setLocalEnd] = useState(end);
  const [questions, setQuestions] = useState<{a: number, b: number}[]>([]);
  const TOTAL = 72; // 24 rows in 3 columns fits exactly on 2 pages (12 rows per page)

  useEffect(() => {
    generateQuestions();
  }, [start, end]);

  const generateQuestions = () => {
    const randomInt = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const newQuestions = [];
    for (let i = 0; i < TOTAL; i++) {
      newQuestions.push({
        a: randomInt(start, end),
        b: randomInt(start, end)
      });
    }
    setQuestions(newQuestions);
  };

  const handleApply = () => {
    let validStart = Math.max(0, Math.min(9, localStart));
    let validEnd = Math.max(0, Math.min(9, localEnd));
    if (validStart > validEnd) validStart = validEnd;

    setLocalStart(validStart);
    setLocalEnd(validEnd);

    if (validStart !== start || validEnd !== end) {
      setSearchParams({ start: validStart.toString(), end: validEnd.toString() });
    } else {
      generateQuestions();
    }
  };

  return (
    <div className="worksheet-page">
      <div className="no-print worksheet-controls" style={{ display: 'flex', justifyContent: 'center', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', background: '#fff', padding: '8px 16px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
          <label style={{ fontWeight: 600, fontSize: '14px' }}>From:</label>
          <input type="number" min="0" max="9" value={localStart} onChange={(e) => setLocalStart(parseInt(e.target.value) || 0)} style={{ width: '60px', padding: '4px 8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <label style={{ fontWeight: 600, fontSize: '14px', marginLeft: '10px' }}>To:</label>
          <input type="number" min="0" max="9" value={localEnd} onChange={(e) => setLocalEnd(parseInt(e.target.value) || 9)} style={{ width: '60px', padding: '4px 8px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        <button className="print-btn" style={{ background: "#64748b" }} onClick={handleApply}>
          Generate
        </button>
        <button className="print-btn" onClick={() => window.print()}>
          Print
        </button>
      </div>
      
      <h1>Single-Digit Addition ({start}–{end})</h1>
      <p className="instructions">Add the numbers and write the sum below the line.</p>
      
      <div className="worksheet-grid">
        {questions.map((q, index) => (
          <div key={index} className="question-col-3" style={{ marginBottom: "20px" }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontSize: '36px', fontFamily: 'monospace', position: 'relative', width: '80px', lineHeight: '1.2' }}>
              <div style={{ letterSpacing: '4px', paddingRight: '4px' }}>{q.a}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <span style={{ fontSize: '28px', marginLeft: '-15px' }}>+</span>
                <span style={{ letterSpacing: '4px', paddingRight: '4px' }}>{q.b}</span>
              </div>
              <div style={{ borderTop: '3px solid #000', width: '120%', height: '50px', marginTop: '5px', alignSelf: 'center' }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
