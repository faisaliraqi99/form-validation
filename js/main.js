let name = document.querySelector('.name');
let surName = document.querySelector('.surname');
let email = document.querySelector('.email');
let phone = document.querySelector('.phone');
let password = document.querySelector('.password');

let Data = {
  newName: '',
  newSurName: '',
  newEmail: '',
  newPhone: '',
  newPassword: ''
}

function eventHandleToData(commingEvent){
  let data = { value: commingEvent.target.value, class: commingEvent.target.className}
  switch(data.class) {
    case 'name':
      // let regex = /^[a-zA-Z0-9@]+$/;
      data.value = data.value.replace(/[^a-zA-Z0-9@]+/, '');
      Data.newName = data.value
      console.log(data.value)
    break;
    case 'surname':
      Data.newSurName = data.value
    break;
    case 'email':
      Data.newEmail = data.value
    break;
    case 'phone':
      Data.newPhone = data.value
    break;
    case 'password':
      Data.newPassword = data.value
    break;
    default:
      console.log('Error', data)
    break;
  }

}

name.addEventListener('input', (event) => eventHandleToData(event));
surName.addEventListener('input', (event) => eventHandleToData(event));
email.addEventListener('input', (event) => eventHandleToData(event));
phone.addEventListener('input', (event) => eventHandleToData(event));
password.addEventListener('input', (event) => eventHandleToData(event));