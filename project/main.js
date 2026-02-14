// Select elements
const menuBtn = document.querySelector('#menuBtn');
const navList = document.querySelector('#mainNav ul');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  navList.classList.toggle('open');
}

const budgetForm = document.querySelector('#budgetForm');

if (budgetForm) {
  budgetForm.addEventListener('submit', calculateBudget);
}

function calculateBudget(e) {
  e.preventDefault();

  const income = Number(document.querySelector('#income').value);
  const expenses = Number(document.querySelector('#expenses').value);
  const resultDiv = document.querySelector('#budgetResult');

  const remaining = income - expenses;

  let message;

  if (remaining > 0) {
    message = `Great job! You have $${remaining} left to save.`;
  } else if (remaining === 0) {
    message = `You are breaking even. Try to reduce expenses.`;
  } else {
    message = `Warning! You are overspending by $${Math.abs(remaining)}.`;
  }

  resultDiv.innerHTML = `<p>${message}</p>`;

  localStorage.setItem('lastBudget', JSON.stringify({ income, expenses }));
}

let goals = JSON.parse(localStorage.getItem('goals')) || [];

const goalForm = document.querySelector('#goalForm');

if (goalForm) {
  goalForm.addEventListener('submit', addGoal);
  displayGoals();
}

function addGoal(e) {
  e.preventDefault();

  const name = document.querySelector('#goalName').value;
  const amount = Number(document.querySelector('#goalAmount').value);

  const goal = {
    id: Date.now(),
    name,
    amount,
    saved: 0
  };

  goals.push(goal);
  localStorage.setItem('goals', JSON.stringify(goals));

  displayGoals();
}

function displayGoals() {
  const list = document.querySelector('#goalList');
  list.innerHTML = goals.map(goal =>
    `<li>
      ${goal.name} - $${goal.saved} / $${goal.amount}
    </li>`
  ).join('');
}
