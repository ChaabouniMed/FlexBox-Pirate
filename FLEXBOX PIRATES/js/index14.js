let pirate1=document.querySelector(".frogy1");
let pirate3=document.querySelector(".frogy3");
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
            if(valeur[0]== "order"){
                if(ch[ch.length - 1]==';'){
                    ch2=ch.substr(0,ch.length - 1);
                    if(ch2 < 0){
                        pirate1.classList.add('vrai1');
                        pirate3.classList.add('vrai3');
                        bounton.removeAttribute('disabled');
                        bounton.classList.add('change');
                    }
                }
                else if(ch < 0){
                    pirate1.classList.add('vrai1');
                    pirate3.classList.add('vrai3');
                    bounton.removeAttribute('disabled');
                    bounton.classList.add('change');
                }
                else{
                    pirate1.classList.remove('vrai1');
                    pirate3.classList.remove('vrai3');
                    bounton.classList.remove('change');
                    bounton.getAttribute('disabled');
                }
            }
            else{
                pirate1.classList.remove('vrai1');
                pirate3.classList.remove('vrai3');
                bounton.classList.remove('change');
                bounton.getAttribute('disabled');
            }
    }
    else{
        pirate1.classList.remove('vrai1');
        pirate3.classList.remove('vrai3');
        bounton.classList.remove('change');
        bounton.getAttribute('disabled');
        }
}
else{
    val=(document.getElementById('inp').value).toLowerCase().trim().replace(/ /g,"");
    valeur=val.split(':');
    ch=valeur[1];
        if ((valeur.length === 2)){
            if(valeur[0] == "order"){
                if(ch[ch.length - 1]==';'){
                    ch2=ch.substr(0,ch.length - 1);
                    if(ch2 < 0){
                        bounton.click();
                    }
                }
                else if(ch < 0){
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
