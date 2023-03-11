let pirate1=document.querySelector(".frogy1");
let pirate2=document.querySelector(".frogy2");
let pirate3=document.querySelector(".frogy3");
let bounton=document.querySelector(".btn-danger1");
let areatxt=document.getElementById('inp');
let areatxt2=document.getElementById('inp1');

areatxt.addEventListener('keypress', (e) =>{
    if(e.key !== 'Enter') {
        document.querySelector('.reponse').classList.remove('changeparent');
        val=(document.getElementById('inp').value + e.key).toLowerCase().trim().replace(/ /g,"");
    console.log(val);
    if ((val =='justify-content:space-around') || (val =='justify-content:space-around;')){
        pirate1.classList.add('vrai1fr1');
        pirate2.classList.add('vrai1fr2');
        pirate3.classList.add('vrai1fr3');
        if((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-items:end') 
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-items:end;')
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-items:flex-end;')
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-items:flex-end')){
            bounton.removeAttribute('disabled');
            bounton.classList.add('change');
        }
        else{
            bounton.classList.remove('change');
            bounton.getAttribute('disabled');
        }  
    }
    else{
        if (!((val =='align-items:end') || (val =='align-items:end;') || (val =='align-items:flex-end;') || (val =='align-items:flex-end'))){
        bounton.classList.remove('change');
        bounton.getAttribute('disabled');
        if(!((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:space-around;')
    || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:space-around'))){
        pirate1.classList.remove('vrai1fr1');   
        pirate2.classList.remove('vrai1fr2');   
        pirate3.classList.remove('vrai1fr3');   
        bounton.classList.remove('change');
        bounton.getAttribute('disabled');
        // bounton.classList.remove('change');
        }
    }
    }
    if ((val =='align-items:end') || (val =='align-items:end;') || (val =='align-items:flex-end') || (val =='align-items:flex-end;')){
        pirate1.classList.add('vrai2');
        pirate2.classList.add('vrai2');
        pirate3.classList.add('vrai2');
        if((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:space-around') 
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:space-around;')){
            bounton.removeAttribute('disabled');
            bounton.classList.add('change');
        }
        else{
            bounton.classList.remove('change');
            bounton.getAttribute('disabled');
        }
    }
    else{ 
        // if(! ((val =='justify-content:space-around') || (val =='justify-content:space-around;'))){
        // bounton.classList.remove('change');
        if(!((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-items:end') 
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-items:end;') 
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-items:flex-end;') 
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-items:flex-end'))){
        pirate1.classList.remove('vrai2');
        pirate2.classList.remove('vrai2');
        pirate3.classList.remove('vrai2');
        bounton.classList.remove('change');
        bounton.getAttribute('disabled');
        // bounton.classList.remove('change');
    }
    }
// }
}
else{
    areatxt2.focus();
}
});

areatxt2.addEventListener('keypress', (e) =>{
    if(e.key !== 'Enter') {
    document.querySelector('.reponse').classList.remove('changeparent');
    val2=(areatxt2.value + e.key).toLowerCase().trim().replace(/ /g,"");
    console.log(val2);
    if ((val2 =='align-items:end') || (val2 =='align-items:end;') || (val2 =='align-items:flex-end') || (val2 =='align-items:flex-end;')){
        pirate1.classList.add('vrai2');
        pirate2.classList.add('vrai2');
        pirate3.classList.add('vrai2');
        if((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:space-around') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:space-around;')){
            bounton.removeAttribute('disabled');
            bounton.classList.add('change');
        }
        else{
            bounton.classList.remove('change');
            bounton.getAttribute('disabled');
        }
    }
    else{ 
        if(!((val2 =='justify-content:space-around') || (val2 =='justify-content:space-around;'))){
        bounton.getAttribute('disabled');
        bounton.classList.remove('change');
        if(!((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-items:end') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-items:end;')
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-items:flex-end;')
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-items:flex-end'))){
            pirate1.classList.remove('vrai2');
            pirate2.classList.remove('vrai2');
            pirate3.classList.remove('vrai2');
            // bounton.removeAttribute('disabled');
            // bounton.classList.remove('change');
        }
    }
    }
    if((val2 =='justify-content:space-around') || (val2 =='justify-content:space-around;')){
        pirate1.classList.add('vrai1fr1');
        pirate2.classList.add('vrai1fr2');
        pirate3.classList.add('vrai1fr3');
        if((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-items:end;') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-items:end')
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-items:flex-end')
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-items:flex-end;')){
            bounton.removeAttribute('disabled');
            bounton.classList.add('change');
        }
        else{
            bounton.classList.remove('change');
        }
    }
    else{
        if(! ((val2 =='align-items:end') || (val2 =='align-items:end;'))){
        bounton.getAttribute('disabled');
        bounton.classList.remove('change');
        if(!((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:space-around;') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:space-around'))){
            pirate1.classList.remove('vrai1fr1');
            pirate2.classList.remove('vrai1fr2');
            pirate3.classList.remove('vrai1fr3');
            bounton.classList.remove('change');
        bounton.getAttribute('disabled');
        }
    }
}
}
else{
    val2=(areatxt2.value).toLowerCase().trim().replace(/ /g,"");
    if(
        (
            (
                (val2 =='justify-content:space-around') || (val2 =='justify-content:space-around;')
            ) 
            && 
            (
                (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-items:end;') || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-items:end')
                || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-items:flex-end') || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-items:flex-end;')
            )
        )
        ||
            (
                (
                    (val2 =='align-items:end') || (val2 =='align-items:end;') || (val2 =='align-items:flex-end;') || (val2 =='align-items:flex-end')
                ) 
                && 
                (
                    (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:space-around') || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:space-around;')
                )
            )
        ){
        bounton.click();
    }
    else{
        document.querySelector('.reponse').classList.add('changeparent')
    }
}
}
)
