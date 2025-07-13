// History logic for history.html
document.addEventListener('DOMContentLoaded', () => {
  if (typeof quizzes === 'undefined') return;
  const historyList = document.getElementById('history-list');
  const history = JSON.parse(localStorage.getItem('quizHistory') || '{}');

  if (!history || Object.keys(history).length === 0) {
    historyList.innerHTML = '<p>No quiz attempts yet.</p>';
    return;
  }

  quizzes.forEach(quiz => {
    const attempts = history[quiz.id] || [];
    if (attempts.length === 0) return;
    const quizSection = document.createElement('section');
    quizSection.className = 'history-quiz-section';
    quizSection.innerHTML = `<h3>${quiz.title}</h3>`;
    const ul = document.createElement('ul');
    attempts.slice().reverse().forEach(attempt => {
      const li = document.createElement('li');
      const date = new Date(attempt.date);
      li.textContent = `${date.toLocaleString()} — Score: ${attempt.score} / ${attempt.total}`;
      ul.appendChild(li);
    });
    quizSection.appendChild(ul);
    historyList.appendChild(quizSection);
  });
});
