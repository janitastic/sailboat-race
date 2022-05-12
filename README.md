# Bermuda Race Log

### Table of Contents
- [Overview](#overview)
- [The Problem](#the-problem)
- [Demo](#demo)
- [Install & Setup](#install-and-setup)
- [Technologies Used](#technologies-used)
- [Contributors](#contributors)

## Overview
There is a sailboat race from Rhode Island to Bermuda. It takes several days to complete. This app enables users to log the finish times and dates, view the total amount of time (in minutes) it took for each competitor to cross the finish line. As well as the average completion time for all sailers.

## The Problem

We are given a list of finish times as a string, where each finish time is formatted as `hh:mm xM, DAY n`.

Where `hh` is exactly 2 digits giving the hour, `mm` is exactly 2 digits giving the minute, `x` is either 'A' or 'P', and `n` is a positive integer less than 100 with no leading zeros. So each string has exactly 15 or 16 characters (depending on whether n is less than 10).

Create a program that contains an "average minutes" function. This function is given a list of strings, `times`, and that returns the average number of minutes taken by the competitors to complete the race. Round the returned value to the nearest minute, with .5 rounding up.

## Demo
![demo](https://github.com/janitastic/sailboat-race/blob/main/src/assets/Bermuda-Race_demo.gif)

## Install and Setup
  1. Clone this repo `git@github.com:janitastic/sailboat-race.git`
  2. Install the necessary package dependencies `npm install`
  3. Run the command `npm start`
  4. Start the server at `http://localhost:3000/`

## Technologies Used
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React Hooks](https://img.shields.io/badge/React%20-Hooks-blue#:~:text=Hooks-,Hooks)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

## Contributors
<table>
  <td align="center">
    <img src="https://avatars.githubusercontent.com/u/76501557?v=4" width="100px;" alt="Jani Palomino"/>
    <br>Jani 'Hah-nee' Palomino<br>(she/her)<br>
  </td>
  <td align="center">
    <a href="https://github.com/janitastic"> 
    <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />
    </a><br>  
    <a href="https://www.linkedin.com/in/janipalomino/"> 
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" />
    </a>
  </td>
 </table>
