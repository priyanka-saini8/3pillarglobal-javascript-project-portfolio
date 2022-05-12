function clicked(id){
    let elementid = document.getElementById(id);
    
    elementid.addEventListener('click',() =>{
        elementid.style.backgroundColor ="rgb(255, 234, 234)";
        elementid.style.fontSize = '22px';
        setTimeout( () => {
            elementid.style.backgroundColor = 'rgb(249, 249, 249)';
            elementid.style.fontSize = '20px';
        },1000);
    });
}