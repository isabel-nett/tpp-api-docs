const defaultBtn = document.querySelector('#example');
const cryptoBtn = document.querySelector('#crypto');
const input = document.querySelector('#input');
const DEFAULT_VALUE = 0.1;

function handleDefaultClick() {
	const triple = new Triple('testapikey');

	triple.generatePaymentForm({
		amount: input.value || DEFAULT_VALUE,
		newWindow: true,
		//Handle error response
		onError: (errorData) => {
			console.log('Error');
			console.log(errorData);
		},
		// Handle success response
		onSuccess: (data) => {
			console.log('Success');
			console.log(data);
		},
	});

	triple.processPayment();
}

function handleCryptoClick() {
	const triple = new Triple('testapikey');

	triple.crypto({
		amount: input.value || DEFAULT_VALUE,
		newWindow: true,
		//Handle error response
		onError: (errorData) => {
			console.log('Error');
			console.log(errorData);
		},
		// Handle success response
		onSuccess: (data) => {
			console.log('Success');
			console.log(data);
		},
	});

	triple.processPayment();
}

defaultBtn.addEventListener('click', handleDefaultClick);
cryptoBtn.addEventListener('click', handleCryptoClick);
