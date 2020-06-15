import utils from '../helpers/utils';
import pet from '../helpers/data/pet';

const progress = pet.getPet();
// progress[0].overAll = ((progress[0].full + progress[0].fun + progress[0].strength + progress[0].energy) / 4).toFixed();

const buildProgress = () => {
  progress[0].overAll = ((progress[0].full + progress[0].fun + progress[0].strength + progress[0].energy) / 4).toFixed();
  // const progressBar = document.getElementsByClassName('progress-bar')[0];
  // vconst computedStyle = getComputedStyle(progressBar);
  // const width = parseFloat(computedStyle.getPropertyValue('--width'));
  // console.error('this is the width value one: ', width);
  // width = progressBar.getElementsByClassName('progress-bar').getPropertyValue;
  // console.error('this is the width value two: ', width);
  // let w = 0;
  // document.getElementsByClassName('progress-bar').style.width = '55%';
  let domString = '';
  domString += `
  <h2>Progress</h2>  
  <div id="mainProgress">
    <div id="barProgress">${progress[0].overAll}%</div>
  </div>
  `;
  utils.printToDom('#progress', domString);
  $('#barProgress').css('width', `${progress[0].overAll}%`);
};

export default { buildProgress };
