// Load quizzes from data.js (assumes quizzes is in global scope)
document.addEventListener('DOMContentLoaded', () => {
  const quizList = document.getElementById('quiz-list');
  const quizCardsContainer = document.querySelector('.quiz-cards');

  if (typeof quizzes !== 'undefined' && quizCardsContainer) {
    quizCardsContainer.innerHTML = '';
    quizzes.forEach(quiz => {
      const card = document.createElement('div');
      card.className = 'quiz-card';
      card.tabIndex = 0;
      card.innerHTML = `
        <h3>${quiz.title}</h3>
        <button data-quiz-id="${quiz.id}">Start Quiz</button>
      `;
      card.querySelector('button').addEventListener('click', () => {
        window.location.href = `quiz.html?quiz=${quiz.id}`;
      });
      quizCardsContainer.appendChild(card);
    });
  }
});
