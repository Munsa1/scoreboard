import './style.css';
const list = document.getElementById('scorelist');

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
  }
];

myList.forEach((populate)=>{
 list.innerHTML(populate);
})