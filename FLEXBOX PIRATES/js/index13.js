let pirate2=document.querySelector(".frogy2");
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
                    if(ch2 > 0){
                        pirate2.classList.add('vraiye');
                        pirate3.classList.add('vraibl');
                        bounton.removeAttribute('disabled');
                        bounton.classList.add('change');
                    }
                }
                else if(ch > 0){
                    pirate2.classList.add('vraiye');
                    pirate3.classList.add('vraibl');
                    bounton.removeAttribute('disabled');
                    bounton.classList.add('change');
                }
                else{
                    pirate2.classList.remove('vraiye');
                    pirate3.classList.remove('vraibl');
                    bounton.classList.remove('change');
                    bounton.getAttribute('disabled');
                }
            }
            else{
                pirate2.classList.remove('vraiye');
                pirate3.classList.remove('vraibl');
                bounton.classList.remove('change');
                bounton.getAttribute('disabled');
            }
    }
    else{
        pirate2.classList.remove('vraiye');
        pirate3.classList.remove('vraibl');
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
                    if(ch2 > 0){
                        bounton.click();
                    }
                }
                else if(ch > 0){
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
