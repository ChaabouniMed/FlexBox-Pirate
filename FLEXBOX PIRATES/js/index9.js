let threepirate=document.querySelector(".threefrog");
let bounton=document.querySelector(".btn-danger1");
let areatxt=document.getElementById('inp');
let pirate1=document.querySelector(".frogy1")
let pirate2=document.querySelector(".frogy2")
let pirate3=document.querySelector(".frogy3")

areatxt.addEventListener('keypress', (e) =>{
    if(e.key !== 'Enter') {
        document.querySelector('.reponse').classList.remove('changeparent');
        val=(document.getElementById('inp').value + e.key).toLowerCase().trim().replace(/ /g,"");
    console.log(val);
    if ((val =='flex-direction:column') || (val =='flex-direction:column;')){
        pirate1.classList.add('change1');
        pirate2.classList.add('change2');
        pirate3.classList.add('change3');
        bounton.removeAttribute('disabled');
        bounton.classList.add('change');
    }
    else{
        pirate1.classList.remove('change1');
        pirate2.classList.remove('change2');
        pirate3.classList.remove('change3');
        bounton.classList.remove('change');
        }
}
else{
    if (!((val =='flex-direction:column') || (val =='flex-direction:column;'))){
        document.querySelector('.reponse').classList.add('changeparent');
    }
    else{
        bounton.click();
    }  
}
});