import utils from '../helpers/utils';
import pet from '../helpers/data/pet';
import progress from './progress';

const fight = pet.getPet();

const buildFightEvent = () => {
  let domString = '';
  domString += `
   <h3>Figtht!</h3>
   <h5>strength score: ${fight[0].strength}</h5>
   <button id='lessFight'>violence</button>
   <button id='moreFight'>bravely</button>
  `;
  utils.printToDom('#fight', domString);
};

const updateLess = () => {
  fight[0].strength -= 10;
  if (fight[0].strength <= 0) {
    fight[0].strength = 0;
  }
  fight[0].overAll = ((fight[0].full + fight[0].fun + fight[0].strength + fight[0].energy) / 4).toFixed();
  const p = `${fight[0].overAll}%`;
  $('#barProgress').css('width', `${p}`);
  progress.buildProgress();
  buildFightEvent();
};

const updateMore = () => {
  fight[0].strength += 1;
  if (fight[0].strength >= 100) {
    fight[0].strength = 100;
  }
  fight[0].overAll = ((fight[0].full + fight[0].fun + fight[0].strength + fight[0].energy) / 4).toFixed();
  const p = `${fight[0].overAll}%`;
  $('#barProgress').css('width', `${p}`);
  progress.buildProgress();
  buildFightEvent();
};

$('body').on('click', '#lessFight', updateLess);
$('body').on('click', '#moreFight', updateMore);

export default { buildFightEvent };
