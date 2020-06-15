# Tamagotchi
Remember Tamagotchi's? They looked something like this:

![Tamagotchi](https://github.com/Kamiran79/tamagotchi/blob/master/screenshots/tamagotchi.jpg)


In case you lived under a rock in the 90s a Tamagotchi was the first "digital virtual pet". It had three buttons and 8 different menus. After activating it an egg would hatch and then you would be responsible for keeping your pet alive. Your pet could do things like eat, sleep, play, get sick, get medicine, and poop. They sold over 82 million of them before 2017.

This is a javascript vesion.

### Technical Used:
* npm.
* JS file comprised of functions.
* ES6 modules.
* Sass for styling.
* Webpack.
* Font Awesome.
* HTML5.

### Feature List:
* Landing page divided to 5 sections:

    1. Main section show the progress.
    1. Four quadrants for activities.
    1. Those for activities have a different background color.
    1. The four activities are:
    
        * Eat, Sleep, play, and Fight.
        * There are two buttons for each activity.
    
### Screenshots:
**Home Page - Landing page**
![Home Page](https://github.com/Kamiran79/tamagotchi/blob/master/screenshots/Screen%20Shot%202020-06-14%20at%209.31.03%20PM.png)

### How To Run:
1. clone down this repo.
1. Install npm. `npm install`
1. to start see the home page, on the terminal type: `npm start`

### Contributors:
* [Kamiran Ibrahim](https://github.com/Kamiran79)

### Stretch Goals
Here are some possible stretch goals. Feel free to try any that interest you or make up your own.
#### Pit Picture
Your pet deserves a picture. Write a domStringBuilder that puts it in the div with an id of pet. Make the styling look super cool.
#### Attribute Randomizer
Right now we have hard coded all the buttons to increase or decrease but specific amounts. This is kinda lame. Make all the buttons increase of decrease based on random number generators.

#### Death
Something should happen when your energy, strength, full, fun, or overall heath goes to 0. Decide what happens and make it work.

#### Module Interactivity
Currently each module operates independently. This isn't really realistic. Modify your code so the modules interact. Here are some sample interactions:

* When Fullness goes up energy should go down (FOOD COMA)
* When Fullness goes down strength should down
* When Strength goes down energy, full, and fun go down
* When Strength goes up energy goes up.
* When energy goes down fun goes down
    
