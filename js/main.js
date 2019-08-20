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
      Data.newName = data.value
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
  console.log(Data);
}

name.addEventListener('input', (event) => {
  event.target.value = event.target.value.replace(/[^a-zA-Z@]+/, '');
  eventHandleToData(event);
});
surName.addEventListener('input', (event) => {
  event.target.value = event.target.value.replace(/[^a-zA-Z@]+/, '');
  eventHandleToData(event)
});
email.addEventListener('input', (event) => {
  eventHandleToData(event)
});
phone.addEventListener('input', (event) => eventHandleToData(event));
password.addEventListener('input', (event) => eventHandleToData(event));