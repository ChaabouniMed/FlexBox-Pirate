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
    if ((val =='justify-content:start') || (val =='justify-content:start;')){
        // pirate1.classList.add('vrai1fr1');
        // pirate2.classList.add('vrai1fr2');
        // pirate3.classList.add('vrai1fr3');
        if((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:row-reverse') 
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:row-reverse;')){
            bounton.removeAttribute('disabled');
            bounton.classList.add('change');
            //-------------------------
            pirate1.classList.add('vrai1fr1');
            pirate2.classList.add('vrai1fr2');
            pirate3.classList.add('vrai1fr3');
            //-------------------------
        }
        else{
            bounton.classList.remove('change');
            bounton.getAttribute('disabled');
            //--------------------------
            pirate1.classList.remove('vrai1fr1');
            pirate2.classList.remove('vrai1fr2');
            pirate3.classList.remove('vrai1fr3');
            //---------------------------
        }  
    }
    else{
        pirate1.classList.remove('vrai1fr1');
        pirate2.classList.remove('vrai1fr2');
        pirate3.classList.remove('vrai1fr3');
        if (!((val =='flex-direction:row-reverse') || (val =='flex-direction:row-reverse;'))){
        bounton.classList.remove('change');
        bounton.getAttribute('disabled');
        if(!((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:start;')
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:start')) 
        //----------------
        && 
        !((val =='flex-direction:row-reverse') || (val =='flex-direction:row-reverse;'))){
        //----------------
        pirate1.classList.remove('vrai1fr1');   
        pirate2.classList.remove('vrai1fr2');   
        pirate3.classList.remove('vrai1fr3');   
        bounton.classList.remove('change');
        bounton.getAttribute('disabled');
        // bounton.classList.remove('change');
        }
    }
    }
    if ((val =='flex-direction:row-reverse') || (val =='flex-direction:row-reverse;')){
        // pirate1.classList.add('vrai2fr1');
        // pirate2.classList.add('vrai2fr2');
        // pirate3.classList.add('vrai2fr3');
        if((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:start') 
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:start;')){
            bounton.removeAttribute('disabled');
            bounton.classList.add('change');
            //--------------------------
            pirate1.classList.add('vrai1fr1');
            pirate2.classList.add('vrai1fr2');
            pirate3.classList.add('vrai1fr3');
            //---------------------------
        }
        else{
            bounton.classList.remove('change');
            bounton.getAttribute('disabled');
            //--------------------------
            pirate1.classList.remove('vrai1fr1');
            pirate2.classList.remove('vrai1fr2');
            pirate3.classList.remove('vrai1fr3');
            //--------------------------
            //--------------------------
            pirate1.classList.add('vrai2fr1');
            pirate2.classList.add('vrai2fr2');
            pirate3.classList.add('vrai2fr3');
            //--------------------------
        }
    }
    else{ 
        // pirate1.classList.remove('vrai1fr1');
        // pirate2.classList.remove('vrai1fr2');
        // pirate3.classList.remove('vrai1fr3');
        // if(! ((val =='justify-content:start') || (val =='justify-content:start;'))){
        // bounton.classList.remove('change');
        if(!((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:row-reverse') 
        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:row-reverse;'))){
        pirate1.classList.remove('vrai2fr1');
        pirate2.classList.remove('vrai2fr2');
        pirate3.classList.remove('vrai2fr3');
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
    if ((val2 =='flex-direction:row-reverse') || (val2 =='flex-direction:row-reverse;')){
        // pirate1.classList.add('vrai2fr1');
        // pirate2.classList.add('vrai2fr2');
        // pirate3.classList.add('vrai2fr3');
        if((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:start') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:start;')){
            bounton.removeAttribute('disabled');
            bounton.classList.add('change');
            pirate1.classList.add('vrai1fr1');
            pirate2.classList.add('vrai1fr2');
            pirate3.classList.add('vrai1fr3');
        }
        else{
            bounton.classList.remove('change');
            bounton.getAttribute('disabled');
            //---------------
            pirate1.classList.remove('vrai1fr1');
            pirate2.classList.remove('vrai1fr2');
            pirate3.classList.remove('vrai1fr3');
            pirate1.classList.add('vrai2fr1');
            pirate2.classList.add('vrai2fr2');
            pirate3.classList.add('vrai2fr3');
            //----------------
        }
    }
    else{ 
        pirate1.classList.remove('vrai1fr1');
        pirate2.classList.remove('vrai1fr2');
        pirate3.classList.remove('vrai1fr3');
        if(!((val2 =='justify-content:start') || (val2 =='justify-content:start;'))){
        bounton.getAttribute('disabled');
        bounton.classList.remove('change');
        if(!((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:row-reverse') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:row-reverse;'))){
            pirate1.classList.remove('vrai2fr1');
            pirate2.classList.remove('vrai2fr2');
            pirate3.classList.remove('vrai2fr3');
            // bounton.removeAttribute('disabled');
            // bounton.classList.remove('change');
        }
        else{
            pirate1.classList.add('vrai2fr1');
            pirate2.classList.add('vrai2fr2');
            pirate3.classList.add('vrai2fr3');
        }
    }
    }
    if((val2 =='justify-content:start') || (val2 =='justify-content:start;')){
        // pirate1.classList.add('vrai1fr1');
        // pirate2.classList.add('vrai1fr2');
        // pirate3.classList.add('vrai1fr3');
        if((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:row-reverse;') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:row-reverse')){
            bounton.removeAttribute('disabled');
            bounton.classList.add('change');
            pirate1.classList.add('vrai1fr1');
            pirate2.classList.add('vrai1fr2');
            pirate3.classList.add('vrai1fr3');
        }
        else{
            bounton.classList.remove('change');
            pirate1.classList.remove('vrai1fr1');
            pirate2.classList.remove('vrai1fr2');
            pirate3.classList.remove('vrai1fr3');
        }
    }
    else{
        // pirate1.classList.remove('vrai1fr1');
        // pirate2.classList.remove('vrai1fr2');
        // pirate3.classList.remove('vrai1fr3');
        if(! ((val2 =='flex-direction:row-reverse') || (val2 =='flex-direction:row-reverse;'))){
        bounton.getAttribute('disabled');
        bounton.classList.remove('change');
        if(!((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:start;') 
        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:start'))){
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
                (val2 =='justify-content:start') || (val2 =='justify-content:start;')
            ) 
            && 
            (
                (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:row-reverse;') || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='flex-direction:row-reverse')
            )
        )
        ||
            (
                (
                    (val2 =='flex-direction:row-reverse') || (val2 =='flex-direction:row-reverse;')
                ) 
                && 
                (
                    (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:start') || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='justify-content:start;')
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
