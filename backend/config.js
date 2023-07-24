import crypto from "crypto";

// Menghasilkan kunci rahasia secara acak
const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");
  return secretKey;
};

// Konfigurasi aplikasi
const config = {
  secretKey: generateSecretKey(),
  port: 5000,
  // tambahkan konfigurasi lainnya
};

export default config;
