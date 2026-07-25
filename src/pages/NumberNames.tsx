import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function NumberNames() {
  const [searchParams, setSearchParams] = useSearchParams();
  const start = parseInt(searchParams.get("start") || "1", 10);
  const end = parseInt(searchParams.get("end") || "50", 10);
  
  const [localStart, setLocalStart] = useState(start);
  const [localEnd, setLocalEnd] = useState(end);
  const [questions, setQuestions] = useState<{num: number, isWordToNumber: boolean}[]>([]);
  const TOTAL = 60; // Less items because they need more space to write

  useEffect(() => {
    generateQuestions();
  }, [start, end]);

  const generateQuestions = () => {
    const randomInt = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const newQuestions = [];
    for (let i = 0; i < TOTAL; i++) {
      const num = randomInt(start, end);
      // First half (Page 1) is writing the word, Second half (Page 2) is writing the numeral
      const isWordToNumber = i >= TOTAL / 2;
      newQuestions.push({ num, isWordToNumber });
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

  const numberToWords = (n: number) => {
    const ones = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    
    if (n < 20) return ones[n];
    if (n === 100) return 'One Hundred';
    
    const ten = Math.floor(n / 10);
    const one = n % 10;
    
    return tens[ten] + (one > 0 ? '-' + ones[one] : '');
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
      
      <h1>Number Names ({start}–{end})</h1>
      <p className="instructions">Write the number name or the numeral.</p>
      
      <div className="worksheet-grid-2">
        {questions.map((q, index) => (
          <div key={index} className="question-col-1">
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '320px', margin: '0 auto', gap: '15px' }}>
              {q.isWordToNumber ? (
                <>
                  <div style={{ flex: 1, fontSize: '18px', fontWeight: 600 }}>{numberToWords(q.num)}</div>
                  <span className="worksheet-box standalone">&nbsp;</span>
                </>
              ) : (
                <>
                  <span className="worksheet-box standalone">{q.num}</span>
                  <div style={{ flex: 1, borderBottom: '2px dashed #64748b', height: '2px', alignSelf: 'flex-end', marginBottom: '10px' }}></div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
