import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function AscendingOrder() {
  const [searchParams, setSearchParams] = useSearchParams();
  const start = parseInt(searchParams.get("start") || "1", 10);
  const end = parseInt(searchParams.get("end") || "50", 10);
  
  const [localStart, setLocalStart] = useState(start);
  const [localEnd, setLocalEnd] = useState(end);
  const [questions, setQuestions] = useState<number[][]>([]);
  const TOTAL_SETS = 30; // Decreased to avoid 3rd page spill

  useEffect(() => {
    generateQuestions();
  }, [start, end]);

  const generateQuestions = () => {
    const randomUniqueNumbers = (min: number, max: number, count: number) => {
      const numbers: number[] = [];
      while (numbers.length < count) {
        const n = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(n)) numbers.push(n);
      }
      return numbers;
    };

    const shuffle = (arr: number[]) => {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };

    const newQuestions = [];
    for (let i = 0; i < TOTAL_SETS; i++) {
      const nums = randomUniqueNumbers(start, end, 5);
      newQuestions.push(shuffle(nums));
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
      
      <h1>Ascending Order ({start}–{end})</h1>
      <p className="instructions">Arrange the given numbers in ascending order.</p>
      
      <div className="worksheet-grid-2">
        {questions.map((jumbled, index) => (
          <div key={index} className="question-col-1" style={{ position: 'relative' }}>
            <div className="row">
              {jumbled.map((num, i) => (
                <span key={i} className="worksheet-box small">{num}</span>
              ))}
            </div>
            <div className="row">
              {[0, 1, 2, 3, 4].map(i => (
                <span key={i} className="worksheet-box small blank">&nbsp;</span>
              ))}
            </div>
            {((index + 1) % 10 === 0 && index < TOTAL_SETS - 1) && (
              <div className="set-separator"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
