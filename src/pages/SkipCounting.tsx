import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function SkipCounting() {
  const [searchParams, setSearchParams] = useSearchParams();
  const start = parseInt(searchParams.get("start") || "1", 10);
  const end = parseInt(searchParams.get("end") || "50", 10);
  
  const [localStart, setLocalStart] = useState(start);
  const [localEnd, setLocalEnd] = useState(end);
  const [blocks, setBlocks] = useState<{ sequence: number[]; blankIndices: number[]; step: number }[]>([]);

  useEffect(() => {
    generateQuestions();
  }, [start, end]);

  const generateQuestions = () => {
    const randomInt = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const newBlocks = [];
    const TOTAL_SETS = 60; // 60 items (30 rows in 2 columns) fits exactly on 2 pages

    for (let r = 0; r < TOTAL_SETS; r++) {
        // Choose step size: 2, 3, 5, or 10
        const steps = [2, 3, 5, 10];
        const step = steps[Math.floor(Math.random() * steps.length)];
        
        // Ensure the sequence doesn't exceed 'end'
        // Max value will be startValue + (5 * step)
        const maxPossibleStart = end - (4 * step);
        const actualMaxStart = maxPossibleStart > start ? maxPossibleStart : start;
        
        const seriesStart = randomInt(start, actualMaxStart);
        
        const sequence = [];
        for (let i = 0; i < 5; i++) {
            sequence.push(seriesStart + (i * step));
        }

        let blanksCount = randomInt(2, 3);
        let blankIndices: number[] = [];

        while (blankIndices.length < blanksCount) {
          const idx = randomInt(0, 4);
          if (!blankIndices.includes(idx)) blankIndices.push(idx);
        }
        
        newBlocks.push({ sequence, blankIndices, step });
    }
    setBlocks(newBlocks);
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
      
      <h1>Skip Counting ({start}–{end})</h1>
      <p className="instructions">Fill in the missing numbers to complete the pattern.</p>
      
      <div className="worksheet-grid-2">
        {blocks.map((block, i) => (
          <div key={i} className="question-col-1">
            <div className="question-row" style={{ justifyContent: 'flex-start' }}>
              <div style={{ width: '55px', color: '#64748b', fontSize: '14px', fontStyle: 'italic', display: 'flex', alignItems: 'center', marginRight: '8px' }}>
                (by {block.step}s)
              </div>
              {block.sequence.map((num, j) => (
                <span key={j} className={`worksheet-box small ${block.blankIndices.includes(j) ? 'blank' : ''}`} style={{ width: '46px' }}>
                  {block.blankIndices.includes(j) ? '\u00A0' : num}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
