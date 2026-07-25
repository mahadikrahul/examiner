import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function MissingNumber() {
  const [searchParams, setSearchParams] = useSearchParams();
  const start = parseInt(searchParams.get("start") || "1", 10);
  const end = parseInt(searchParams.get("end") || "50", 10);
  
  const [localStart, setLocalStart] = useState(start);
  const [localEnd, setLocalEnd] = useState(end);
  const [blocks, setBlocks] = useState<{ sequence: number[]; blankIndices: number[] }[]>([]);

  useEffect(() => {
    generateQuestions();
  }, [start, end]);

  const generateQuestions = () => {
    const randomInt = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // Dynamically generate groups of 10 based on the range
    const seriesList = [];
    for (let i = start; i < end; i += 10) {
      seriesList.push({ start: i, end: Math.min(i + 9, end) });
    }
    
    const newBlocks: { sequence: number[]; blankIndices: number[] }[] = [];
    const repeatSets = 6; // repeat full set to fill A4

    for (let r = 0; r < repeatSets; r++) {
      for (let s = 0; s < seriesList.length; s++) {
        const seriesStart = seriesList[s].start;
        const seriesEnd = seriesList[s].end;
        
        const sequence = [];
        for (let i = seriesStart; i <= seriesEnd; i++) sequence.push(i);

        let blanksCount = randomInt(1, 3);
        let blankIndices: number[] = [];

        let valid = false;
        while (!valid) {
          blankIndices = [];
          while (blankIndices.length < blanksCount) {
            const idx = randomInt(0, sequence.length - 1);
            if (!blankIndices.includes(idx)) blankIndices.push(idx);
          }

          const visibleCount = sequence.length - blankIndices.length;
          let consecutive = 0;
          valid = true;

          for (let i = 0; i < sequence.length; i++) {
            if (!blankIndices.includes(i)) {
              consecutive++;
              if (consecutive > 2) {
                valid = false;
                break;
              }
            } else {
              consecutive = 0;
            }
          }

          if (visibleCount < 3) valid = false;
          
          if (!valid) {
            blanksCount = randomInt(1, Math.min(3, sequence.length - 3));
          }
        }
        
        newBlocks.push({ sequence, blankIndices });
      }
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
      
      <h1>Missing Numbers ({start}–{end})</h1>
      <p className="instructions">Fill in the missing numbers in each sequence.</p>
      
      <div style={{ display: "block", width: "100%", padding: "0 20px 40px" }}>
        {blocks.length > 0 && Array.from({ length: Math.ceil(blocks.length / (Math.ceil((end - start) / 10) || 1)) }).map((_, setIndex) => {
          const groupSize = Math.ceil((end - start) / 10) || 1;
          return (
          <div key={setIndex} style={{ display: "block", width: "100%", pageBreakInside: "avoid", breakInside: "avoid", marginBottom: "12px" }}>
            {blocks.slice(setIndex * groupSize, setIndex * groupSize + groupSize).map((block, i) => (
              <div key={i} className="question-col-3" style={{ maxWidth: "100%", width: "100%", marginBottom: "8px" }}>
                <div className="question-row">
                  {block.sequence.map((num, j) => (
                    <span key={j} className={`worksheet-box ${block.blankIndices.includes(j) ? 'blank' : ''}`} style={{ width: "66px" }}>
                      {block.blankIndices.includes(j) ? '\u00A0' : num}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            {setIndex < Math.ceil(blocks.length / groupSize) - 1 && (
               <div className="set-separator" style={{ marginTop: "10px" }}></div>
            )}
          </div>
        )})}
      </div>
    </div>
  );
}
