// Utility functions for localStorage quiz history
function getHistory() {
  return JSON.parse(localStorage.getItem('quizHistory') || '{}');
}

function saveHistory(history) {
  localStorage.setItem('quizHistory', JSON.stringify(history));
}

function clearHistory() {
  localStorage.removeItem('quizHistory');
}

// Export for use in other scripts (if using modules)
// export { getHistory, saveHistory, clearHistory };
