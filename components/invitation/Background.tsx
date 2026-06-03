"use client";

/**
 * WatercolorBackground Component
 *
 * Reusable watercolor/marble texture background.
 * idPrefix — wajib pass kalau lebih dari satu instance dalam DOM
 * supaya SVG filter id tidak clash.
 *
 * Usage:
 * <WatercolorBackground idPrefix="cover" />
 * <WatercolorBackground idPrefix="content" />
 */

type Props = {
  idPrefix?: string;
};

export default function WatercolorBackground({ idPrefix = "wc" }: Props) {
  const id = {
    cloud:  `${idPrefix}-cloud`,
    cloud2: `${idPrefix}-cloud2`,
    cloud3: `${idPrefix}-cloud3`,
  };

  return (
    <div className="absolute inset-0" style={{ backgroundColor: "#fdf6f0" }}>

      {/* Watercolor cloud patches */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id={id.cloud} x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.018 0.022"
              numOctaves="5"
              seed="8"
              result="turb"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turb"
              scale="28"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feGaussianBlur stdDeviation="22" />
          </filter>

          <filter id={id.cloud2} x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02 0.015"
              numOctaves="4"
              seed="14"
              result="turb"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turb"
              scale="22"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feGaussianBlur stdDeviation="26" />
          </filter>

          <filter id={id.cloud3} x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015 0.025"
              numOctaves="3"
              seed="21"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turb"
              scale="18"
              xChannelSelector="G"
              yChannelSelector="R"
            />
            <feGaussianBlur stdDeviation="20" />
          </filter>
        </defs>

        {/* Patch atas */}
        <ellipse
          cx="38%" cy="18%" rx="52%" ry="38%"
          fill="rgba(220, 200, 185, 0.28)"
          filter={`url(#${id.cloud})`}
        />
        {/* Patch tengah kanan */}
        <ellipse
          cx="72%" cy="45%" rx="40%" ry="30%"
          fill="rgba(215, 195, 178, 0.22)"
          filter={`url(#${id.cloud2})`}
        />
        {/* Patch kiri tengah */}
        <ellipse
          cx="22%" cy="58%" rx="38%" ry="32%"
          fill="rgba(225, 208, 192, 0.2)"
          filter={`url(#${id.cloud3})`}
        />
        {/* Patch bawah */}
        <ellipse
          cx="55%" cy="85%" rx="55%" ry="28%"
          fill="rgba(230, 210, 195, 0.25)"
          filter={`url(#${id.cloud})`}
        />
        {/* Patch kecil atas kanan */}
        <ellipse
          cx="85%" cy="12%" rx="28%" ry="20%"
          fill="rgba(210, 190, 172, 0.18)"
          filter={`url(#${id.cloud2})`}
        />
      </svg>

      {/* Soft blush overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 65% 40% at 88% 8%, rgba(240, 210, 195, 0.35) 0%, transparent 70%),
            radial-gradient(ellipse 55% 35% at 10% 92%, rgba(238, 208, 190, 0.3) 0%, transparent 70%),
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 80%)
          `,
        }}
      />
    </div>
  );
}