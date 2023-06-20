function StringLength(Words) {
  if (typeof Words !== "string") {
    throw new Error("Input should be a string");
  }
  const String_lengths = Words.length;
  if (String_lengths < 1 || String_lengths > 10) {
    throw new Error("String length should be between 1 and 10 characters");
  }
  return String_lengths;
}

module.exports = StringLength;
