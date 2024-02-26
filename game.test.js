const { describe, it, expect } = require('jest');

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Text Makeup Language",
    ],
    answer: 0,
  },
  {
    question:
      "Which of the following tags is used to create a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>", "<ul>"],
    answer: 0,
  },
  // Add more questions here
];

describe('Game Questions', () => {
  it('should have the correct number of questions', () => {
    expect(questions.length).toBe(2); // Update the expected value based on the number of questions
  });

  it('should have the correct structure for each question', () => {
    questions.forEach((question) => {
      expect(question).toHaveProperty('question');
      expect(question).toHaveProperty('options');
      expect(question).toHaveProperty('answer');
    });
  });

  // Add more tests here
});