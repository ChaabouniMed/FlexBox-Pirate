let pirate=document.querySelector(".frogy");
let bounton=document.querySelector(".btn-danger1");
let areatxt=document.getElementById('inp');
let areatxt2=document.getElementById('inp1');

areatxt.addEventListener('keypress', (e) =>{
    if(e.key !== 'Enter') {
        document.querySelector('.reponse').classList.remove('changeparent');
        val=(document.getElementById('inp').value + e.key).toLowerCase().trim().replace(/ /g,"");
    console.log(val);
    if ((val =='justify-content:center') || (val =='justify-content:center;')){
        pirate.classList.add('vrai1');
        if((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-items:center') 
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-items:center;')){
            bounton.removeAttribute('disabled');
            bounton.classList.add('change');
        }
        else{
            bounton.classList.remove('change');
            bounton.getAttribute('disabled');
        }  
    }
    else{
        if (!((val =='align-items:center') || (val =='align-items:center;'))){
        bounton.classList.remove('change');
        bounton.getAttribute('disabled');
        if(!((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:center;')
    || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:center'))){
        pirate.classList.remove('vrai1');   
        bounton.classList.remove('change');
        bounton.getAttribute('disabled');
        // bounton.classList.remove('change');
        }
    }
    }
    if ((val =='align-items:center') || (val =='align-items:center;')){
        pirate.classList.add('vrai2');
        if((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:center') 
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:center;')){
            bounton.removeAttribute('disabled');
            bounton.classList.add('change');
        }
        else{
            bounton.classList.remove('change');
            bounton.getAttribute('disabled');
        }
    }
    else{ 
        // if(! ((val =='justify-content:center') || (val =='justify-content:center;'))){
        // bounton.classList.remove('change');
        if(!((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-items:center') 
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-items:center;'))){
        pirate.classList.remove('vrai2');
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
    if ((val2 =='align-items:center') || (val2 =='align-items:center;')){
        pirate.classList.add('vrai2');
        if((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:center') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:center;')){
            bounton.removeAttribute('disabled');
            bounton.classList.add('change');
        }
        else{
            bounton.classList.remove('change');
            bounton.getAttribute('disabled');
        }
    }
    else{ 
        if(!((val2 =='justify-content:center') || (val2 =='justify-content:center;'))){
        bounton.getAttribute('disabled');
        bounton.classList.remove('change');
        if(!((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-items:center') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-items:center;'))){
            pirate.classList.remove('vrai2');
            // bounton.removeAttribute('disabled');
            // bounton.classList.remove('change');
        }
    }
    }
    if((val2 =='justify-content:center') || (val2 =='justify-content:center;')){
        pirate.classList.add('vrai1');
        if((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-items:center;') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-items:center')){
            bounton.removeAttribute('disabled');
            bounton.classList.add('change');
        }
        else{
            bounton.classList.remove('change');
        }
    }
    else{
        if(! ((val2 =='align-items:center') || (val2 =='align-items:center;'))){
        bounton.getAttribute('disabled');
        bounton.classList.remove('change');
        if(!((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:center;') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:center'))){
            pirate.classList.remove('vrai1');
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
                (val2 =='justify-content:center') || (val2 =='justify-content:center;')
            ) 
            && 
            (
                (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-items:center;') || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-items:center')
            )
        )
        ||
            (
                (
                    (val2 =='align-items:center') || (val2 =='align-items:center;')
                ) 
                && 
                (
                    (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:center') || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:center;')
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
