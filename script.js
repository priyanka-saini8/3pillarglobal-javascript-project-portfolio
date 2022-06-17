function clicked(id){
    let elementid = document.getElementById(id);
    elementid.style.backgroundColor ="rgb(255, 234, 234)";
    elementid.style.fontSize = '22px';
    elementid.style.transition = 'backgroundcolor 0.15s, fontSize 0.25s';
    setTimeout( () => {
        elementid.style.backgroundColor = 'rgb(249, 249, 249)';
        elementid.style.fontSize = '20px';
        elementid.style.transition = 'backgroundcolor 0.25s, fontSize 0.25s';
    },1000);
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
        },150);
        setTimeout(() => {
            clearInterval(moving);
        }, 800);
        index++;
    },2000);
}

function changeTechologies() {
    let elementid = document.getElementById('i-teach');
    const techObj =  [{ name: "NUMPY", color: "#46719E" }, { name: "REACT", color: "#89D9F7" }, { name: "REDUX", color: "#8060BE" }, {name: "NODE", color: "#598949" }, {name: "MONGODB", color: "#58AC65" }, { name: "PANDAS", color: "#46719E"}, {name: "JAVASCRIPT", color: "#F9EA79"}, {name: "HTML", color: "#FAE8DC"} ];

    let index = 0;
    
    setInterval(() => {
        let opacity = 0.2;
        elementid.style.opacity = 0.4;
        if(index >= techObj.length) index = 0;
        elementid.innerHTML = techObj[index].name;
        elementid.style.color = techObj[index].color;
        index++;
        
        let change = setInterval( () => {
            elementid.style.opacity = opacity;
            elementid.style.transition = 'opacity 0.5s';
            opacity = opacity + 0.25;
        },150);
        setTimeout(() => {clearInterval(change);},800);
        
    },2000);
}
changeTechologies();