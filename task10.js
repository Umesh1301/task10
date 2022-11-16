// // constructure
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
// }
// Person.prototype.getBirthyear = function(){
//   return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function(){
//   return `${this.firstName} ${this.lastName}`;

// }


// create Class
// class Person{
//   constructor(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }

//   getBirthyear(){
//     return this.dob.getFullYear();
//   }

//   getFullName()
//   {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// // instantiate object
// const person1 = new Person('john', 'doe', "3-4-1970");
// const person2 = new Person("mary", "com", "3-4-1900");
// const person3 = new Person("shree", "devi", "3-4-1982");

// console.log(person1);
// console.log(person1.getFullName());




// console.log(window);

// alert(1);
// single Element Selector
// console.log(document.getElementById('my-form'));
// const a = document.getElementById('my-form');
// console.log(a);
// console.log(document.querySelector('h1'));




// multiple Element Selector
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));
// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));
// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'hi Everyone';
// ul.children[1].innerText = 'one';
// ul.lastElementChild.innerHTML = '<h4>hey</h4>';

// const btn = document.querySelector('.btn');
// // btn.style.background = 'red';

// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   // console.log(e.target.className);
//   document.querySelector('#my-form').style.background ='#ccc';
//   document.querySelector('body').classList.add('bg-dark');
//   document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';

// });

// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');
// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e){
//   e.preventDefault();

//   // console.log(nameInput.value);
//   if(nameInput.value === '' || emailInput.value === ''){
//     msg.classList.add('error');
//     // alert('please enter the field values');
//     msg.innerHTML = 'pleaseenter';
//     setTimeout(() => msg.remove(),2000);
//     }else{
//     // console.log('success');
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
//     userList.appendChild(li);

    // clear field
    // nameInput.value = '';
    // emailInput.value = '';

    // localStorage.setItem('nameInput','nameInput.value');

//     }

// }




// localStorage.setItem('name' , 'boby');
// localStorage.removeItem('name');

// sessionStorage.setItem('name', 'hary')
// // console.log(sessionStorage.getItem('name'));
// sessionStorage.setItem('name', 'john');

// // document.cookie = 'name=ranu';
// document.cookie = 'name=ranu; Expires=' + new Date(2020, 0, 1)
// .toUTCString()

// document.cookie = 'lastname=bhai; Expires=' + new Date(2020, 0, 1)
// .toUTCString()


