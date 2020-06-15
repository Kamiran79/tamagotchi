import utils from '../helpers/utils';
import pet from '../helpers/data/pet';
import progress from './progress';

const fullness = pet.getPet();

const buildEatEvent = () => {
  let domString = '';
  domString += `
   <h3>Eat!</h3>
   <h5>fullness score: ${fullness[0].full}</h5>
   <button id='lessEat'>junk food</button>
   <button id='moreEat'>healthy food</button>
  `;
  utils.printToDom('#eat', domString);
};

const updateLess = () => {
  fullness[0].full -= 3;
  if (fullness[0].full <= 0) {
    fullness[0].full = 0;
  }
  fullness[0].overAll = ((fullness[0].full + fullness[0].fun + fullness[0].strength + fullness[0].energy) / 4).toFixed();
  const p = `${fullness[0].overAll}%`;
  $('#barProgress').css('width', `${p}`);
  progress.buildProgress();
  buildEatEvent();
};

const updateMore = () => {
  fullness[0].full += 100;
  if (fullness[0].full >= 100) {
    fullness[0].full = 100;
  }
  fullness[0].overAll = ((fullness[0].full + fullness[0].fun + fullness[0].strength + fullness[0].energy) / 4).toFixed();
  const p = `${fullness[0].overAll}%`;
  $('#barProgress').css('width', `${p}`);
  progress.buildProgress();
  buildEatEvent();
};

$('body').on('click', '#lessEat', updateLess);
$('body').on('click', '#moreEat', updateMore);

export default { buildEatEvent };


// sleep icon
// <i class="fas fa-bed"></i>

// fight
// <i class="fas fa-angry"></i>

/*
this is was eat card before ...

const buildEatEvent = () => {
  let domString = '';
  domString += `
      <div class="squareEat">
        <div id="eat1"><i class="fas fa-cookie-bite"></i></div>
        <div id="play1"><i class="fas fa-skating"></i></div>
        <div id="fight1"><i class="fas fa-angry"></i></div>
        <div id="sleep1"><i class="fas fa-bed"></i></div>
        <p class="name1" id="eatHealth">Sammy</p>
        <p class="healthScore" id="eatHealth">Health: 100%</p>
        <button class="btn1" id="eatHealth">eat Healthy</button>
        <button class="btn2" id="eatHealth">eat Junck</button>
      </div>
  `;
  utils.printToDom('#app', domString);
};

*/
