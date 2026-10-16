// 1. Variable Declarations
var oldVar = "I am function-scoped (avoid in modern JS)";
let dynamicScore = 50;        // Can be changed/reassigned
const maxScore = 100;         // Cannot be reassigned (constant)

// 2. Core Data Types & Operators
let playerName = "Alice";     // String
let currentScore = 85;        // Number
let hasWon = false;           // Boolean

// Arithmetic & Comparison Operators
let bonusPoints = 15;
let totalScore = currentScore + bonusPoints; // Arithmetic (+)
let isHighScore = totalScore >= maxScore;    // Comparison (>=)

// String Manipulation & Template Literals
let message = `Player ${playerName} achieved a total score of ${totalScore}. Win status: ${isHighScore}.`;

console.log(message);