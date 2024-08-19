window.addEventListener('scroll',function(){
    var scrollPosition=window.scrollY;
    var btn=document.getElementById('btn')
    if(scrollPosition>0){
        btn.style.display='block'
    }
    else{
        btn.style.display='none'
    }

})