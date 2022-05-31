var x=0;
let add=document.querySelector('.add').addEventListener('click',()=>{
    x++;
    document.querySelector('.number').innerHTML=x;
    document.querySelector('.minus').style.opacity=1;
let total=document.querySelector('.total').innerHTML=x;
    
})
let minus=document.querySelector('.minus').addEventListener('click',()=>{
    x--;
    if(x==0 || x<0){
    document.querySelector('.minus').style.opacity=0.3;
    document.querySelector('.number').innerHTML="Zero";
    x=0;
    document.querySelector('.total').innerHTML="Zero";
        }else{
        document.querySelector('.minus').style.opacity=1;
        document.querySelector('.number').innerHTML=x;
        let total=document.querySelector('.total').innerHTML=x;

    }
    
})
let reset=document.querySelector('.reset').addEventListener('click',()=>{
    x=0;
    document.querySelector('.number').innerHTML="Zero";
});
let del=document.querySelector('.delete').addEventListener('click',()=>{
    document.querySelector('.data').classList.add('none');
})

