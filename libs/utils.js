// utils/compression.js

import pako from "pako";

export function compressString(input) {
  const compressed = pako.deflate(input, { to: "string" });
  return compressed;
}

export function decompressString(compressed) {
  const decompressed = pako.inflate(compressed, { to: "string" });
  return decompressed;
}
