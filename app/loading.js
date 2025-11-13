export default function Loading() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#111",
      color: "#fff",
      fontSize: "2rem"
    }}>
      {/* Replace with your animation */}
      <div className="spinner">✨ Loading...</div>
    </div>
  );
}
