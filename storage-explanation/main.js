const form = document.querySelector("form");
const inp = document.querySelector('input');
//JSON, stringify, parse

window.addEventListener('DOMContentLoaded',()=>{
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users',JSON.stringify([]));
    }
})


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = new Date()
  const user = {
    id: id.getUTCMilliseconds(),
    fullName: inp.value
  };
  const usersLocalArr = JSON.parse(localStorage.getItem('users'));
  usersLocalArr.push(user);
  localStorage.setItem('users',JSON.stringify(usersLocalArr));
  inp.value = '';
});

// inp.addEventListener('keyup',(e)=>{
//     localStorage.setItem('fullName',e.target.value);
// });

// window.addEventListener('load',(e)=>{
//     inp.value = sessionStorage.getItem('fullName');
// });