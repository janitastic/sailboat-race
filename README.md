# Bermuda Race Log

### Table of Contents
<img align="right" src="https://media.giphy.com/media/xUA7bgWHn4rjkJqmc0/giphy.gif">

- [What is This?](#what-is-this)
- [The Problem](#the-problem)
- [The Solution](#the-solution)
- [Test it Out](#test-it-out-for-yourself)
- [How Did I Build This?](#how-did-i-build-this)
- [Challenges & Reflection](#challenges-and-reflection)
- [Written & Designed By](#written-and-designed-by)

## What is This?
So there's this sailboat race from Rhode Island to Bermuda. It takes several days to complete, nobody knows how many, and the score keeper doesn't have time to kill. They asked me to design this app to log the finish times and dates, tally up the total amount of time (in minutes specifically) that it takes for each competitor to cross the finish line. Just for fun, it also calculates the average completion time for all the sailers so everyone can compare their scores.

## The Problem

We are given a list of finish times as a string, where each finish time is formatted as `hh:mm xM, DAY n`.

Where `hh` is exactly 2 digits giving the hour, `mm` is exactly 2 digits giving the minute, `x` is either 'A' or 'P', and `n` is a positive integer less than 100 with no leading zeros. So each string has exactly 15 or 16 characters (depending on whether n is less than 10).

Create a program that contains an "average minutes" function. This function is given a list of strings, `times`, and that returns the average number of minutes taken by the competitors to complete the race. Round the returned value to the nearest minute, with .5 rounding up.

## The Solution
![demo](https://github.com/janitastic/sailboat-race/blob/main/src/assets/Bermuda-Race_demo.gif)

## Test it Out For Yourself
If you're a developer, follow the instructions below to test out this app. If you're not, stay tuned! This site will be live if this race ever happens.
  1. Clone this repo `git@github.com:janitastic/sailboat-race.git`
  2. Install the necessary package dependencies `npm install`
  3. Run the command `npm start`
  4. Start the server at `http://localhost:3000/`

## How Did I Build This?
Thanks to the brilliant React app, my trust friend JavaScript, the beauty of Sassy SASS and a few other techy tools I was able to build this out within a few days... just in time for the unmentioned start day of the race.<br>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React Hooks](https://img.shields.io/badge/React%20-Hooks-blue#:~:text=Hooks-,Hooks)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

## Challenges and Reflection
<img align="right" src="https://media.giphy.com/media/xTiIzw6Gi99SJAyR2w/giphy-downsized.gif">

This application forced me to pseudeocode quite a bit and summon my elementary school math word problem skills. Once I had the calculations mapped out and working on paper implementing them into a code logic was a step by step process. When I originally built out the "comp" design it was one simple input field with a bunch of numbers on a screen. I struggled to understand how a user would interact with this application. It was unclear what they should input or how they would understand what was being calculated. That, combined with a wireframe which didn't have the "inspect" tool that was supposed to be provided, pushed me to improvise. I matched the comp the best I could, but also customized the instrucitons, form fields and results display to provided an enhanced user experience.

## Written and Designed By
The app wireframe design was provided by Bitly [here](https://app.abstract.com/share/e29956ba-1198-465a-ae0b-0088002a1f4a?collectionId=cf3e1843-7447-4dc4-b0d6-09cc9ce2540b&collectionLayerId=829f28fe-2412-402e-b5e0-cc2226816497&present=true&preview=false&sha=b1723bf5f93dce126b9fe3bf38362e29f313c8fc). I enhanced the look and feel for a better user intereaction and experience.
<table>
  <td align="center">
    <img src="https://avatars.githubusercontent.com/u/76501557?v=4" width="100px;" alt="Jani Palomino"/>
    <br>Jani 'hah-nee' Palomino<br>(she/her)<br>
  </td>
  <td align="center">
    <p>Contact Me</p>
    <a href="https://github.com/janitastic"> 
    <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />
    </a><br>  
    <a href="https://www.linkedin.com/in/janipalomino/"> 
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" />
    </a>
  </td>
 </table>
