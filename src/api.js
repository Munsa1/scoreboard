const apiLink = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';


const newGame = async (name) => {
  const getResponse = await fetch(apiLink, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(`{name: ${name}`),
  });
  const resolve = await getResponse.json();
  return resolve;
};