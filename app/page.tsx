export default function Page() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "system-ui",
      textAlign: "center",
      padding: 24
    }}>
      <h1 style={{ fontSize: 44, fontWeight: 800 }}>
        888 Poker Club
      </h1>

      <p style={{ marginTop: 12, fontSize: 18, opacity: 0.7 }}>
        Private ClubGG Poker Community
      </p>

      <a
        href="https://t.me/pokerclubgg888"
        style={{
          marginTop: 24,
          padding: "12px 18px",
          borderRadius: 8,
          background: "#111",
          color: "white",
          textDecoration: "none"
        }}
      >
        Join Telegram
      </a>
    </main>
  );
}
