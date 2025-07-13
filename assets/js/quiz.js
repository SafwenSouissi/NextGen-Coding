// Quiz logic for quiz.html
function getQuizIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('quiz');
}

function saveQuizResult(quizId, score, total) {
  const history = JSON.parse(localStorage.getItem('quizHistory') || '{}');
  if (!history[quizId]) history[quizId] = [];
  history[quizId].push({
    date: new Date().toISOString(),
    score,
    total
  });
  localStorage.setItem('quizHistory', JSON.stringify(history));
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof quizzes === 'undefined') return;
  const quizId = getQuizIdFromUrl();
  const quiz = quizzes.find(q => q.id === quizId);
  if (!quiz) {
    document.getElementById('quiz-container').innerHTML = '<p>Quiz not found.</p>';
    return;
  }

  let current = 0;
  let score = 0;
  let selected = null;

  const quizTitle = document.getElementById('quiz-title');
  const progress = document.getElementById('progress');
  const questionDiv = document.getElementById('question');
  const choicesForm = document.getElementById('choices');
  const nextBtn = document.getElementById('next-btn');
  const submitBtn = document.getElementById('submit-btn');
  const resultDiv = document.getElementById('quiz-result');
  const restartDiv = document.getElementById('quiz-restart');
  const restartBtn = document.getElementById('restart-btn');
  const homeBtn = document.getElementById('home-btn');

  function renderQuestion() {
    quizTitle.textContent = quiz.title;
    progress.textContent = `Question ${current + 1} / ${quiz.questions.length}`;
    const q = quiz.questions[current];
    questionDiv.textContent = q.question;
    choicesForm.innerHTML = '';
    q.choices.forEach((choice, idx) => {
      const label = document.createElement('label');
      label.style.display = 'block';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'choice';
      input.value = idx;
      if (selected === idx) input.checked = true;
      label.appendChild(input);
      label.appendChild(document.createTextNode(' ' + choice));
      choicesForm.appendChild(label);
    });
    nextBtn.style.display = (current < quiz.questions.length - 1) ? '' : 'none';
    submitBtn.style.display = (current === quiz.questions.length - 1) ? '' : 'none';
  }

  choicesForm.addEventListener('change', e => {
    if (e.target.name === 'choice') {
      selected = parseInt(e.target.value);
    }
  });

  nextBtn.addEventListener('click', () => {
    if (selected === null) {
      alert('Please select an answer.');
      return;
    }
    if (selected === quiz.questions[current].answer) score++;
    current++;
    selected = null;
    renderQuestion();
  });

  submitBtn.addEventListener('click', () => {
    if (selected === null) {
      alert('Please select an answer.');
      return;
    }
    if (selected === quiz.questions[current].answer) score++;
    showResult();
  });

  function showResult() {
    saveQuizResult(quiz.id, score, quiz.questions.length);
    questionDiv.style.display = 'none';
    choicesForm.style.display = 'none';
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'none';
    progress.style.display = 'none';
    resultDiv.style.display = '';
    restartDiv.style.display = '';
    resultDiv.innerHTML = `<h2>Score: ${score} / ${quiz.questions.length}</h2>`;
  }

  restartBtn.addEventListener('click', () => {
    current = 0;
    score = 0;
    selected = null;
    questionDiv.style.display = '';
    choicesForm.style.display = '';
    progress.style.display = '';
    resultDiv.style.display = 'none';
    restartDiv.style.display = 'none';
    renderQuestion();
  });

  homeBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  renderQuestion();
});
