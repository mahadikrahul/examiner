import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

interface Question {
  x: number;
  z: number;
}

export default function BetweenNumber() {
  const [searchParams, setSearchParams] = useSearchParams();
  const start = parseInt(searchParams.get("start") || "1", 10);
  const end = parseInt(searchParams.get("end") || "50", 10);
  
  const [localStart, setLocalStart] = useState(start);
  const [localEnd, setLocalEnd] = useState(end);
  const [questions, setQuestions] = useState<Question[]>([]);
  const TOTAL = 90; // Exactly 30 rows in 3 columns for 2 printed pages

  useEffect(() => {
    generateQuestions();
  }, [start, end]);

  const generateQuestions = () => {
    const randomInt = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const newQuestions: Question[] = [];
    for (let i = 0; i < TOTAL; i++) {
      let low = randomInt(start, Math.max(start, end - 2));
      let high = low + 2;
      if (high > end) high = end;
      newQuestions.push({ x: low, z: high });
    }
    setQuestions(newQuestions);
  };

  const handleApply = () => {
    if (localStart !== start || localEnd !== end) {
      setSearchParams({ start: localStart.toString(), end: localEnd.toString() });
    } else {
      generateQuestions();
    }
  };

  return (
    <div className="worksheet-page">
      <div className="no-print worksheet-controls" style={{ display: 'flex', justifyContent: 'center', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', background: '#fff', padding: '8px 16px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
          <label style={{ fontWeight: 600, fontSize: '14px' }}>From:</label>
          <input type="number" value={localStart} onChange={(e) => setLocalStart(parseInt(e.target.value) || 1)} style={{ width: '60px', padding: '4px 8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <label style={{ fontWeight: 600, fontSize: '14px', marginLeft: '10px' }}>To:</label>
          <input type="number" value={localEnd} onChange={(e) => setLocalEnd(parseInt(e.target.value) || 50)} style={{ width: '60px', padding: '4px 8px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        <button className="print-btn" style={{ background: "#64748b" }} onClick={handleApply}>
          Generate
        </button>
        <button className="print-btn" onClick={() => window.print()}>
          Print
        </button>
      </div>
      
      <h1>Between Number ({start}–{end})</h1>
      <p className="instructions">Write the number that comes between the two numbers.</p>
      
      <div className="worksheet-grid">
        {questions.map((q, index) => (
          <div key={index} className="question-col-3">
            <div className="question-row">
              <span className="worksheet-box">{q.x}</span>
              <span className="worksheet-box blank">&nbsp;</span>
              <span className="worksheet-box">{q.z}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
