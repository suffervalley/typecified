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
          width="60"
          height="60"
          viewBox="0 0 130 130"
          fill="#2563eb"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M69.924 41.8327C70.8037 40.3895 70.6979 38.5524 69.6584 37.2197L40.6305 0.00552368L96.582 0.00552368C98.4479 0.00552368 100.211 0.860392 101.367 2.32543L126.22 33.8351C128.323 36.5018 128.546 40.1955 126.778 43.0957L101.586 84.4271C100.48 86.2419 98.508 87.3493 96.3826 87.3493L80.7741 87.3493L108.513 41.8395C109.395 40.3929 109.287 38.551 108.241 37.218L91.8 16.2555L73.8583 16.2555L87.6489 33.8385C89.7399 36.5046 89.9569 40.1884 88.1935 43.0816L60.0816 89.2025C59.2048 90.6411 59.3069 92.4717 60.3382 93.8039L88.3649 130.006L32.4268 130.006C30.5532 130.006 28.7838 129.144 27.6288 127.668L3.76199 97.1863C1.67469 94.5205 1.45934 90.8397 3.22152 87.9486L27.8057 47.6152C28.9119 45.8004 30.8837 44.693 33.0091 44.693L48.6175 44.693L21.4977 89.1864C20.616 90.633 20.7245 92.4749 21.7701 93.8079L37.4152 113.756L55.3571 113.756L42.3625 97.1874C40.2715 94.5213 40.0544 90.8375 41.8179 87.9443L69.924 41.8327Z" />
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
