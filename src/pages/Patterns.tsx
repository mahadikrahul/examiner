import { useState, useEffect } from "react";

type ShapeType = 'circle' | 'square' | 'triangle' | 'rectangle';

const Shape = ({ type, size, color }: { type: ShapeType, size: number, color: string }) => {
  switch(type) {
    case 'circle':
      return <circle cx={size/2} cy={size/2} r={size/2 - 2} fill="white" stroke={color} strokeWidth="3" />;
    case 'square':
      return <rect x="2" y="2" width={size-4} height={size-4} fill="white" stroke={color} strokeWidth="3" />;
    case 'rectangle':
      return <rect x="2" y={size/4} width={size-4} height={size/2} fill="white" stroke={color} strokeWidth="3" />;
    case 'triangle':
      return <polygon points={`${size/2},2 ${size-2},${size-2} 2,${size-2}`} fill="white" stroke={color} strokeWidth="3" />;
    default:
      return null;
  }
};

export default function Patterns() {
  const [questions, setQuestions] = useState<{sequence: ShapeType[]}[]>([]);
  const TOTAL = 24; // 12 rows per page = 24 rows for 2 pages. Since it's a single column layout, 24 rows total.

  useEffect(() => {
    generateQuestions();
  }, []);

  const generateQuestions = () => {
    const randomInt = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const shapeTypes: ShapeType[] = ['circle', 'square', 'triangle', 'rectangle'];
    
    const newQuestions = [];
    for (let i = 0; i < TOTAL; i++) {
      // Pick 2 or 3 distinct shapes for the pattern
      const pool = [...shapeTypes].sort(() => Math.random() - 0.5);
      const A = pool[0];
      const B = pool[1];
      const C = pool[2];
      
      const patternTypes = [
        [A, B, A, B, A, B], // ABAB
        [A, A, B, A, A, B], // AABAAB
        [A, B, B, A, B, B], // ABBABBA
        [A, B, C, A, B, C], // ABCABC
      ];
      
      const sequence = patternTypes[randomInt(0, patternTypes.length - 1)];
      newQuestions.push({ sequence });
    }
    setQuestions(newQuestions);
  };

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
      
      <h1>Complete the Pattern</h1>
      <p className="instructions">Look at the pattern and draw the next two shapes.</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '35px', padding: '0 20px', marginTop: '30px' }}>
        {questions.map((q, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '15px', width: '100%', justifyContent: 'space-between', paddingBottom: '15px', borderBottom: index < questions.length - 1 ? '1px dashed #cbd5e1' : 'none' }}>
            
            <div style={{ display: 'flex', gap: '15px' }}>
              {q.sequence.map((shape, i) => (
                <svg key={i} width="40" height="40" viewBox="0 0 40 40">
                  <Shape type={shape} size={40} color="#000" />
                </svg>
              ))}
            </div>
            
            <div style={{ display: 'flex', gap: '15px', flex: 1, justifyContent: 'flex-start', marginLeft: '30px' }}>
              <div style={{ width: '40px', borderBottom: '2px solid #000' }}></div>
              <div style={{ width: '40px', borderBottom: '2px solid #000' }}></div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
