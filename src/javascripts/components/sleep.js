import utils from '../helpers/utils';
import pet from '../helpers/data/pet';
import progress from './progress';

const myPet = pet.getPet();

const buildSleepEvent = () => {
  let domString = '';
  domString += `
   <h3>Sleep!</h3>
   <h5>energy score: ${myPet[0].energy}</h5>
   <button id='lessSleep'>nap</button>
   <button id='moreSleep'>deep slumber</button>
  `;
  utils.printToDom('#sleep', domString);
};

const updateLess = () => {
  myPet[0].energy += 50;
  if (myPet[0].energy >= 100) {
    myPet[0].energy = 100;
  }
  myPet[0].overAll = ((myPet[0].full + myPet[0].fun + myPet[0].strength + myPet[0].energy) / 4).toFixed();
  const p = `${myPet[0].overAll}%`;
  $('#barProgress').css('width', `${p}`);
  progress.buildProgress();
  buildSleepEvent();
};

const updateMore = () => {
  myPet[0].energy += 60;
  if (myPet[0].energy >= 100) {
    myPet[0].energy = 100;
  }
  myPet[0].overAll = ((myPet[0].full + myPet[0].fun + myPet[0].strength + myPet[0].energy) / 4).toFixed();
  const p = `${myPet[0].overAll}%`;
  $('#barProgress').css('width', `${p}`);
  progress.buildProgress();
  buildSleepEvent();
};

$('body').on('click', '#lessSleep', updateLess);
$('body').on('click', '#moreSleep', updateMore);

export default { buildSleepEvent };
