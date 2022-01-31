"use strict"



// let isName = prompt('Укажите ваше имя?');

// let age = parseInt(prompt('Укажите ваш возраст?'));


//  if (isNaN(age)) {
//         alert("Введите верный возраст!")
//     };

//    if (age < 18) {
//     alert("You are not allowed to visit this website!")
// };


//     if(age >= 18 && age <= 22)
//     if (confirm("Are you sure you want to continue?")) {
//         alert("Welcome " + isName)
//     } else {
//         alert("You are not allowed to visit this website")
//  } else  {alert("Welcome " + isName)};


let userName = prompt('What is your name?');
while (userName === null || !isNaN(Number(userName)) || userName.length === 0) {
   userName = prompt('Invalid Name!')
};



function checkAge(age) {
    if (age > 22) {
        return true;
    } else if (age >= 18 && age <= 22) {
        return confirm("A're you sure you want to continue?")}
    // } else if (age < 18) {
    //     alert('You are not allowed to visit this website')
    // }
}

let age = (parseInt(prompt('How old are you?')))
while (age === null || isNaN(Number(age)) || age.length === 0) {
    age = prompt('Invalid age!')
}
if (checkAge(age)) {
   alert( 'Welcome ' + userName ); 
} else {
   alert( 'You are not allowed to visit this website');
};


    

    
       
    
   



