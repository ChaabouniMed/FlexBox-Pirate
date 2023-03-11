let pirate=document.querySelector(".frogy");
let bounton=document.querySelector(".btn-danger1");
let areatxt=document.getElementById('inp');

areatxt.addEventListener('keypress', (e) =>{
    if(e.key !== 'Enter') {
        document.querySelector('.reponse').classList.remove('changeparent');
    val=(areatxt.value + e.key).toLowerCase().trim().replace(/ /g,"");
    console.log(val);
        if ((val=='justify-content:end')||(val=='justify-content:end;')
        ||(val=='justify-content:flex-end')||(val=='justify-content:flex-end;')){
        pirate.classList.add('vrai');
        bounton.removeAttribute('disabled');
        bounton.classList.add('change');
    }
    else{
            pirate.classList.remove('vrai');
            bounton.classList.remove('change');
        }
}
else{
    if (!((val=='justify-content:end')||(val=='justify-content:end;')
    ||(val=='justify-content:flex-end')||(val=='justify-content:flex-end;'))){
        document.querySelector('.reponse').classList.add('changeparent');
    }
    else{
        bounton.click();
    }
    
}
});
// areatxt.addEventListener('keydown',dot1);
// function carre(idre){
//     let val=document.getElementById(idre);
//     console.log(val);
//     document.getElementById(idre).value='ahaha';
// }


// let pirate=document.querySelector(".frogy");
// let val=document.getElementById('inp');
// val.onblur = function() {
//     let val1=val.value;
//     console.log(val1);
//     if (val1 =='justify-content: end'){
//     console.log(val1);
//     pirate.classList.add('vrai');
//     }
// }
// val.onfocus = function(){
//     let val2=val.value;
//     console.log(val2);
//     if (val2 =='justify-content: end'){
//     console.log(val2);
//     pirate.classList.add('vrai');
//     }
// }

// }
//------------------------

// console.log(pirate);
// function check(idre){
//     val=document.getElementById(idre).value;
//     console.log(val);
//     if ((val =='justify-content: end') || (val ==' justify-content: end') || (val =='justify-content:end')
//     || (val ==' justify-content: end;') || (val ==' justify-content:end;')){
//         pirate.classList.add('vrai');
//         bounton.classList.add('change');
//     }
//     else{
//         pirate.classList.remove('vrai');
//         bounton.classList.remove('change');
//     }
// }
//------------------------




