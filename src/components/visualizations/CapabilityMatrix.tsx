'use client';

import React, { useState } from 'react';

const industries = ['Finance', 'Healthcare', 'Manufacturing', 'Steel', 'Mining', 'IT'];
const capabilities = [
  'Executive Search',
  'RPO Solutions',
  'Permanent Hiring',
  'Contract Staffing',
  'Campus Hiring',
  'Tech & AI Hiring',
  'Global Mobility'
];

// Mock matrix data (true means strong capability in that intersection)
const matrixData: Record<string, boolean[]> = {
  'Executive Search': [true, true, true, true, true, true],
  'RPO Solutions': [true, true, true, false, false, true],
  'Permanent Hiring': [true, true, true, true, true, true],
  'Contract Staffing': [true, true, false, false, false, true],
  'Campus Hiring': [true, false, true, true, true, true],
  'Tech & AI Hiring': [true, true, true, false, false, true],
  'Global Mobility': [true, true, true, true, false, true],
};

export function CapabilityMatrix() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto pb-8">
      <div className="min-w-[800px]">
        
        {/* Header Row (Industries) */}
        <div className="flex mb-4">
          <div className="w-48 shrink-0"></div> {/* Empty corner */}
          {industries.map((ind, colIdx) => (
            <div 
              key={ind} 
              className={`flex-1 text-center text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                hoveredCol === colIdx ? 'text-corponizers-blue' : 'text-blue-950/60'
              }`}
            >
              {ind}
            </div>
          ))}
        </div>

        {/* Matrix Rows (Capabilities) */}
        <div className="space-y-1">
          {capabilities.map((cap, rowIdx) => {
            const isRowHovered = hoveredRow === rowIdx;
            
            return (
              <div 
                key={cap} 
                className={`flex items-center rounded-sm transition-colors duration-200 ${
                  isRowHovered ? 'bg-sky-50' : 'bg-transparent'
                }`}
                onMouseEnter={() => setHoveredRow(rowIdx)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                {/* Row Header (Capability) */}
                <div 
                  className={`w-48 shrink-0 py-4 pl-4 text-sm font-black tracking-tight transition-colors duration-300 ${
                    isRowHovered ? 'text-blue-950' : 'text-blue-900/70'
                  }`}
                >
                  {cap}
                </div>

                {/* Data Cells */}
                {industries.map((_, colIdx) => {
                  const isColHovered = hoveredCol === colIdx;
                  const isCellHovered = isRowHovered && isColHovered;
                  const hasCapability = matrixData[cap][colIdx];
                  
                  return (
                    <div 
                      key={colIdx} 
                      className={`flex-1 py-4 flex justify-center items-center transition-colors duration-200 cursor-crosshair ${
                        isColHovered && !isRowHovered ? 'bg-sky-50/50' : ''
                      } ${isCellHovered ? 'bg-sky-100' : ''}`}
                      onMouseEnter={() => setHoveredCol(colIdx)}
                      onMouseLeave={() => setHoveredCol(null)}
                    >
                      {hasCapability ? (
                        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          isCellHovered ? 'bg-sky-500 scale-150' : 'bg-sky-200'
                        }`}></div>
                      ) : (
                        <div className="w-1 h-1 rounded-full bg-slate-200"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
