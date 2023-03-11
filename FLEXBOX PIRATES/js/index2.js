let twopirate=document.querySelector(".twofrog");
let bounton=document.querySelector(".btn-danger1");
let areatxt=document.getElementById('inp');

areatxt.addEventListener('keypress', (e) =>{
    if(e.key !== 'Enter') {
        document.querySelector('.reponse').classList.remove('changeparent');
    val=(document.getElementById('inp').value + e.key).toLowerCase().trim().replace(/ /g,"");
    console.log(val);
    if ((val =='justify-content:center') || (val =='justify-content:center;')) {
        twopirate.classList.add('vrai2');
        bounton.removeAttribute('disabled');
        bounton.classList.add('change');
    }
    else{
            twopirate.classList.remove('vrai2');
            bounton.classList.remove('change');
        }
}
else{
    if (!((val =='justify-content:center') || (val =='justify-content:center;') )){
        document.querySelector('.reponse').classList.add('changeparent');
    }
    else{
        bounton.click();
    }
}
});