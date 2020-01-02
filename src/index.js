import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';

// Add css files
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS from Bootstrap
import 'font-awesome/css/font-awesome.min.css'; // CSS from FontAwesome
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css'; // My own CSS

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';

let seg = 0 ;
let min = 0;
let hour = 0;
let day = 0;

setInterval(() => {
    seg++
   /* let num1 = Math.floor(seg / 1);   
    seg++     */
       
   /* let num2 = Math.floor(min / 60);
       
    let num3 = Math.floor(hour / 3600);
        
    let num4 = Math.floor(day / 86400);*/

ReactDOM.render(<Home name={"Contador"} num1={seg} num2={min} num3={hour} num4={day} />, document.querySelector("#root"));


if (seg == 60){
    min++;
    seg = 0;
    ;
}

if (min == 60){
    hour++;
    min=0;
}

if (hour == 24){
    day++;
    hour=0;
}

},1000);