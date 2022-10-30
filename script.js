let tryNumber;
let hiddenNumber;
let attempts = 6;

hiddenNumber = Math.floor(Math.random() * 101);
console.log(hiddenNumber);
console.log(`Игра "угадай число". Вы должны угадать число от 0 до 100. У вас 6 попыток.`);
for(let i = 1; i <= 7; i++) {

    tryNumber = +prompt(`Введите число от 0 до 100: `);

    if(tryNumber === hiddenNumber){
        console.log(`Вы выиграли! Это число ${hiddenNumber}`);
        break;
    } else {
        console.log(`У вас осталось ${attempts} попыток`);
        if(tryNumber > hiddenNumber){
            console.log(`Загаданное число меньше!`);
        } else {
            console.log(`Загаданное число больше!`);
        }
        attempts -= 1;
    }
    if(attempts === -1){
        console.log(`Вы проиграли!`);
    }
}

//-----------------------------------------------------------------------------------

let characterHealth1 = Math.floor(150 + Math.random() * (500 + 1 - 150));
let characterHealth2 = Math.floor(150 + Math.random() * (500 + 1 - 150));

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function healthOutput() {
    console.log(`----------------------------------------`);
    console.log(`Здоровье первого персонажа: ${characterHealth1}`);
    console.log(`Здоровье второго персонажа: ${characterHealth2}`);
    console.log(`----------------------------------------`);
}

let damage1 = 0;
let damage2 = 0;

while(characterHealth1 > 0 && characterHealth2 > 0)
{
    damage1 = Math.floor(10 + Math.random() * (50 + 1 - 10));
    characterHealth1 -= damage1;
    console.log(`Первый нанёс ${damage1} второму персонажу!`);
    if(characterHealth1 <= 0){
        break;
    }
    damage2 = Math.floor(10 + Math.random() * (50 + 1 - 10));
    characterHealth2 -= damage2;
    console.log(`Второй нанёс ${damage2} первому персонажу!`);
    healthOutput();
    sleep(3000);
    console.clear();
}

if(characterHealth1 > characterHealth2){
    console.log(`Первый персонаж выиграл!`);
    healthOutput();
}
else {
    console.log(`Второй персонаж выиграл!`);
    healthOutput();
}

//-----------------------------------------------------------------------------------

let rubleCourse = 0.016;
let dollarCourse = 61.87;

let convertMoney = 0;
let balanceRubbles  = +prompt("Ваш баланс рублей: ");
let balanceDollars = +prompt("Ваш баланс долларов: ");

const money = () => {
    console.log(`Ваш баланс долларов: ${balanceDollars}$`);
    console.log(`Ваш баланс рублей: ${balanceRubbles} рублей`);
}

money();
let choice  = +prompt("Выберите вариант конвертации:\n1 - Рубли в доллары\n 2 - Доллары в рубли");
switch(choice){
    case 1:
        convertMoney = prompt("Сколько вы хотите поменять: ");
        if (balanceRubbles >= convertMoney) {
            balanceRubbles -= convertMoney;
            balanceDollars += parseFloat(convertMoney) * rubleCourse;
        } else {
            console.log('Вам не хватает денег!');
        }
        break;
    case 2:
        convertMoney = prompt("Сколько вы хотите поменять: ");
        if (balanceDollars >= convertMoney) {
            balanceDollars -= convertMoney;
            balanceRubbles += parseFloat(convertMoney) * dollarCourse;
        } else {
            console.log('Вам не хватает денег!');
        }
        break;
    default:
        console.log('Вы ввели некорректное значение!');
}

money();
