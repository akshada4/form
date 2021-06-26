const movePlaceholder = (e) => {
	if (e.target.value){
		const label = e.target.nextElementSibling;
		label.setAttribute('style',
			'top: -1rem; padding: 0 1rem;');
	}
}

// const saveData = (e) => {
// 	e.preventDefault();
// 	const data = {
// 		name: e.target.elements.name.value,
// 		email:  e.target.elements.email.value,
// 		phone:  e.target.elements.phone.value,
// 		address:  e.target.elements.address.value,
// 		city:  e.target.elements.city.value,
// 		state:  e.target.elements.state.value,
// 		postalCode:  e.target.elements['postal-code'].value,
// 		country:  e.target.elements.country.value
// 	};
// 	dataSet.push(data);
// }

// const dataSet = [];
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const address = document.querySelector('#address');
const city = document.querySelector('#city');
const state = document.querySelector('#state');
const postalCode = document.querySelector('#postal-code');
const country = document.querySelector('#country');
const form = document.querySelector('form');
name.addEventListener('focusout', movePlaceholder);
email.addEventListener('focusout', movePlaceholder);
phone.addEventListener('focusout', movePlaceholder);
address.addEventListener('focusout', movePlaceholder);
city.addEventListener('focusout', movePlaceholder);
state.addEventListener('focusout', movePlaceholder);
postalCode.addEventListener('focusout', movePlaceholder);
country.addEventListener('focusout', movePlaceholder);
form.addEventListener('submit',	saveData);

