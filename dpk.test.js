const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  test('should return "0" when no event is provided', () => {
    expect(deterministicPartitionKey()).toBe("0");
  });

  test("should return the provided partition key if it exists", () => {
    const event = { partitionKey: "my-partition-key" };
    expect(deterministicPartitionKey(event)).toBe("my-partition-key");
  });

  test("should return a hash of the event if no partition key is provided", () => {
    const event = { data: "my-data" };
    const hash = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(event))
      .digest("hex");

    expect(deterministicPartitionKey(event)).toBe(hash);
  });

  test("should return a hash of the candidate if its length exceeds the maximum", () => {
    const longString = "x".repeat(500);
    const hash = crypto.createHash("sha3-512").update(longString).digest("hex");

    expect(deterministicPartitionKey({ data: longString })).toBe(hash);
  });
});
