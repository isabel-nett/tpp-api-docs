const TABS_CONTAINER = '#tabs';
const PAGE_BASE_URL = './';

function renderTab(tab, currPage) {
	let className = 'nav-link ';

	if (currPage === tab.url) {
		className += 'active';
	}

	return `
    <li class="nav-item">
        <a class="${className}" aria-current="page" href="${PAGE_BASE_URL}${tab.url}"
            >${tab.title}</a
        >
    </li>
    `;
}

function renderTabs(tabs, currentPage) {
	const container = document.querySelector(TABS_CONTAINER);

	if (!container) {
		console.warn('Can not find tabs container');
		return;
	}

	let tabsContainer = '<ul class="nav nav-tabs">{result}</ul>';
	let result = '';

	for (tab of tabs) {
		result += renderTab(tab, currentPage);
	}

	tabsContainer = tabsContainer.replace('{result}', result);

	container.innerHTML = tabsContainer;
}

function currentPage() {
	let path = window.location.href;
	let split = path.split('/');
	const page = split[split.length - 1];
	const withoutHash = page.split('#')[0];
	return withoutHash;
}

renderTabs(window.TABS, currentPage());
