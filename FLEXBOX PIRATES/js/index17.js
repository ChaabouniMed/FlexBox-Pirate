let threepirate=document.querySelector(".threefrog");
let bounton=document.querySelector(".btn-danger1");
let areatxt=document.getElementById('inp');
let pirate2=document.querySelector(".frogy2")
let pirate3=document.querySelector(".frogy3")
let pirate4=document.querySelector(".frogy4")
let pirate5=document.querySelector(".frogy5")
let pirate6=document.querySelector(".frogy6")
let pirate7=document.querySelector(".frogy7")
let pirate8=document.querySelector(".frogy8")
let pirate9=document.querySelector(".frogy9")

areatxt.addEventListener('keypress', (e) =>{
    if(e.key !== 'Enter') {
        document.querySelector('.reponse').classList.remove('changeparent');
        val=(document.getElementById('inp').value + e.key).toLowerCase().trim().replace(/ /g,"");
    console.log(val);
    if ((val =='flex-wrap:wrap') || (val =='flex-wrap:wrap;')){
        pirate2.classList.add('change2');
        pirate3.classList.add('change3');
        pirate4.classList.add('change4');
        pirate5.classList.add('change5');
        pirate6.classList.add('change6');
        pirate7.classList.add('change7');
        pirate8.classList.add('change8');
        pirate9.classList.add('change9');
        bounton.removeAttribute('disabled');
        bounton.classList.add('change');
    }
    else{
        pirate2.classList.remove('change2');
        pirate3.classList.remove('change3');
        pirate4.classList.remove('change4');
        pirate5.classList.remove('change5');
        pirate6.classList.remove('change6');
        pirate7.classList.remove('change7');
        pirate8.classList.remove('change8');
        pirate9.classList.remove('change9');
        bounton.classList.remove('change');
        bounton.getAttribute('disabled');
        }
}
else{
    if (!((val =='flex-wrap:wrap') || (val =='flex-wrap:wrap;'))){
        document.querySelector('.reponse').classList.add('changeparent');
    }
    else{
        bounton.click();
    }
}
});