const containerCircle = document.querySelector('.container');
const btnAddCircle = document.querySelector('#add-circle');
const btnDelCircle = document.querySelector('#del-circle');
let countCircle;

window.onload = ()=>{
    countCircle = +localStorage.getItem('countCircle');
    if (countCircle == 0) {
        createCircle(3);
        localStorage.setItem('countCircle','3');
    }
    else
        createCircle(countCircle);
};

btnAddCircle.addEventListener('click',()=>{
    createCircle();
    localStorage.setItem('countCircle',`${++countCircle}`);
});

btnDelCircle.addEventListener('click',()=>{
    if(containerCircle.hasChildNodes()){
        containerCircle.lastElementChild.remove();
        localStorage.setItem('countCircle',`${--countCircle}`);}
});

function createCircle(count = 1){
    for(let i = 0; i < count; i++){
        let newCircle = document.createElement('div');
        newCircle.className = 'circle';
        containerCircle.appendChild(newCircle);        
    }    
}