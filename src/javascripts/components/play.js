import utils from '../helpers/utils';
import pet from '../helpers/data/pet';
import progress from './progress';

const play = pet.getPet();

const buildPlayEvent = () => {
  let domString = '';
  domString += `
   <h3>Play!</h3>
   <h5>fun score: ${play[0].fun}</h5>
   <button id='lessPlay'>just fun</button>
   <button id='morePlay'>super fun</button>
  `;
  utils.printToDom('#play', domString);
};

const updateLess = () => {
  play[0].fun += 2;
  if (play[0].fun >= 100) {
    play[0].fun = 100;
  }
  play[0].overAll = ((play[0].full + play[0].strength + play[0].fun + play[0].energy) / 4).toFixed();
  const p = `${play[0].overAll}%`;
  $('#barProgress').css('width', `${p}`);
  progress.buildProgress();
  buildPlayEvent();
};

const updateMore = () => {
  play[0].fun += 50;
  if (play[0].fun >= 100) {
    play[0].fun = 100;
  }
  play[0].overAll = ((play[0].full + play[0].strength + play[0].fun + play[0].energy) / 4).toFixed();
  const p = `${play[0].overAll}%`;
  $('#barProgress').css('width', `${p}`);
  progress.buildProgress();
  buildPlayEvent();
};

$('body').on('click', '#lessPlay', updateLess);
$('body').on('click', '#morePlay', updateMore);

export default { buildPlayEvent };
