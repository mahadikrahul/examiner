import { useState, useEffect } from "react";

type ShapeType = 'circle' | 'square' | 'triangle' | 'rectangle';

const Shape = ({ type, size, color }: { type: ShapeType, size: number, color: string }) => {
  switch(type) {
    case 'circle':
      return <circle cx="0" cy="0" r={size/2} fill="white" stroke={color} strokeWidth="3" />;
    case 'square':
      return <rect x={-size/2} y={-size/2} width={size} height={size} fill="white" stroke={color} strokeWidth="3" />;
    case 'rectangle':
      return <rect x={-size} y={-size/2} width={size*2} height={size} fill="white" stroke={color} strokeWidth="3" />;
    case 'triangle':
      return <polygon points={`0,${-size/1.5} ${size/1.5},${size/1.5} ${-size/1.5},${size/1.5}`} fill="white" stroke={color} strokeWidth="3" />;
    default:
      return null;
  }
};

export default function Shapes() {
  const [questions, setQuestions] = useState<{shapes: {type: ShapeType, x: number, y: number, rot: number}[], counts: Record<ShapeType, number>}[]>([]);
  
  // Fit 4 large shape boxes per page. So 8 questions for 2 pages.
  const TOTAL = 6; 

  useEffect(() => {
    generateQuestions();
  }, []);

  const generateQuestions = () => {
    const randomInt = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const shapeTypes: ShapeType[] = ['circle', 'square', 'triangle', 'rectangle'];
    
    const newQuestions = [];
    for (let q = 0; q < TOTAL; q++) {
      const shapes = [];
      const counts: Record<ShapeType, number> = { circle: 0, square: 0, triangle: 0, rectangle: 0 };
      
      // 4 rows, 6 columns = 24 cells to place shapes in
      for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 6; col++) {
          // 80% chance to place a shape in this cell
          if (Math.random() > 0.2) {
            const type = shapeTypes[randomInt(0, 3)];
            counts[type]++;
            shapes.push({
              type,
              x: (col * 80) + 40 + randomInt(-10, 10), // Cell is 80x80, center is at 40
              y: (row * 80) + 40 + randomInt(-10, 10),
              rot: randomInt(-30, 30)
            });
          }
        }
      }
      newQuestions.push({ shapes, counts });
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
      
      <h1>Count the Shapes</h1>
      <p className="instructions">Count how many of each shape are in the box and write the number.</p>
      
      <div className="worksheet-grid-2" style={{ gap: '40px 20px' }}>
        {questions.map((q, index) => (
          <div key={index} className="question-col-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            {/* The scatter box */}
            <div style={{ width: '100%', height: '320px', border: '3px solid #000', borderRadius: '8px', overflow: 'hidden', position: 'relative', background: '#f8fafc' }}>
              <svg width="100%" height="100%" viewBox="0 0 480 320">
                {q.shapes.map((s, i) => (
                  <g key={i} transform={`translate(${s.x}, ${s.y}) rotate(${s.rot})`}>
                    <Shape type={s.type} size={30} color="#000" />
                  </g>
                ))}
              </svg>
            </div>
            
            {/* Answer Key */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '15px', padding: '0 10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="24" height="24" viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="none" stroke="#000" strokeWidth="3" /></svg>
                <span className="worksheet-box standalone small" style={{ width: '40px', height: '30px' }}></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="24" height="24" viewBox="0 0 40 40"><rect x="4" y="4" width="32" height="32" fill="none" stroke="#000" strokeWidth="3" /></svg>
                <span className="worksheet-box standalone small" style={{ width: '40px', height: '30px' }}></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="24" height="24" viewBox="0 0 40 40"><polygon points="20,4 36,36 4,36" fill="none" stroke="#000" strokeWidth="3" /></svg>
                <span className="worksheet-box standalone small" style={{ width: '40px', height: '30px' }}></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="24" height="24" viewBox="0 0 40 40"><rect x="2" y="10" width="36" height="20" fill="none" stroke="#000" strokeWidth="3" /></svg>
                <span className="worksheet-box standalone small" style={{ width: '40px', height: '30px' }}></span>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
