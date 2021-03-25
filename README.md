# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Samah Khan

Time spent: 4.5 hours spent in total

Link to project: https://glitch.com/edit/#!/spot-deep-grapple

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] Create a library of tunes the user can choose from to play. For example: Twinkle Twinkle Little Star.

## Video Walkthrough

Here's a walkthrough of implemented user stories:  
Main Requirements:  
<img src="https://i.imgur.com/oCFqb7m.gif" height=250><br>


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.   
I used the following resources for fonts and button colors:  
https://www.w3schools.com/css//css_font_websafe.asp  
https://www.color-hex.com/color/ffccee#:~:text=%23ffccee%20color%20RGB%20value%20is,of%20its%20RGB%20is%20238  
https://www.rapidtables.com/web/css/css-color.html  
In addition, I browsed through https://www.w3schools.com/js/default.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)  
One little challenge I faced in creating this submission was figuring out how the demo video had a space between the start button and the 4 musical buttons. I wasn't able to achieve a similar look relying only on padding. From the Intro to Mobile App course I had learned that there is a way to add specific margins (top, bottom, left, right) in the xml layout of Android Studio. I reasoned that there must be a similar option in CSS since that file is for formatting. A quick search on w3schools.com showed me that using margin-bottom would help me achieve the spacing I was looking for. While this wasn't a huge challenge to the point where I struggled intensely, I am really happy that I was able to connect what I am learning in another course to a different project. I am excited to learn even more! 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)  
I am curious about how interactions between multiple pages on a website works. In this pre-work, to style the various items such as buttons, we had to use the click event for the buttons to change colors when pressed. This makes me wonder if every button on a website has code to dictate what it does. For the pages that take a user from one page to the other, are there specific links that are used? Is there a way to make the code less redundant in that regard? 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)  
If I had a few more hours to work on this project, I would first complete the additional requirements which would include having the playback pick up speeds on different turns, allowing the computer to pick a different pattern each time the game is played, allowing the user 3 chances before losing, limiting the time the user has to enter their guess, and changing the game button sound into a more complex one. I would also try to turn this into a piano or guitar game in which the user would be able to select a song or tune of their liking from a predetermined list and then attempt to playback the sequence to win. It would be really interesting to see if a multiplayer option could be added.


## License

    Copyright Samah Khan

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
