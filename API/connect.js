import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sies", // ✅ ensure this is your actual MySQL password
  database: "mydevify_social", // ✅ ensure this DB exists
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err.message);
  } else {
    console.log("✅ Connected to MySQL database");
  }
});

// Optional: auto reconnect if connection drops
db.on("error", (err) => {
  console.error("⚠️ MySQL error:", err.code);
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    console.log("🔄 Reconnecting to MySQL...");
    db.connect();
  }
});
