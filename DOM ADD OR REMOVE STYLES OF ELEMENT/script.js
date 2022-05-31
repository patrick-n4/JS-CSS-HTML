let Btn=document.querySelectorAll('button');
let doBtn=Btn[0];
let undoBtn=Btn[1];
let txt=document.querySelectorAll('p');
let element=document.createElement('button');
element.textContent=("Click me to show hello world");
document.all[9].appendChild(element);

doBtn.addEventListener('click',function(){document.querySelector('p').classList.remove('text')});
undoBtn.addEventListener('click',function(){document.querySelector('p').classList.add('text')});
element.addEventListener('click',function(){let ele=document.createElement('h1')
ele.textContent="Hello world"; 
ele.style.textTransform="uppercase"
document.body.appendChild(ele)});
