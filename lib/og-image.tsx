import { ImageResponse } from "next/og";

export const ogImageSize = {
  width: 1200,
  height: 630,
};

export const ogImageContentType = "image/png";

interface OGImageProps {
  title: string;
  description?: string;
  subtitle?: string;
}

export function generateOGImage({
  title,
  description,
  subtitle,
}: OGImageProps) {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "linear-gradient(to bottom, #000000, #111)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "80px",
          position: "relative",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 118 118"
          fill="white"
          width={60}
          height={60}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M67.1127 27.1213L48.8952 8.39672C37.7097 -2.7987 19.5745 -2.79871 8.38908 8.39671C-2.79636 19.5921 -2.79636 37.7435 8.38907 48.9389L15.5536 56.1099L23.4824 48.0942L16.3577 40.9632C9.57318 34.1726 9.57318 23.163 16.3577 16.3724C23.1422 9.58187 34.142 9.58188 40.9265 16.3724L59.316 35.2691L67.1127 27.1213Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50.098 90.2476L67.888 108.67C79.1719 120.35 97.4666 120.35 108.75 108.67C120.034 96.9898 117.562 78.4536 106.278 66.7736L101.799 62.1216L93.5331 70.2212L98.239 75.0945C105.083 82.179 107.556 93.2644 100.712 100.349C93.8675 107.433 82.7709 107.433 75.9267 100.349L58.3768 82.1608L50.098 90.2476Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M101.335 56.467L108.278 49.6251C119.551 38.5175 119.676 20.3827 108.558 9.12004C97.4407 -2.14262 79.2898 -2.26828 68.0172 8.83939L60.7968 15.9541L68.8904 23.807L75.9375 16.863C82.7749 10.1257 93.7843 10.2019 100.528 17.0332C107.271 23.8646 107.195 34.8642 100.358 41.6015L93.3247 48.5316L101.335 56.467Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.6783 61.4259L8.73487 68.2677C-2.53772 79.3753 -2.66326 97.5101 8.45446 108.773C19.5722 120.035 37.7231 120.161 48.9957 109.053L56.2161 101.939L48.1224 94.0858L41.0753 101.03C34.238 107.767 23.2286 107.691 16.4852 100.86C9.74172 94.0282 9.81787 83.0286 16.6552 76.2913L23.6882 69.3612L15.6783 61.4259Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M47.0629 30.059L26.2805 50.8414L18.0353 59.0867L26.2805 67.3319L47.0629 88.1143L55.3082 79.8691L34.5257 59.0867L55.3082 38.3042L47.0629 30.059Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M70.3084 30.059L91.0908 50.8414L99.3361 59.0867L91.0908 67.3319L70.3084 88.1143L62.0632 79.8691L82.8456 59.0867L62.0632 38.3042L70.3084 30.059Z"
          />
        </svg>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {subtitle && (
            <p
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: "#808080",
                marginBottom: 10,

                letterSpacing: "0.1em",
              }}
            >
              {subtitle}
            </p>
          )}
          <h1
            style={{
              fontSize: title.length > 50 ? 56 : 72,
              fontWeight: 900,
              marginBottom: 10,
              background: "linear-gradient(to right, #ffffff, #a0a0a0)",
              backgroundClip: "text",
              color: "transparent",
              maxWidth: 1000,
            }}
          >
            {title}
          </h1>
          {description && (
            <p
              style={{
                fontSize: 24,
                fontWeight: 300,
                color: "#808080",
                marginTop: 30,
                maxWidth: 800,
                lineHeight: 1.5,
              }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    ),
    {
      ...ogImageSize,
    }
  );
}
