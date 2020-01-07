const form = document.querySelector('form');
const list = document.querySelector('.list');
const play = document.querySelector('.play');
const progresss = document.querySelector('.progress');
const clearStorage = document.querySelector('.clear');
const smallMessage = document.querySelector('small');
const container = document.querySelector('.container');

let data;

if(localStorage.getItem('data')){
    data = localStorage.getItem('data').split(',');
    data.forEach((item) => {
        list.insertAdjacentHTML('beforeend', `<li>${item}</li>`);
    });
}else{
    data = [];
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    if(e.srcElement[0].value !== ''){
        let todo = e.srcElement[0].value;
        e.srcElement[0].value = '';
        list.textContent = ``;

        if(data){
            data.push(todo);
            localStorage.setItem('data', data);
            data.forEach((item) => {
                list.insertAdjacentHTML('beforeend', `<li>${item}</li>`);
            });
        }else{
            localStorage.setItem('data', data);
        }

        if(list.textContent){
            clearStorage.style.display = 'inline-block';
        }
    }
});

play.addEventListener('click', ()=> {
    if(play.style.backgroundColor === 'green'){
        location.reload();
    }else {
        progresss.classList.add('animate-progress');
        play.style.backgroundColor = 'green';
        smallMessage.textContent = `Timer has been started...`;
    }
});

clearStorage.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});

if(list.textContent){
    clearStorage.style.display = 'inline-block';
}

progresss.addEventListener('animationend', ()=>{
    smallMessage.textContent = `You nailed it. Now make a plan for what you are going to do for these distractions`;
});


