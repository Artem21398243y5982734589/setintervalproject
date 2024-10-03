let value = document.getElementById('count');
let count = 500;
const btn = document.getElementById('btnStart');
let intervalId;

function game() {
    // Остановить предыдущий интервал, если он существует
    if (intervalId) {
        clearInterval(intervalId);
    }
    
    intervalId = setInterval(() => {
        if (count > 0) {
            count--;
            value.innerText = count;
        } else {
            clearInterval(intervalId); 
            alert('игра закончилась')
        }
    }, 400);
}

function plusF () {
    count++
    if (count <= 600){
        value.innerText = count;
    } else{
        alert('игра закончилась')
    }

}

btn.addEventListener('click', game);
value.addEventListener('click', plusF);