const WIDTH = 1080;
const HEIGHT = 1080;

export default function Home() {
  return (
    <main className="page" style={{ minHeight: '100vh' }}>
      <div className="canvas-wrapper" aria-hidden="true">
        <svg
          className="greeting-art"
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          <title>मकर संक्रांतीच्या खूप खूप शुभेच्छा</title>
          <desc>
            Festive Marathi greeting card for Makar Sankranti with kites, sesame laddoos,
            floral borders, and glowing golden typography on a clear blue sky backdrop.
          </desc>
          <defs>
            <linearGradient id="skyGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#b3e5fc" />
              <stop offset="45%" stopColor="#81d4fa" />
              <stop offset="100%" stopColor="#4fc3f7" />
            </linearGradient>
            <radialGradient id="sunGlow" cx="0.5" cy="0.25" r="0.6">
              <stop offset="0%" stopColor="#fff9c4" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#fff176" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#ffb74d" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="ladooGradient" cx="0.35" cy="0.35" r="0.75">
              <stop offset="0%" stopColor="#ffecb3" />
              <stop offset="40%" stopColor="#ffb74d" />
              <stop offset="100%" stopColor="#f57c00" />
            </radialGradient>
            <radialGradient id="textGradient" cx="0.5" cy="0.4" r="0.85">
              <stop offset="0%" stopColor="#fff4c2" />
              <stop offset="45%" stopColor="#ffd54f" />
              <stop offset="100%" stopColor="#fb8c00" />
            </radialGradient>
            <linearGradient id="borderGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffecb3" />
              <stop offset="50%" stopColor="#ffca28" />
              <stop offset="100%" stopColor="#f57f17" />
            </linearGradient>
            <filter id="textGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="12" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="16" result="blur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.5" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <pattern id="floralPattern" patternUnits="userSpaceOnUse" width="120" height="120">
              <g opacity="0.35" fill="none" stroke="#ffcc80" strokeWidth="3">
                <path d="M60 10 C75 25 90 40 90 60 C90 80 75 95 60 110" />
                <path d="M60 10 C45 25 30 40 30 60 C30 80 45 95 60 110" />
                <circle cx="60" cy="60" r="16" />
              </g>
            </pattern>
          </defs>

          <rect width={WIDTH} height={HEIGHT} fill="url(#skyGradient)" />
          <rect width={WIDTH} height={HEIGHT} fill="url(#sunGlow)" />

          <g filter="url(#softGlow)">
            <rect
              x="70"
              y="70"
              width={WIDTH - 140}
              height={HEIGHT - 140}
              rx="32"
              ry="32"
              fill="rgba(255, 255, 255, 0.06)"
              stroke="url(#borderGradient)"
              strokeWidth="12"
            />
            <rect
              x="90"
              y="90"
              width={WIDTH - 180}
              height={HEIGHT - 180}
              rx="26"
              ry="26"
              fill="url(#floralPattern)"
            />
          </g>

          <g opacity="0.55">
            <path
              d="M180 280 C210 240 260 210 320 210 C380 210 420 240 460 280"
              stroke="#ffffff"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M640 220 C680 180 740 170 790 200 C840 230 880 290 890 350"
              stroke="#e1f5fe"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          <g className="kites">
            <g transform="translate(250 260) rotate(-8)">
              <polygon points="0,0 90,0 45,60" fill="#ff7043" stroke="#ffab91" strokeWidth="4" />
              <polygon points="45,60 90,120 0,120" fill="#ffa726" stroke="#ffcc80" strokeWidth="4" />
              <line x1="45" y1="120" x2="45" y2="220" stroke="#6d4c41" strokeWidth="4" strokeLinecap="round" />
              <path d="M45 220 C30 250 20 270 40 300" stroke="#8d6e63" strokeWidth="4" fill="none" />
            </g>
            <g transform="translate(770 320) rotate(12)">
              <polygon points="0,0 90,0 45,60" fill="#ff8f00" stroke="#ffe082" strokeWidth="4" />
              <polygon points="45,60 90,120 0,120" fill="#ffca28" stroke="#fff3e0" strokeWidth="4" />
              <line x1="45" y1="120" x2="45" y2="235" stroke="#5d4037" strokeWidth="4" strokeLinecap="round" />
              <path d="M45 235 C60 260 80 290 70 320" stroke="#795548" strokeWidth="4" fill="none" />
            </g>
            <g transform="translate(510 170) rotate(-4) scale(0.7)">
              <polygon points="0,0 90,0 45,60" fill="#ec407a" stroke="#f48fb1" strokeWidth="5" />
              <polygon points="45,60 90,120 0,120" fill="#ab47bc" stroke="#ce93d8" strokeWidth="5" />
              <line x1="45" y1="120" x2="45" y2="230" stroke="#4e342e" strokeWidth="5" strokeLinecap="round" />
              <path d="M45 230 C20 260 30 290 55 320" stroke="#6d4c41" strokeWidth="5" fill="none" />
            </g>
          </g>

          <g className="laddoos">
            <g transform="translate(260 780)">
              <circle cx="0" cy="0" r="72" fill="url(#ladooGradient)" />
              <circle cx="-40" cy="-40" r="8" fill="#ffe0b2" opacity="0.85" />
              <circle cx="30" cy="-35" r="10" fill="#ffe0b2" opacity="0.7" />
              <circle cx="15" cy="45" r="9" fill="#ffe0b2" opacity="0.6" />
            </g>
            <g transform="translate(360 860)">
              <circle cx="0" cy="0" r="58" fill="url(#ladooGradient)" />
              <circle cx="-25" cy="-30" r="8" fill="#ffe0b2" opacity="0.6" />
              <circle cx="22" cy="-20" r="7" fill="#ffe0b2" opacity="0.65" />
            </g>
            <g transform="translate(820 810)">
              <circle cx="0" cy="0" r="68" fill="url(#ladooGradient)" />
              <circle cx="-30" cy="-35" r="9" fill="#ffe0b2" opacity="0.75" />
              <circle cx="18" cy="-25" r="8" fill="#ffe0b2" opacity="0.7" />
              <circle cx="5" cy="32" r="7" fill="#ffe0b2" opacity="0.55" />
            </g>
          </g>

          <g filter="url(#textGlow)">
            <text
              x="540"
              y="540"
              textAnchor="middle"
              fontSize="132"
              fill="url(#textGradient)"
              letterSpacing="4"
            >
              मकर संक्रांतीच्या
            </text>
            <text
              x="540"
              y="660"
              textAnchor="middle"
              fontSize="118"
              fill="url(#textGradient)"
              letterSpacing="4"
            >
              खूप खूप शुभेच्छा
            </text>
          </g>

          <g opacity="0.7">
            <path
              d="M120 200 Q 170 140 260 120"
              stroke="#ffecb3"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M880 220 Q 930 180 960 160"
              stroke="#ffe082"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M200 940 Q 540 880 880 940"
              stroke="#ffe082"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
      <p className="sr-only">
        मकर संक्रांतीच्या खूप खूप शुभेच्छा. शानदार आकाशात उडणाऱ्या पतंगांसह आणि तिळाच्या
        लाडूंनी सजलेली ही शुभेच्छा तुमच्या सामाजिक माध्यमांवर वाटण्यासाठी तयार आहे.
      </p>
    </main>
  );
}
