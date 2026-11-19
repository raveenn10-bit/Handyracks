import React from "react";

interface TechnicalDiagramProps {
  type:
    | "floating-shelf"
    | "ledge-shelf"
    | "cubicle-shelf"
    | "honeycomb-shelf"
    | "corner-shelf"
    | "foldable-table"
    | "handy-shelf";
}

export default function TechnicalDiagram({ type }: TechnicalDiagramProps) {
  return (
    <div className="bg-warm-ivory border border-soft-beige p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-natural-oak mb-3">
        Reference Dimensional Diagram
      </p>
      {type === "floating-shelf" && (
        <svg viewBox="0 0 360 150" className="w-full max-w-sm h-auto text-charcoal">
          <rect
            x="40"
            y="45"
            width="240"
            height="28"
            fill="#E8DFD2"
            stroke="#242824"
            strokeWidth="1.5"
          />
          <line x1="40" y1="25" x2="280" y2="25" stroke="#B88B5D" strokeWidth="1.2" />
          <text x="160" y="18" textAnchor="middle" fontSize="11" fill="#242824">
            Lengths: 40 / 60 / 80 / 100 / 120 cm
          </text>
          <line x1="298" y1="45" x2="298" y2="73" stroke="#B88B5D" strokeWidth="1.2" />
          <text x="306" y="63" fontSize="11" fill="#242824">
            3.6 cm
          </text>
          <text x="160" y="102" textAnchor="middle" fontSize="11" fill="#555">
            Reference Depth: 24 cm (Melamine Coated MDF)
          </text>
        </svg>
      )}

      {type === "ledge-shelf" && (
        <svg viewBox="0 0 360 150" className="w-full max-w-sm h-auto text-charcoal">
          <path
            d="M80 35 L95 35 L95 90 L220 90 L220 68 L235 68 L235 105 L80 105 Z"
            fill="#E8DFD2"
            stroke="#242824"
            strokeWidth="1.5"
          />
          <text x="160" y="128" textAnchor="middle" fontSize="11" fill="#242824">
            Overall Depth: 14.5 cm | Inner Depth: 11.5 cm | Height: 6 cm
          </text>
          <text x="160" y="22" textAnchor="middle" fontSize="11" fill="#555">
            Lengths: 60 / 80 / 100 cm
          </text>
        </svg>
      )}

      {type === "cubicle-shelf" && (
        <svg viewBox="0 0 300 150" className="w-full max-w-xs h-auto text-charcoal">
          <rect
            x="90"
            y="25"
            width="95"
            height="95"
            fill="none"
            stroke="#242824"
            strokeWidth="8"
          />
          <text x="137" y="140" textAnchor="middle" fontSize="11" fill="#242824">
            35 cm W × 35 cm H × 10 cm D
          </text>
        </svg>
      )}

      {type === "honeycomb-shelf" && (
        <svg viewBox="0 0 300 150" className="w-full max-w-xs h-auto text-charcoal">
          <polygon
            points="115,25 185,25 215,75 185,125 115,125 85,75"
            fill="#E8DFD2"
            stroke="#242824"
            strokeWidth="2"
          />
          <text x="150" y="78" textAnchor="middle" fontSize="11" fill="#242824">
            ~35 × 30 cm
          </text>
          <text x="150" y="143" textAnchor="middle" fontSize="10" fill="#555">
            1.6 cm thick | 3 kg ref. load
          </text>
        </svg>
      )}

      {type === "corner-shelf" && (
        <svg viewBox="0 0 300 150" className="w-full max-w-xs h-auto text-charcoal">
          <path
            d="M90 30 L90 120 L180 120 A90 90 0 0 0 90 30 Z"
            fill="#E8DFD2"
            stroke="#242824"
            strokeWidth="1.8"
          />
          <text x="155" y="140" textAnchor="middle" fontSize="11" fill="#242824">
            30×30 / 38×38 / 45×45 cm (18 mm)
          </text>
        </svg>
      )}

      {type === "foldable-table" && (
        <svg viewBox="0 0 320 150" className="w-full max-w-xs h-auto text-charcoal">
          <rect x="60" y="35" width="200" height="16" fill="#E8DFD2" stroke="#242824" strokeWidth="1.5" />
          <line x1="85" y1="51" x2="85" y2="115" stroke="#242824" strokeWidth="3" />
          <line x1="85" y1="95" x2="145" y2="51" stroke="#242824" strokeWidth="2" />
          <text x="160" y="138" textAnchor="middle" fontSize="11" fill="#242824">
            60×40 cm &amp; 80 cm Width Versions
          </text>
        </svg>
      )}

      {type === "handy-shelf" && (
        <svg viewBox="0 0 300 160" className="w-full max-w-xs h-auto text-charcoal">
          <rect x="142" y="15" width="16" height="125" fill="#B88B5D" stroke="#242824" strokeWidth="1.2" />
          <rect x="85" y="30" width="57" height="7" fill="#E8DFD2" stroke="#242824" strokeWidth="1" />
          <rect x="158" y="50" width="57" height="7" fill="#E8DFD2" stroke="#242824" strokeWidth="1" />
          <rect x="85" y="75" width="57" height="7" fill="#E8DFD2" stroke="#242824" strokeWidth="1" />
          <rect x="158" y="100" width="57" height="7" fill="#E8DFD2" stroke="#242824" strokeWidth="1" />
          <text x="150" y="154" textAnchor="middle" fontSize="11" fill="#242824">
            Reference Height: 180 cm
          </text>
        </svg>
      )}
    </div>
  );
}
