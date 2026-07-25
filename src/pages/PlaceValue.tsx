import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function PlaceValue() {
  const [searchParams, setSearchParams] = useSearchParams();
  const start = parseInt(searchParams.get("start") || "10", 10);
  const end = parseInt(searchParams.get("end") || "99", 10);
  
  const [localStart, setLocalStart] = useState(start);
  const [localEnd, setLocalEnd] = useState(end);
  const [questions, setQuestions] = useState<number[]>([]);
  const TOTAL = 60; // 30 rows in 2 columns fits exactly on 2 pages

  useEffect(() => {
    generateQuestions();
  }, [start, end]);

  const generateQuestions = () => {
    const randomInt = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const newQuestions = [];
    for (let i = 0; i < TOTAL; i++) {
      newQuestions.push(randomInt(start, end));
    }
    setQuestions(newQuestions);
  };

  const handleApply = () => {
    let validStart = Math.max(10, Math.min(99, localStart));
    let validEnd = Math.max(10, Math.min(99, localEnd));
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
          <input type="number" min="10" max="99" value={localStart} onChange={(e) => setLocalStart(parseInt(e.target.value) || 10)} style={{ width: '60px', padding: '4px 8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <label style={{ fontWeight: 600, fontSize: '14px', marginLeft: '10px' }}>To:</label>
          <input type="number" min="10" max="99" value={localEnd} onChange={(e) => setLocalEnd(parseInt(e.target.value) || 99)} style={{ width: '60px', padding: '4px 8px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        <button className="print-btn" style={{ background: "#64748b" }} onClick={handleApply}>
          Generate
        </button>
        <button className="print-btn" onClick={() => window.print()}>
          Print
        </button>
      </div>
      
      <h1>Tens and Ones ({start}–{end})</h1>
      <p className="instructions">Write how many tens and ones are in each number.</p>
      
      <div className="worksheet-grid-2">
        {questions.map((num, index) => (
          <div key={index} className="question-col-1">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '20px', width: '100%', justifyContent: 'center' }}>
              <span style={{ fontWeight: 600, width: '40px', textAlign: 'right', marginRight: '10px' }}>{num}</span> = 
              <span className="worksheet-box standalone small" style={{ width: '50px' }}>&nbsp;</span> Tens 
              <span style={{ margin: '0 5px' }}>and</span>
              <span className="worksheet-box standalone small" style={{ width: '50px' }}>&nbsp;</span> Ones
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
