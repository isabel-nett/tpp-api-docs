window.snippets = {
	'item-1-1': `triple.generatePaymentForm({
    // Div location for payment form
    containerSelector: '#example',
    amount: 10.00,
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
});`,
	'item-1-2': `triple.generatePaymentForm({
        amount: 10.00,
        paymentOptions: ['credit_card', 'bank', 'crypto']
        newWindow: true,
        // Handle error response here
        onError: (errorData) => {
            console.log('Payment was rejected');
            console.log(errorData);
        },
        // Handle success response here
        onSuccess: (data) => {
            console.log('Payment was successful');
            console.log(data);
        },
    });`,
	'item-1-3': `html----<button id="btn">Pay now</button>`,
	'item-1-4': `
    const button = document.querySelector('#btn');

    button.addEventListener('click', () => {
        // This will open payment form in a new window
        triple.processPayment();
    });`,
	'item-1-5': `triple.clear();`,
	'item-1-6': `triple.generatePaymentForm(...)`,
	'item-2-1': `triple.generatePaymentForm({
        // Container for our payment form
        containerSelector: '#example',
        // Amount
        amount: 100,
    
        // will process payment and save user token
        tokenMode: 'charge',
        //Handle error response
        onError: (errorData) => {
            console.log('This is error');
            console.log(errorData);
        },
        // Handle success response
        onSuccess: (data) => {
            console.log('This is success');
            console.log(data);
        },
    });`,
	'item-2-2': `triple.generatePaymentForm({
        // Container for our payment form
        containerSelector: '#example',
        // will just save user token without payment
        // 'amount' is not required for this action
        tokenMode: 'save',
        //Handle error response
        onError: (errorData) => {
            console.log('This is error');
            console.log(errorData);
        },
        // Handle success response
        onSuccess: (data) => {
            console.log('This is success');
            console.log(data);
        },
    });`,
	'item-2-3': `triple.generatePaymentForm({
        // Container for our payment form
        containerSelector: '#example',
        amount: 1.00,
        //turn off email field requirement, or supply an email instead example: 'test@test.com'
        email: false,
        // will just save user token without payment
        // 'amount' is required for this action
        tokenMode: 'save',
        //Handle error response
        onError: (errorData) => {
            console.log('This is error');
            console.log(errorData);
        },
        // Handle success response
        onSuccess: (data) => {
            console.log('This is success');
            console.log(data);
        },
    });`,
	'item-2-4': `triple.generatePaymentForm({
        // Container for our payment form
        containerSelector: '#example',
        amount: 1,
        // Disable token feature(no saving/no payments with token)
        tokenMode: false,
        //Handle error response
        onError: (errorData) => {
            console.log('This is error');
            console.log(errorData);
        },
        // Handle success response
        onSuccess: (data) => {
            console.log('This is success');
            console.log(data);
        },
    });`,
	'item-3-1': `triple.generatePaymentForm({
        ...,
        zipMode: 'optinal' // or required
        });`,
	'item-3-2': `triple.generatePaymentForm({
    ...,
    address: true
});`,
	'item-3-3': `
    triple.generatePaymentForm({
    ...,
    payBtnText: 'Test payment {amount}'
});`,
	'item-3-4': `triple.generatePaymentForm({
    ...,
    fee: 0.1
});`,
	'item-3-5': `triple.generatePaymentForm({
    ...,
    meta: {...} // any additional fields
});`,
	'item-3-6': `triple.generatePaymentForm({
    ...,
    meta_id: 1 // or [1,2,3]
});`,
	'item-3-7': `triple.generatePaymentForm({
    ...,
    fullName: true
});`,
	'item-3-8': `triple.generatePaymentForm({
    ...,
    billingAddress: true
});`,
	'item-3-9': `triple.generatePaymentForm({
    ...,
    optIn: true
});`,
	'item-3-10': `
    triple.generatePaymentForm({
    ...,
    emailOption: 'required' // or optional or false
});`,
	'item-3-11': `triple.generatePaymentForm({
    ...,
    phoneOption: 'required' // or optional or false
});`,
	'item-4-1': `triple.form({
        containerSelector: '#example',
        // relative or absolute
        url: '/form/7ec17b5b-72c4-48b9-a0ab-cf7f222031e3/test/user@gmail.com',
        // custom height
        height: 450,
    });`,
	'item-5-1': `triple.generatePaymentForm({
        // ... Payment properties
        styles: {
            // button styling
            button: {
                // Color
                color: '#fff',
                // Backgroung
                background: '#93e368',
                // Border radius
                borderRadius: '15px',
                // Font size
                fontSize: '18px',
                // Handle :active pseudo class
                active: {
                    // Change color on active state
                    color: '#eef7e9',
                    // Change background on active state
                    background: '#82cf59',
                },
                // Handle :hover pseudo class
                hover: {
                    color: '#eef7e9',
                    background: '#8ed667',
                },
            },
        },
    });`,
	'item-5-2': `triple.generatePaymentForm({
        // ... Payment properties
        styles: {
            // input styling
            input: {
                color: '#454545',
                background: '#f5faf2',
                borderRadius: '5px',
                borderColor: '#fff',
                borderWidth: '1px',
                height: '50px',
                fontSize: '14px',
                fontWeight: '500',
                // Handle focus pseudo class
                focus: {
                    borderColor: '#c8e3b8',
                    background: 'black',
                    color: '#bfbfbf',
                },
                // Handle error state (when input contains incorrect data)
                error: {
                    borderColor: '#cf6565',
                    background: '#edcccc',
                    color: '#bfbfbf',
                },
                // Placeholder style
                placeholder: {
                    color: '#a3a3a3',
                    fontSize: '14px',
                    fontWeight: '500',
                },
                // Error text style (text below input in error state)
                errorText: {
                    color: 'blue',
                    fontSize: '14px',
                    fontWeight: '500',
                },
            },
        },
    });`,
};

for (let key in window.snippets) {
	let el = document.getElementById(`${key}`);

	if (!el) {
		console.log('break');
		console.log(key);

		continue;
	}

	const defaultCodeType = 'JS';

	const container = document.createElement('div');
	const p = document.createElement('p');
	container.className = 'snippet';

	const pre = document.createElement('pre');
	code = document.createElement('code');
	code.className = 'code';

	let contentText = `${window.snippets[key].trim()}`;
	let codeType = defaultCodeType;

	if (contentText.includes('----')) {
		codeType = contentText.split('----')[0].toUpperCase();
		contentText = contentText.split('----')[1];
	}

	p.textContent = codeType;
	code.textContent = contentText;
	container.appendChild(p);
	container.appendChild(pre);
	pre.appendChild(code);
	el.appendChild(container);
}
