import { initUsers, pullData, newGame } from './api';
import './style.css';
import { scorelog } from './scores.js';

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



const myList = [
  {
    name: 'Munsa Mibenge',
    score: 150,
  },
  {
    name: 'Howard Huges',
    score: 140,
  },
  {
    name: 'Napolean Hill',
    score: 130,
  },
  {
    name: 'Shannon Biggs',
    score: 129,
  },
  {
    name: 'Crystal Summer',
    score: 125,
  },
  {
    name: 'John Lenon',
    score: 115,
  },
  {
    name: 'Chris Pratt',
    score: 110,
  },
  {
    name: 'The Rock',
    score: 108,
  },
  {
    name: 'Mike Myers',
    score: 103,
  },
  {
    name: 'Eddie Murphy',
    score: 120,
  },
];

document.addEventListener('DOMContentLoaded', () => scorelog(myList));