const currPage = currentPage();

function renderTable(tableData) {
	let table = `
	<table class="table mb-5 mt-5">
		<thead>
			<tr>
				<th>Parameter</th>

				<th>Type</th>
				<th>Required</th>
				<th>Description</th>
			</tr>
		</thead>

		<tbody>
			{result}
		</tbody>
	</table>
	`;

	let result = '';

	for (let row of tableData) {
		result += `
			<tr>
				<td>${row[0]}</td>
				<td><p class="highlight text-capitalize">
					${row[1]}
				</p></td>
				<td><p class="highlight">
					${row[2]}
				</p></td>
				<td>${row[3]}</td>
			</tr>
		`;
	}

	table = table.replace('{result}', result);

	return table;
}

function renderEndpoints(endpoints) {
	const container = document.querySelector('#endpoints');

	let result = '';

	for (let index = 0; index < endpoints.length; index++) {
		const endpoint = endpoints[index];

		result += `
			</br></br>
			<div id="item-9-${index + 1}">
				<p class="method">${endpoint[1]}</p>

				<p class="mb-2">
					<span class="fw-700 mb-2"> ${endpoint[0]} </span>
				</p>

				<p>${endpoint[2]}</p>
			</div>

			${renderTable(endpoint[3])}

			<hr />
		`;
	}

	container.innerHTML = result;

	return endpoints;
}

function fetchNav() {
	fetch(
		'https://sandbox.tripleplaypay.com/api/details?apikey=4a731b24-0beb-457c-9585-2362c6a53cf5'
	).then(async (res) => {
		const json = await res.json();

		const endpoints = renderEndpoints(json);
		const formattedEndpoints = endpoints.map((e, index) => {
			return {
				title: e[0],
				url: `#item-9-${index + 1}`,
			};
		});

		renderNav([
			...window.NAV_MENU[currPage],
			{
				title: 'Endpoints',
				url: '#item-9',
				inner: formattedEndpoints,
			},
		]);

		var scrollSpy = new window.bootstrap.ScrollSpy(document.body, {
			target: '#nav_el',
		});

		setTimeout(() => {
			hotfixScrollSpy(scrollSpy);
		}, 50);
	});
}

fetchNav();
