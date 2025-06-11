const head= document.getElementById('head');
console.log(head)

head.style.color='red';

head.addEventListener('click', ()=>{
    console.log('h1 element clicked')
    head.style.backgroundColor='brown'
})
const btn= document.getElementById('btn');
let x= 0;
btn.addEventListener('click', ()=>{
    const inner= document.getElementById('inner');
    x = x+10;
    if(x<=100){
          inner.style.width = x+"%";
    }
})