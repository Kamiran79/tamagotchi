
import utils from '../helpers/utils';


const buildMainCard = () => {
  let domString = '';
  domString += `
      <div class="container1">
        <img src=".." alt="..">
        <div class="squareMain"></div>
        <div id="eat1"><i class="fas fa-star"></i></div>
        <button class="bottom-left" id="eatHealth">eat</button>
      </div>
  `;
  utils.printToDom('#app', domString);
  // utils.printToDom
};

export default { buildMainCard };
