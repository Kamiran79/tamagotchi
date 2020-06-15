import '../styles/main.scss';
import progress from './components/progress';
import eat from './components/eat';
import fight from './components/fight';
import play from './components/play';
import sleep from './components/sleep';

const init = () => {
  progress.buildProgress();
  eat.buildEatEvent();
  fight.buildFightEvent();
  play.buildPlayEvent();
  sleep.buildSleepEvent();
  // buildApp.buildMainCard();
};

init();
