const red = document.getElementById('Red')
red.addEventListener('click',()=>{
  red.style.backgroundColor='red';
  red.style.color='white';
})

const blue = document.getElementById('Blue')
blue.addEventListener('click',()=>{
  blue.style.backgroundColor='blue';
  blue.style.color='white';
})

const yellow = document.getElementById('Yellow')
yellow.addEventListener('click',()=>{
  yellow.style.backgroundColor='yellow';
  yellow.style.color='black';
})

const green = document.getElementById('Green')
green.addEventListener('click',()=>{
  green.style.backgroundColor='green'
  green.style.color='white';
})

const nameinput = document.getElementById('name')
const button = document.querySelector('button')
const title = document.getElementById('greet')

button.addEventListener('click',()=>{
  const enteredname = nameinput.value.trim();
  if(enteredname===''){ 
    title.textContent = 'Hello'
    return;
  }
  title.textContent=`Hello, ${enteredname}`;
})