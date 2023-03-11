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
    if ((val =='flex-direction:column') || (val =='flex-direction:column;')){
        pirate1.classList.add('vrai1fr1');
        pirate2.classList.add('vrai1fr2');
        pirate3.classList.add('vrai1fr3');
        if((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:end') 
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:end;')
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:flex-end;')
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:flex-end')){
            pirate1.classList.add('vrai2fr1');
            pirate2.classList.add('vrai2fr2');
            pirate3.classList.add('vrai2fr3');
            bounton.removeAttribute('disabled');
            bounton.classList.add('change');
        }
        else{
            pirate1.classList.remove('vrai2fr1');
            pirate2.classList.remove('vrai2fr2');
            pirate3.classList.remove('vrai2fr3');
            bounton.classList.remove('change');
            bounton.getAttribute('disabled');
        }  
    }
    else{
        if (!((val =='justify-content:end') || (val =='justify-content:end;') || (val =='justify-content:flex-end;') || (val =='justify-content:flex-end'))){
        // bounton.classList.remove('change');
        // bounton.getAttribute('disabled');
        if(!((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:column;')
    || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:column'))
    && !((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:end') 
    || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:end;') 
    || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:flex-end') 
    || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:flex-end;'))){
        pirate1.classList.remove('vrai1fr1');   
        pirate2.classList.remove('vrai1fr2');   
        pirate3.classList.remove('vrai1fr3');   
        pirate1.classList.remove('vrai2fr1');
        pirate2.classList.remove('vrai2fr2');
        pirate3.classList.remove('vrai2fr3');
        pirate1.classList.remove('vraisanscolfr1');
        pirate2.classList.remove('vraisanscolfr2');
        pirate3.classList.remove('vraisanscolfr3');
        bounton.classList.remove('change');
        bounton.getAttribute('disabled');
        }
        else if (!((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:column;')
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:column'))
        && ((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:end') 
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:end;') 
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:flex-end') 
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:flex-end;'))){
            pirate1.classList.remove('vrai1fr1');   
            pirate2.classList.remove('vrai1fr2');   
            pirate3.classList.remove('vrai1fr3');   
            pirate1.classList.remove('vrai2fr1');
            pirate2.classList.remove('vrai2fr2');
            pirate3.classList.remove('vrai2fr3');
            pirate1.classList.add('vraisanscolfr1');
            pirate2.classList.add('vraisanscolfr2');
            pirate3.classList.add('vraisanscolfr3');
            bounton.classList.remove('change');
            bounton.getAttribute('disabled');
        }
    }
    }
    if ((val =='justify-content:end') || (val =='justify-content:end;') || (val =='justify-content:flex-end') || (val =='justify-content:flex-end;')){
        // pirate1.classList.add('vrai2');
        // pirate2.classList.add('vrai2');
        // pirate3.classList.add('vrai2');
        if((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:column') 
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:column;')){
            pirate1.classList.add('vrai2fr1');
            pirate2.classList.add('vrai2fr2');
            pirate3.classList.add('vrai2fr3');
            pirate1.classList.add('vrai1fr1');
            pirate2.classList.add('vrai1fr2');
            pirate3.classList.add('vrai1fr3');
            bounton.removeAttribute('disabled');
            bounton.classList.add('change');
        }
        else{
            pirate1.classList.remove('vrai2fr1');
            pirate2.classList.remove('vrai2fr2');
            pirate3.classList.remove('vrai2fr3');
            pirate1.classList.remove('vrai1fr1');
            pirate2.classList.remove('vrai1fr2');
            pirate3.classList.remove('vrai1fr3');
            pirate1.classList.add('vraisanscolfr1');
            pirate2.classList.add('vraisanscolfr2');
            pirate3.classList.add('vraisanscolfr3');

            bounton.classList.remove('change');
            bounton.getAttribute('disabled');
        }
    }
    else{ 
        if(!((val =='flex-direction:column') || (val =='flex-direction:column;'))){
        // bounton.getAttribute('disabled');
        // bounton.classList.remove('change');
        if(!((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:end') 
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:end;') 
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:flex-end') 
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:flex-end;'))
        && !((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:column;') 
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:column'))){
            pirate1.classList.remove('vraisanscolfr1');
            pirate2.classList.remove('vraisanscolfr2');
            pirate3.classList.remove('vraisanscolfr3');
            bounton.classList.remove('change');
            bounton.getAttribute('disabled');
        }
        else if (!((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:end') 
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:end;') 
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:flex-end') 
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:flex-end;'))
        && ((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:column;') 
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:column'))){
            pirate1.classList.remove('vrai2fr1');
            pirate2.classList.remove('vrai2fr2');
            pirate3.classList.remove('vrai2fr3');
            bounton.classList.remove('change');
            bounton.getAttribute('disabled');
    }
    }
}
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
    if ((val2 =='justify-content:end') || (val2 =='justify-content:end;') 
    || (val2 =='justify-content:flex-end') || (val2 =='justify-content:flex-end;')){
        // pirate1.classList.add('vrai2');
        // pirate2.classList.add('vrai2');
        // pirate3.classList.add('vrai2');
        if((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:column') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:column;')){
            pirate1.classList.add('vrai2fr1');
            pirate2.classList.add('vrai2fr2');
            pirate3.classList.add('vrai2fr3');
            pirate1.classList.add('vrai1fr1');
            pirate2.classList.add('vrai1fr2');
            pirate3.classList.add('vrai1fr3');
            bounton.removeAttribute('disabled');
            bounton.classList.add('change');
        }
        else{
            pirate1.classList.remove('vrai2fr1');
            pirate2.classList.remove('vrai2fr2');
            pirate3.classList.remove('vrai2fr3');
            pirate1.classList.remove('vrai1fr1');
            pirate2.classList.remove('vrai1fr2');
            pirate3.classList.remove('vrai1fr3');
            pirate1.classList.add('vraisanscolfr1');
            pirate2.classList.add('vraisanscolfr2');
            pirate3.classList.add('vraisanscolfr3');
            bounton.classList.remove('change');
            bounton.getAttribute('disabled');
        }
    }
    else{ 
        if(!((val2 =='flex-direction:column') || (val2 =='flex-direction:column;'))){
        // bounton.getAttribute('disabled');
        // bounton.classList.remove('change');
        if(!((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:end') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:end;') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:flex-end') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:flex-end;'))
        && !((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:column;') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:column'))){
            pirate1.classList.remove('vrai1fr1');   
            pirate2.classList.remove('vrai1fr2');   
            pirate3.classList.remove('vrai1fr3');   
            pirate1.classList.remove('vrai2fr1');
            pirate2.classList.remove('vrai2fr2');
            pirate3.classList.remove('vrai2fr3');
            pirate1.classList.remove('vraisanscolfr1');
            pirate2.classList.remove('vraisanscolfr2');
            pirate3.classList.remove('vraisanscolfr3');
            bounton.classList.remove('change');
            bounton.getAttribute('disabled');
        }
        else if (!((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:end') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:end;') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:flex-end') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:flex-end;'))
        && ((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:column;') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:column'))){
            pirate1.classList.remove('vrai2fr1');
            pirate2.classList.remove('vrai2fr2');
            pirate3.classList.remove('vrai2fr3');
            bounton.classList.remove('change');
            bounton.getAttribute('disabled');
    }
    }
}
    if((val2 =='flex-direction:column') || (val2 =='flex-direction:column;')){
        pirate1.classList.add('vrai1fr1');
        pirate2.classList.add('vrai1fr2');
        pirate3.classList.add('vrai1fr3');
        if((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:end;') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:end') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:flex-end;') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:flex-end')){
            pirate1.classList.add('vrai2fr1');
            pirate2.classList.add('vrai2fr2');
            pirate3.classList.add('vrai2fr3');
            bounton.removeAttribute('disabled');
            bounton.classList.add('change');
        }
        else{
            pirate1.classList.remove('vrai2fr1');
            pirate2.classList.remove('vrai2fr2');
            pirate3.classList.remove('vrai2fr3');
            bounton.classList.remove('change');
            bounton.getAttribute('disabled');
        }
    }
    else{
        if(! ((val2 =='justify-content:end') || (val2 =='justify-content:end;') || (val2 =='justify-content:flex-end') || (val2 =='justify-content:flex-end;'))){
        // bounton.getAttribute('disabled');
        // bounton.classList.remove('change');
        if(!((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:column;') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:column'))
        && !((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:end') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:end;') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:flex-end') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:flex-end;'))){
            pirate1.classList.remove('vrai1fr1');   
            pirate2.classList.remove('vrai1fr2');   
            pirate3.classList.remove('vrai1fr3');   
            pirate1.classList.remove('vrai2fr1');
            pirate2.classList.remove('vrai2fr2');
            pirate3.classList.remove('vrai2fr3');
            pirate1.classList.remove('vraisanscolfr1');
            pirate2.classList.remove('vraisanscolfr2');
            pirate3.classList.remove('vraisanscolfr3');
            bounton.classList.remove('change');
            bounton.getAttribute('disabled');
        }
        else if(!((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:column;') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:column'))
        && ((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:end') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:end;') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:flex-end') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:flex-end;'))){
            pirate1.classList.remove('vrai1fr1');   
            pirate2.classList.remove('vrai1fr2');   
            pirate3.classList.remove('vrai1fr3');   
            pirate1.classList.remove('vrai2fr1');
            pirate2.classList.remove('vrai2fr2');
            pirate3.classList.remove('vrai2fr3');
            pirate1.classList.add('vraisanscolfr1');
            pirate2.classList.add('vraisanscolfr2');
            pirate3.classList.add('vraisanscolfr3');
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
                (val2 =='flex-direction:column') || (val2 =='flex-direction:column;')
            ) 
            && 
            (
                (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:end;') || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:end') 
                || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:flex-end;') || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:flex-end')
            )
        )
        ||
            (
                (
                    (val2 =='justify-content:end') || (val2 =='justify-content:end;') 
                    || (val2 =='justify-content:flex-end') || (val2 =='justify-content:flex-end;')
                ) 
                && 
                (
                    (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:column') || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:column;')
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
