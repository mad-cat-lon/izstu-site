export default function CatDrawing() {
  return (
    <div className="cat-drawing">
      <svg 
        width="100" 
        height="100" 
        viewBox="0 0 100 100" 
        className="w-full h-full"
      >
        {/* Cat head */}
        <circle 
          cx="50" 
          cy="45" 
          r="25" 
          fill="#FFE4B5" 
          stroke="#333" 
          strokeWidth="2"
        />
        
        {/* Ears */}
        <polygon 
          points="35,25 30,15 40,20" 
          fill="#FFE4B5" 
          stroke="#333" 
          strokeWidth="2"
        />
        <polygon 
          points="65,25 70,15 60,20" 
          fill="#FFE4B5" 
          stroke="#333" 
          strokeWidth="2"
        />
        
        {/* Eyes */}
        <circle cx="42" cy="40" r="3" fill="#333" />
        <circle cx="58" cy="40" r="3" fill="#333" />
        
        {/* Nose */}
        <polygon 
          points="50,45 47,50 53,50" 
          fill="#FFB6C1" 
          stroke="#333" 
          strokeWidth="1"
        />
        
        {/* Mouth */}
        <path 
          d="M 47 50 Q 50 55 53 50" 
          fill="none" 
          stroke="#333" 
          strokeWidth="1"
        />
        
        {/* Whiskers */}
        <line x1="30" y1="45" x2="20" y2="43" stroke="#333" strokeWidth="1" />
        <line x1="30" y1="48" x2="20" y2="48" stroke="#333" strokeWidth="1" />
        <line x1="30" y1="51" x2="20" y2="53" stroke="#333" strokeWidth="1" />
        <line x1="70" y1="45" x2="80" y2="43" stroke="#333" strokeWidth="1" />
        <line x1="70" y1="48" x2="80" y2="48" stroke="#333" strokeWidth="1" />
        <line x1="70" y1="51" x2="80" y2="53" stroke="#333" strokeWidth="1" />
        
        {/* Body */}
        <ellipse 
          cx="50" 
          cy="75" 
          rx="20" 
          ry="15" 
          fill="#FFE4B5" 
          stroke="#333" 
          strokeWidth="2"
        />
        
        {/* Tail */}
        <path 
          d="M 70 75 Q 85 65 90 80 Q 95 95 85 85" 
          fill="none" 
          stroke="#333" 
          strokeWidth="2"
        />
      </svg>
    </div>
  );
} 