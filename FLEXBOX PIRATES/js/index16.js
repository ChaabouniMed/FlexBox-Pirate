let pirateye1=document.querySelector(".frogy1");
let pirateye2=document.querySelector(".frogy4");
let pirategr1=document.querySelector(".frogy6");
let pirategr2=document.querySelector(".frogy7");
let bounton=document.querySelector(".btn-danger1");
let areatxt=document.getElementById('inp');
let areatxt2=document.getElementById('inp1');

areatxt.addEventListener('keypress', (e) =>{
    if(e.key !== 'Enter') {
        document.querySelector('.reponse').classList.remove('changeparent');
        val=(areatxt.value + e.key).toLowerCase().trim().replace(/ /g,"");
        valrep2=areatxt2.value.toLowerCase().trim().replace(/ /g,"");
        valeur=val.split(':');
        valeur2=valrep2.split(':');
        console.log(valeur);
        console.log(valeur2);
        ch=valeur[1];
        chrep2=valeur2[1];
        if ((valeur.length === 2)){
            if(valeur[0]== "order"){
                if(ch[ch.length - 1]==';'){
                    ch2=ch.substr(0,ch.length - 1);
                    if(ch2 > 0){
                        pirateye1.classList.add('vraiye1');
                        pirateye2.classList.add('vraiye2');
                        pirategr1.classList.add('vraigr1');
                        pirategr2.classList.add('vraigr2');
                        if((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-self:end') 
                        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-self:end;')
                        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-self:flex-end;')
                        || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-self:flex-end')){
                            bounton.removeAttribute('disabled');
                            bounton.classList.add('change');
                        }
                        else{
                            bounton.classList.remove('change');
                            bounton.getAttribute('disabled');
                        }  
                    }
                }
                else if(ch > 0){
                    console.log("ch>0");
                    pirateye1.classList.add('vraiye1');
                    pirateye2.classList.add('vraiye2');
                    pirategr1.classList.add('vraigr1');
                    pirategr2.classList.add('vraigr2');
                    if((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-self:end') 
                    || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-self:end;')
                    || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-self:flex-end;')
                    || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-self:flex-end')){
                        bounton.removeAttribute('disabled');
                        bounton.classList.add('change');
                    }
                    else{
                        bounton.classList.remove('change');
                        bounton.getAttribute('disabled');
                    }
                }
                else if(valeur2.length === 2){
                    if(valeur2[0]== "order"){
                        if(chrep2[chrep2.length - 1]==';'){
                            ch3=chrep2.substr(0,chrep2.length - 1);
                            if(!(ch3 > 0)){
                                pirateye1.classList.remove('vraiye1');
                                pirateye2.classList.remove('vraiye2');
                                pirategr1.classList.remove('vraigr1');
                                pirategr2.classList.remove('vraigr2');
                                bounton.classList.remove('change');
                                bounton.getAttribute('disabled');
                            }
                        }
                        else if(!(chrep2 > 0)){
                            pirateye1.classList.remove('vraiye1');
                            pirateye2.classList.remove('vraiye2');
                            pirategr1.classList.remove('vraigr1');
                            pirategr2.classList.remove('vraigr2');
                            bounton.classList.remove('change');
                            bounton.getAttribute('disabled');
                        }
                }
                else{
                    pirateye1.classList.remove('vraiye1');
                    pirateye2.classList.remove('vraiye2');
                    pirategr1.classList.remove('vraigr1');
                    pirategr2.classList.remove('vraigr2');
                    bounton.classList.remove('change');
                    bounton.getAttribute('disabled');
                }
            }
            else{
                pirateye1.classList.remove('vraiye1');
                pirateye2.classList.remove('vraiye2');
                pirategr1.classList.remove('vraigr1');
                pirategr2.classList.remove('vraigr2');
                bounton.classList.remove('change');
                bounton.getAttribute('disabled');
            }
        }
        //-----------------------------
        //---------------------------------
        //---------------------------------
    }
    else if (!((val == "align-self:end")||(val == "align-self:end;")
    ||(val == "align-self:flex-end")||(val == "align-self:flex-end;"))){
    if(valeur2.length === 2){
        console.log("ici");
        if(valeur2[0]== "order"){
            if(chrep2[chrep2.length - 1]==';'){
                ch3=chrep2.substr(0,chrep2.length - 1);
                if(!(ch3 > 0)){
                    pirateye1.classList.remove('vraiye1');
                    pirateye2.classList.remove('vraiye2');
                    pirategr1.classList.remove('vraigr1');
                    pirategr2.classList.remove('vraigr2');
                }
            }
            else if(!(chrep2 > 0)){
                pirateye1.classList.remove('vraiye1');
                pirateye2.classList.remove('vraiye2');
                pirategr1.classList.remove('vraigr1');
                pirategr2.classList.remove('vraigr2');
            }
    }
    else{
        pirateye1.classList.remove('vraiye1');
        pirateye2.classList.remove('vraiye2');
        pirategr1.classList.remove('vraigr1');
        pirategr2.classList.remove('vraigr2');
    }
}
    else{
        pirateye1.classList.remove('vraiye1');
        pirateye2.classList.remove('vraiye2');
        pirategr1.classList.remove('vraigr1');
        pirategr2.classList.remove('vraigr2');
    }
}

    if ((val =='align-self:end') || (val =='align-self:end;') || (val =='align-self:flex-end') 
    || (val =='align-self:flex-end;')){
        pirateye1.classList.add('vraiye1bot');
        pirateye2.classList.add('vraiye2bot');
        if(valeur2.length === 2){
            if(valeur2[0]== "order"){
                if(chrep2[chrep2.length - 1]==';'){
                    ch3=chrep2.substr(0,chrep2.length - 1);
                    if((ch3 > 0)){
                        bounton.removeAttribute('disabled');
                        bounton.classList.add('change');
                    }
                }
                else if((chrep2 > 0)){
                    bounton.removeAttribute('disabled');
                    bounton.classList.add('change');
                }
                else{
                    bounton.getAttribute('disabled');
                    bounton.classList.remove('change');
                }
            }
            else{
                bounton.getAttribute('disabled');
                bounton.classList.remove('change');
            }
        }
        else{
            bounton.getAttribute('disabled');
            bounton.classList.remove('change');
        }
    }
    else{
        if ((valeur.length === 2) && (!(valeur[0] == "order"))){
            bounton.classList.remove('change');
            bounton.getAttribute('disabled');
            if(!((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-self:end;')
            || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-self:end')
            || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-self:flex-end')
            || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-self:flex-end;'))){
                pirateye1.classList.remove('vraiye1bot');
                pirateye2.classList.remove('vraiye2bot');   
                bounton.classList.remove('change');
                bounton.getAttribute('disabled');
                }
        }
        else if(!(ch[ch.length - 1]==';')) {
            if(!(valeur[1] > 0)){
            bounton.classList.remove('change');
            bounton.getAttribute('disabled');
            if(!((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-self:end;')
            || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-self:end')
            || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-self:flex-end')
            || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-self:flex-end;'))){
                pirateye1.classList.remove('vraiye1bot');
                pirateye2.classList.remove('vraiye2bot');   
                bounton.classList.remove('change');
                bounton.getAttribute('disabled');
                }
        }
    }
    else{
        ch2=ch.substr(0,ch.length - 1);
                    if(!(ch2 > 0)){
                        bounton.classList.remove('change');
            bounton.getAttribute('disabled');
            if(!((areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-self:end;')
            || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-self:end')
            || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-self:flex-end')
            || (areatxt2.value.toLowerCase().trim().replace(/ /g,"") =='align-self:flex-end;'))){
                pirateye1.classList.remove('vraiye1bot');
                pirateye2.classList.remove('vraiye2bot');   
                bounton.classList.remove('change');
                bounton.getAttribute('disabled');
                }
                    }
    }
    }
}
else{
    areatxt2.focus();
}
})


areatxt2.addEventListener('keypress', (e) =>{
    if(e.key !== 'Enter') {
        document.querySelector('.reponse').classList.remove('changeparent');
        val=(areatxt2.value + e.key).toLowerCase().trim().replace(/ /g,"");
        valrep1=areatxt.value.toLowerCase().trim().replace(/ /g,"");
        valeur=val.split(':');
        valeur1=valrep1.split(':');
        console.log(valeur);
        console.log(valeur1);
        ch=valeur[1];
        chrep1=valeur1[1];
        if ((valeur.length === 2)){
            if(valeur[0]== "order"){
                if(ch[ch.length - 1]==';'){
                    ch2=ch.substr(0,ch.length - 1);
                    if(ch2 > 0){
                        pirateye1.classList.add('vraiye1');
                        pirateye2.classList.add('vraiye2');
                        pirategr1.classList.add('vraigr1');
                        pirategr2.classList.add('vraigr2');
                        if((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-self:end') 
                        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-self:end;')
                        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-self:flex-end;')
                        || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-self:flex-end')){
                            bounton.removeAttribute('disabled');
                            bounton.classList.add('change');
                        }
                        else{
                            bounton.classList.remove('change');
                            bounton.getAttribute('disabled');
                        }  
                    }
                }
                else if(ch > 0){
                    console.log("ch>0");
                    pirateye1.classList.add('vraiye1');
                    pirateye2.classList.add('vraiye2');
                    pirategr1.classList.add('vraigr1');
                    pirategr2.classList.add('vraigr2');
                    if((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-self:end') 
                    || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-self:end;')
                    || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-self:flex-end;')
                    || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-self:flex-end')){
                        bounton.removeAttribute('disabled');
                        bounton.classList.add('change');
                    }
                    else{
                        bounton.classList.remove('change');
                        bounton.getAttribute('disabled');
                    }
                }
                else if(valeur1.length === 2){
                    console.log("ici");
                    if(valeur1[0]== "order"){
                        if(chrep1[chrep1.length - 1]==';'){
                            ch3=chrep1.substr(0,chrep1.length - 1);
                            if(!(ch3 > 0)){
                                pirateye1.classList.remove('vraiye1');
                                pirateye2.classList.remove('vraiye2');
                                pirategr1.classList.remove('vraigr1');
                                pirategr2.classList.remove('vraigr2');
                            }
                        }
                        else if(!(chrep1 > 0)){
                            pirateye1.classList.remove('vraiye1');
                            pirateye2.classList.remove('vraiye2');
                            pirategr1.classList.remove('vraigr1');
                            pirategr2.classList.remove('vraigr2');
                        }
                }
                else{
                    pirateye1.classList.remove('vraiye1');
                    pirateye2.classList.remove('vraiye2');
                    pirategr1.classList.remove('vraigr1');
                    pirategr2.classList.remove('vraigr2');
                }
            }
            else{
                pirateye1.classList.remove('vraiye1');
                pirateye2.classList.remove('vraiye2');
                pirategr1.classList.remove('vraigr1');
                pirategr2.classList.remove('vraigr2');
            }
        }
        else if(valeur1.length === 2){
            console.log("ici");
            if(valeur1[0]== "order"){
                if(chrep1[chrep1.length - 1]==';'){
                    ch3=chrep1.substr(0,chrep1.length - 1);
                    if(!(ch3 > 0)){
                        pirateye1.classList.remove('vraiye1');
                        pirateye2.classList.remove('vraiye2');
                        pirategr1.classList.remove('vraigr1');
                        pirategr2.classList.remove('vraigr2');
                    }
                }
                else if(!(chrep1 > 0)){
                    pirateye1.classList.remove('vraiye1');
                    pirateye2.classList.remove('vraiye2');
                    pirategr1.classList.remove('vraigr1');
                    pirategr2.classList.remove('vraigr2');
                }
        }
        else{
            pirateye1.classList.remove('vraiye1');
            pirateye2.classList.remove('vraiye2');
            pirategr1.classList.remove('vraigr1');
            pirategr2.classList.remove('vraigr2');
        }
    }
    else{
        pirateye1.classList.remove('vraiye1');
        pirateye2.classList.remove('vraiye2');
        pirategr1.classList.remove('vraigr1');
        pirategr2.classList.remove('vraigr2');
    }
    }
    else if (!((val == "align-self:end")||(val == "align-self:end;")
    ||(val == "align-self:flex-end")||(val == "align-self:flex-end;"))){
    if(valeur1.length === 2){
        console.log("ici");
        if(valeur1[0]== "order"){
            if(chrep1[chrep1.length - 1]==';'){
                ch3=chrep1.substr(0,chrep1.length - 1);
                if(!(ch3 > 0)){
                    pirateye1.classList.remove('vraiye1');
                    pirateye2.classList.remove('vraiye2');
                    pirategr1.classList.remove('vraigr1');
                    pirategr2.classList.remove('vraigr2');
                }
            }
            else if(!(chrep1 > 0)){
                pirateye1.classList.remove('vraiye1');
                pirateye2.classList.remove('vraiye2');
                pirategr1.classList.remove('vraigr1');
                pirategr2.classList.remove('vraigr2');
            }
    }
    else{
        pirateye1.classList.remove('vraiye1');
        pirateye2.classList.remove('vraiye2');
        pirategr1.classList.remove('vraigr1');
        pirategr2.classList.remove('vraigr2');
    }
}
    else{
        pirateye1.classList.remove('vraiye1');
        pirateye2.classList.remove('vraiye2');
        pirategr1.classList.remove('vraigr1');
        pirategr2.classList.remove('vraigr2');
    }
}

    if ((val =='align-self:end') || (val =='align-self:end;') || (val =='align-self:flex-end') 
    || (val =='align-self:flex-end;')){
        pirateye1.classList.add('vraiye1bot');
        pirateye2.classList.add('vraiye2bot');
        if(valeur1.length === 2){
            if(valeur1[0]== "order"){
                if(chrep1[chrep1.length - 1]==';'){
                    ch3=chrep1.substr(0,chrep1.length - 1);
                    if((ch3 > 0)){
                        bounton.removeAttribute('disabled');
                        bounton.classList.add('change');
                    }
                }
                else if(!(chrep1 > 0)){
                    bounton.removeAttribute('disabled');
                    bounton.classList.add('change');
                }
                else{
                    bounton.getAttribute('disabled');
                    bounton.classList.remove('change');
                }
            }
            else{
                bounton.getAttribute('disabled');
                bounton.classList.remove('change');
            }
        }
        else{
            bounton.getAttribute('disabled');
            bounton.classList.remove('change');
        }
    }
    else{
        if ((valeur.length === 2) && (!(valeur[0] == "order"))){
            bounton.classList.remove('change');
            bounton.getAttribute('disabled');
            if(!((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-self:end;')
            || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-self:end')
            || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-self:flex-end')
            || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-self:flex-end;'))){
                pirateye1.classList.remove('vraiye1bot');
                pirateye2.classList.remove('vraiye2bot');   
                bounton.classList.remove('change');
                bounton.getAttribute('disabled');
                }
        }
        else if(!(ch[ch.length - 1]==';')) {
            if(!(valeur[1] > 0)){
            bounton.classList.remove('change');
            bounton.getAttribute('disabled');
            if(!((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-self:end;')
            || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-self:end')
            || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-self:flex-end')
            || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-self:flex-end;'))){
                pirateye1.classList.remove('vraiye1bot');
                pirateye2.classList.remove('vraiye2bot');   
                bounton.classList.remove('change');
                bounton.getAttribute('disabled');
                }
        }
    }
    else{
        ch2=ch.substr(0,ch.length - 1);
                    if(!(ch2 > 0)){
                        bounton.classList.remove('change');
            bounton.getAttribute('disabled');
            if(!((areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-self:end;')
            || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-self:end')
            || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-self:flex-end')
            || (areatxt.value.toLowerCase().trim().replace(/ /g,"") =='align-self:flex-end;'))){
                pirateye1.classList.remove('vraiye1bot');
                pirateye2.classList.remove('vraiye2bot');   
                bounton.classList.remove('change');
                bounton.getAttribute('disabled');
                }
                    }
    }
    }
}
else{
    val2=(areatxt2.value).toLowerCase().trim().replace(/ /g,"");
    val1=(areatxt.value).toLowerCase().trim().replace(/ /g,"");
    valeur1=val1.split(':');
    valeur2=val2.split(':');
    if((valeur1.length ==2 ) && (valeur1[0] == "order")){
        ch=valeur1[1];
        if(ch[ch.length - 1]==';'){
            ch2=ch.substr(0,ch.length - 1);
            if(ch2 > 0){
                if((val2=="align-self:end") || (val2=="align-self:end;") || 
                (val2=="align-self:flex-end") || (val2=="align-self:flex-end;")){
                    bounton.click();
                }
                else{
                    document.querySelector('.reponse').classList.add('changeparent')
                }
            }
            else{
                document.querySelector('.reponse').classList.add('changeparent')
            }
        }
        else if(ch > 0){
            if((val2=="align-self:end") || (val2=="align-self:end;") || 
                (val2=="align-self:flex-end") || (val2=="align-self:flex-end;")){
                    bounton.click();
                }
                else{
                    document.querySelector('.reponse').classList.add('changeparent')
                }
        }
        else{
            document.querySelector('.reponse').classList.add('changeparent')
        }
}
else if((valeur2.length ==2 ) && (valeur2[0] == "order")){
    ch=valeur2[1];
    if(ch[ch.length - 1]==';'){
        ch2=ch.substr(0,ch.length - 1);
        if(ch2 > 0){
            if((val1=="align-self:end") || (val1=="align-self:end;") || 
            (val1=="align-self:flex-end") || (val1=="align-self:flex-end;")){
                bounton.click();
            }
            else{
                document.querySelector('.reponse').classList.add('changeparent')
            }
        }
        else{
            document.querySelector('.reponse').classList.add('changeparent')
        }
    }
    else if(ch > 0){
        if((val1=="align-self:end") || (val1=="align-self:end;") || 
            (val1=="align-self:flex-end") || (val1=="align-self:flex-end;")){
                bounton.click();
            }
            else{
                document.querySelector('.reponse').classList.add('changeparent')
            }
    }
    else{
        document.querySelector('.reponse').classList.add('changeparent')
    }
}
else{
    document.querySelector('.reponse').classList.add('changeparent')
}
}
})



