import "dotenv/config";

const CONFIG = {
  db: process.env.DB,
  jwt_private: `-----BEGIN RSA PRIVATE KEY-----
  MIICXAIBAAKBgGA4UA/ocq6N/koG1/EkBjIDI3HantOxGP+ILEugmxJywAAzLoDc
  paPBdmnXEXsPGFNVh8bZpoIFg2tfCr/iqdoNiU8RmBj3uOze5xvkMn0l+8xqB4aZ
  qrzBFeoK0+WI9tPijRXYk89C/OF0pLvRSBecmzJv6znFV5KR8nnLwY/bAgMBAAEC
  gYAJXrJ9Oheg4/b1YoE43Fc2G5QiDDYXS1Gx4KLfon43Z7FG07Udm18N+VL8r5Lm
  NuwZgWS9eoh6dOr9U74KPZpooPWsFoEMxZqzGahkCAj4fgNXB3XOqBDdYkJ9r2Ne
  hSqhjq/1gfdF7t/K4FRaxakCIOqHEknvas2SftZXRtWvUQJBAKaUMqcJkqi+3s1b
  63nk4T9MKuiNDmdHMHT+cbi3KEOHSheU1SbcepahsyMmlD8Oys6bz865MeH9yhsv
  nB2XFi8CQQCT3yrZixqelPFA0SiJOuUwGWgcwv0iw5mmWb0UN0w2OhQ1m+e6G8b9
  J4aPx1s8ZCYjknB52DCc9AE/Sq7xHaIVAkEApUzmvs9HE+Dko5CVqY4w32ksIzzm
  kCIaud5M52oJsIkuQxxUMI4VsCih5T3BWpnJMyF3I8Ku932q8zNZjhuBzQJANKam
  lDUCcmqoCCMxIsO0rU6ukmcfSMyKnf+f4l3aJgjB/2CWvt57GNKFCBa8tqEWL15J
  7Ch9DrWW6BlIdxPNDQJBAIUN552nrG1sNSqZbYDMavoi5LBUK9OBbB9Ge4HSQccZ
  +K1vPCJeruBKhT7GUwsT8u1oZlDIV5BVgMIpUX1frho=
  -----END RSA PRIVATE KEY-----`,
};

export default CONFIG;