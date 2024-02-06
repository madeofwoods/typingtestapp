const FiltersSVG = () => {
  return (
    <defs>
      {/* Skin1 */}
      <linearGradient id="skin1_1" x1="1555" y1="379.5" x2="790" y2="476" gradientUnits="userSpaceOnUse">
        <stop offset="0.0289673" stopColor="#1F1F1F" />
        <stop offset="1" stopColor="#242424" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="skin1_2" x1="1492" y1="121" x2="777.5" y2="592" gradientUnits="userSpaceOnUse">
        <stop offset="0.0829187" stopColor="#CC00FF" />
        <stop offset="1" stopColor="#EB00FF" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="skin1_3" x1="-260.5" y1="531" x2="332" y2="295.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#a073c3" />
        <stop offset="1" stopColor="#242424" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="skin1_4" x1="-96.5" y1="375.5" x2="718.5" y2="350" gradientUnits="userSpaceOnUse">
        <stop offset="0.0829187" stopColor="#743DB9" />
        <stop offset="1" stopColor="#EB00FF" stopOpacity="0" />
      </linearGradient>
      {/* Skin2 */}
      <linearGradient id="skin2_1" x1="501.5" y1="141" x2="501.459" y2="37.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F31DEA" />
        <stop offset="0.468154" stopColor="#a74fff" stopOpacity="0.79" />
        <stop offset="1" stopColor="#df80ff" stopOpacity="0" />
      </linearGradient>
      <filter
        id="skin2Filter"
        x="-988.025"
        y="-980.463"
        width="3469.19"
        height="2684.36"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="500" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_102_8" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_102_8" result="shape" />
      </filter>
      <linearGradient id="skin2_2" x1="38.5" y1="402.154" x2="734.212" y2="526.969" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3E3D3D" />
        <stop offset="1" stopColor="#3E3D3D" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="skin2_3" x1="-356" y1="908.46" x2="698.209" y2="374.396" gradientUnits="userSpaceOnUse">
        <stop offset="0.353463" stopColor="#FF01D6" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="skin2_4" x1="1453" y1="304.513" x2="631.497" y2="302.045" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3E3D3D" />
        <stop offset="1" stopColor="#3E3D3D" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="skin2_5" x1="1492" y1="635.161" x2="1210.52" y2="313.186" gradientUnits="userSpaceOnUse">
        <stop offset="0.353463" stopColor="#8001FF" />
        <stop offset="0.841638" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0.0408604" stopColor="#dc4eff" />
        <stop offset="0.436563" stopColor="#DD2FCD" />
        <stop offset="1" stopColor="#3827FF" />
      </linearGradient>
      <linearGradient id="accGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0.0408604" stopColor="#e6deff" />
        <stop offset="0.436563" stopColor="#a795cb" />
        <stop offset="1" stopColor="#dec5ff" />
      </linearGradient>
      <linearGradient id="errorGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0.0408604" stopColor="#e65151" />
        <stop offset="0.436563" stopColor="#dd402f" />
        <stop offset="1" stopColor="#ff0000" />
      </linearGradient>
      <filter id="f1" x="0" y="0" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_10_2" />
      </filter>
    </defs>
  );
};

export default FiltersSVG;
