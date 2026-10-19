type CodeToken = {
  text: string;
  kind?: "keyword" | "property" | "string" | "bracket";
};

export const developerCode: { id: string; tokens: CodeToken[] }[] = [
  {
    id: "declaration",
    tokens: [
      { text: "const", kind: "keyword" },
      { text: " developer", kind: "property" },
      { text: " = " },
      { text: "{", kind: "bracket" },
    ],
  },
  {
    id: "name",
    tokens: [
      { text: "  name", kind: "property" },
      { text: ": " },
      { text: "'Thomas Vaugeois'", kind: "string" },
      { text: "," },
    ],
  },
  {
    id: "role",
    tokens: [
      { text: "  role", kind: "property" },
      { text: ": " },
      { text: "'Développeur web junior'", kind: "string" },
      { text: "," },
    ],
  },
  {
    id: "mindset",
    tokens: [
      { text: "  mindset", kind: "property" },
      { text: ": " },
      { text: "'Toujours apprendre'", kind: "string" },
    ],
  },
  {
    id: "closing",
    tokens: [{ text: "}", kind: "bracket" }, { text: ";" }],
  },
];
