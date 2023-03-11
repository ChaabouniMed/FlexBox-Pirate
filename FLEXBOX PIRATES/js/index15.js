let pirate4=document.querySelector(".frogy4");
let bounton=document.querySelector(".btn-danger1");
let areatxt=document.getElementById('inp');

areatxt.addEventListener('keypress', (e) =>{
    if(e.key !== 'Enter') {
    document.querySelector('.reponse').classList.remove('changeparent');
    val=(document.getElementById('inp').value + e.key).toLowerCase().trim().replace(/ /g,"");
    valeur=val.split(':');
    console.log(valeur);
    ch=valeur[1];
        if ((valeur.length === 2)){
            if(valeur[0]== "align-self"){
                if((ch=="flex-end") || (ch=="flex-end;") || (ch=="end") || (ch=="end;")){
                    pirate4.classList.add('vrai');
                    bounton.removeAttribute('disabled');
                    bounton.classList.add('change');
                }
                else{
                    pirate4.classList.remove('vrai');
                    bounton.classList.remove('change');
                    bounton.getAttribute('disabled');
                }
            }
            else{
                pirate4.classList.remove('vrai');
                bounton.classList.remove('change');
                bounton.getAttribute('disabled');
            }
    }
    else{
        pirate4.classList.remove('vrai');
        bounton.classList.remove('change');
        bounton.getAttribute('disabled');
        }
}
else{
    val=(document.getElementById('inp').value).toLowerCase().trim().replace(/ /g,"");
    valeur=val.split(':');
    ch=valeur[1];
        if ((valeur.length === 2)){
            if(valeur[0] == "align-self"){
                if((ch=="flex-end") || (ch=="flex-end;") || (ch=="end") || (ch=="end;")){
                    bounton.click();
                }
                else{
                    bounton.getAttribute('disabled');
                    document.querySelector('.reponse').classList.add('changeparent');
                }
            }
            else{
                bounton.getAttribute('disabled');
                document.querySelector('.reponse').classList.add('changeparent');
            }
        }
        else{
        bounton.getAttribute('disabled');
        document.querySelector('.reponse').classList.add('changeparent');
        }
    
    }
});
