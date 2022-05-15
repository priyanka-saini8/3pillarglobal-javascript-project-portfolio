function clicked(id){
    let elementid = document.getElementById(id);
    
    elementid.addEventListener('click',() =>{
        elementid.style.backgroundColor ="rgb(255, 234, 234)";
        elementid.style.fontSize = '22px';
        elementid.style.transition = 'backgroundcolor 0.15s, fontSize 0.25s';
        setTimeout( () => {
            elementid.style.backgroundColor = 'rgb(249, 249, 249)';
            elementid.style.fontSize = '20px';
            elementid.style.transition = 'backgroundcolor 0.25s, fontSize 0.25s';
        },1000);
    });
}

function emojiChanging() {
    let elementid = document.getElementById('emojis');
    
    const emojiArray = ['&#128214;','&#128293;','&#128187;','&#128293;','&#128210;','&#127793;'];

    let index = 0;
    setInterval(() => {
        if(index >= emojiArray.length) index = 0;
        elementid.innerHTML = emojiArray[index];
        index++;
    },2000);
}

function titleAnimation() {
    let elementid = document.getElementById('professional-titles');
    const titleArray = ['Instructor','Motivational Speaker','Programmer','Motivator','Content Creator','Educator'];
    
    let index = 0;
    setInterval(() => {
        if(index >= titleArray.length) index = 0;
        elementid.style.paddingLeft = '0px';
        elementid.innerHTML = titleArray[index];
        const increase = 8;
        let marginn = 20;
        let newopacity = 0.09;
        const opacityIncrease = 0.38;
        elementid.style.opacity = newopacity;
        let moving = setInterval (() => {
            elementid.style.opacity = newopacity;
            elementid.style.transition = 'opacity 0.15s';
            elementid.style.paddingLeft = marginn+'px';
            marginn = marginn + increase;
            newopacity = newopacity + opacityIncrease;
        },240);
        setTimeout(() => {
            clearInterval(moving);
        }, 800);
        index++;
    },2000);
    

}