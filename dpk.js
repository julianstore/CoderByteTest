const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  // Determine the candidate partition key.
  let candidate =
    event?.partitionKey ||
    crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex") ||
    TRIVIAL_PARTITION_KEY;

  // Ensure that the candidate is a string.
  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  // Truncate the candidate if it exceeds the maximum length.
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate;
};
