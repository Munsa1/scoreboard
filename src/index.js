import { initUsers, pullData, newGame } from './api.js';
import './style.css';

const loadScores = async () => {
  const displayScores = document.getElementById('scorelist');

  while (displayScores.firstChild) {
    displayScores.removeChild(displayScores.firstChild);
  }

  const userData = await pullData();

  userData.result.forEach((entry) => displayScores.insertAdjacentHTML('beforeend', `
    <div>${entry.user}: ${entry.score}</div>  
  `));
};

const refreshbtn = document.getElementById('refreshBtn');
refreshbtn.addEventListener('click', loadScores);

const dataSubmit = document.getElementById('submit');
dataSubmit.addEventListener('click', async () => {
  let username = document.getElementById('username').value;
  let userscore = document.getElementById('user-score').value;

  if (username !== '' && userscore !== '') {
    const data = {
      user: username,
      score: userscore,
    };

    await initUsers(data);

    username = '';
    userscore = '';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  newGame(`Game created at: ${new Date()}`);
  loadScores();
});