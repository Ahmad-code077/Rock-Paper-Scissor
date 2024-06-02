const input = document.getElementById('select');
const btn = document.querySelector('.btn');
const arr = ['rock', 'paper', 'scissor'];
const result = document.querySelector('#result');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  const random = Math.floor(Math.random() * arr.length);
  let val = input.value.toLowerCase();
  function temp(state, emoji) {
    return ` <h2>${state}${emoji}</h2>
    <h4>You selected <span>${val.toLowerCase()}</span></h4>
    <h4>computer Selected <span> ${arr[random]}</span></h4>`;
  }
  if (val === arr[random]) {
    result.innerHTML = temp('Match is tired', `&#128526`);
    return result;
  } else if (
    (val == 'rock' && arr[random] == arr[2]) ||
    (val == 'scissor' && arr[random] == arr[1]) ||
    (val == 'paper' && arr[random] == arr[0])
  ) {
    result.innerHTML = temp('Hurray! you win the game', `&#127941`);
    return result;
  } else if (val !== arr[0] && val !== arr[1] && val !== arr[2]) {
    result.innerHTML = `<h2>Please select the valid input</h2>`;

    return result;
  } else {
    result.innerHTML = temp('Oops! computer win the game', `&#128546`);
    return result;
  }
});
