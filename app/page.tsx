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
      <h1 style={{ fontSize: 40, fontWeight: 700 }}>
        888 Poker Club
      </h1>

      <p style={{ marginTop: 10, fontSize: 18, opacity: 0.8 }}>
        Private ClubGG Poker Community
      </p>

      <a
        href="https://t.me/pokerclubgg888"
        style={{
          marginTop: 20,
          padding: "12px 20px",
          background: "#111",
          color: "#fff",
          borderRadius: 8,
          textDecoration: "none"
        }}
      >
        Join Telegram
      </a>
    </main>
  );
}