const WaveDivider = ({ topColor, bottomColor }) => {
  // Wave ke top ka curve
  const waveTop =
    "M0,160L20,149.3C40,139,80,117,120,133.3C160,149,200,203,240,186.7C280,171,320,85,360,90.7C400,96,440,192,480,245.3C520,299,560,309,600,277.3C640,245,680,171,720,170.7C760,171,800,245,840,245.3C880,245,920,171,960,160C1000,149,1040,203,1080,234.7C1120,267,1160,277,1200,240C1240,203,1280,117,1320,96C1360,75,1400,117,1420,138.7L1440,160";

  return (
    <div style={{ backgroundColor: topColor }} className="relative h-40">
      <svg
        className="absolute bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        {/* Fill */}
        <path fill={bottomColor} d={`${waveTop}L1440,320L0,320Z`} />

        {/* Stroke only on top wave */}
        <path d={waveTop} fill="none" stroke="#000000" strokeWidth="5" />
      </svg>
    </div>
  );
};

export default WaveDivider;
