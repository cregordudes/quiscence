export const types = [
  "sleep",
  "healthiness",
  "satisfaction",
  "depression",
  "passivness",
  "emptiness",
  "anxiety",
];

//score == -10 bad, 0 needs consultation, 5 good, 10 exeptional

export const questions = [
  {
    text: "Как хорошо вы спите?",
    options: [
      { id: 0, text: "Хорошо", type: "sleep", score: 2 },
      { id: 1, text: "Нормально", type: "sleep", score: 1 },
      { id: 2, text: "Средне", type: "sleep", score: 0 },
      { id: 3, text: "Не очень", type: "sleep", score: -1 },
      { id: 4, text: "Плохо", type: "sleep", score: -2 },
    ],
  },
  {
    text: "What year was the Constitution of America written?",
    options: [
      { id: 0, text: "Хорошо", type: "healthiness", score: 2 },
      { id: 1, text: "Нормально", type: "healthiness", score: 1 },
      { id: 2, text: "Средне", type: "healthiness", score: 0 },
      { id: 3, text: "Не очень", type: "healthiness", score: -1 },
      { id: 4, text: "Плохо", type: "healthiness", score: -2 },
    ],
  },
  {
    text: "Who was the second president of the US?",
    options: [
      { id: 0, text: "Хорошо", type: "satisfaction", score: 2 },
      { id: 1, text: "Нормально", type: "satisfaction", score: 1 },
      { id: 2, text: "Средне", type: "satisfaction", score: 0 },
      { id: 3, text: "Не очень", type: "satisfaction", score: -1 },
      { id: 4, text: "Плохо", type: "satisfaction", score: -2 },
    ],
  },
  {
    text: "What is the largest state in the US?",
    options: [
      { id: 0, text: "Хорошо", type: "depression", score: 2 },
      { id: 1, text: "Нормально", type: "depression", score: 1 },
      { id: 2, text: "Средне", type: "depression", score: 0 },
      { id: 3, text: "Не очень", type: "depression", score: -1 },
      { id: 4, text: "Плохо", type: "depression", score: -2 },
    ],
  },
  {
    text: "Which of the following countries DO NOT border the US?",
    options: [
      { id: 0, text: "Хорошо", type: "passivness", score: 2 },
      { id: 1, text: "Нормально", type: "passivness", score: 1 },
      { id: 2, text: "Средне", type: "passivness", score: 0 },
      { id: 3, text: "Не очень", type: "passivness", score: -1 },
      { id: 4, text: "Плохо", type: "passivness", score: -2 },
    ],
  },
];
