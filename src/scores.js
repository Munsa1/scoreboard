const scorelog = (scores) => {
  const list = document.getElementById('scorelist');

  scores.forEach(
    (entry) => list.insertAdjacentHTML(
      'beforeend',
      `
    <div>${entry.name}: ${entry.score}</div>  
  `,
    ),
  );
};

exports.scorelog = scorelog;