const NAV_CONTAINER = '#pageNav';

function renderNavItem(tab) {
	let className = 'menu-link-el ';

	// if (currPage === tab.url) {
	// 	className += 'active';
	// }

	if (!tab.inner) {
		return `
        <li class="${className}">
            <a href="${tab.url}" class="menu-link nav-link"> ${tab.title}</a>
        </li>
        `;
	}

	let container = `
    <li>
        <a href="${tab.url}" class="menu-link nav-link">
           ${tab.title}
        </a>

        <ul class="nav-list nav-list-inner">
           {content}
        </ul>
    </li>
        `;

	let links = '';

	for (let link of tab.inner) {
		links += `
        <li class="menu-link-el">
            <a href="${link.url}" class="menu-link nav-link"> ${link.title} <sup>${link.method}</sup> </a>
        </li>
        `;
	}

	container = container.replace('{content}', links);

	return container;
}

function hotfixScrollSpy(scrollSpy) {
	let curScroll = getCurrentScroll();

	let offsets = scrollSpy['_offsets'];
	for (let i = 0; i < offsets.length; i++) {
		offsets[i] += curScroll;
	}
}

function getCurrentScroll() {
	return window.pageYOffset || document.documentElement.scrollTop;
}

function renderNav(tabs) {
	const container = document.querySelector(NAV_CONTAINER);

	if (!container) {
		console.warn('Can not find tabs container');
		return;
	}

	let navContainer =
		'<nav id="nav_el" class="nav navbar nav-menu"><ul class="nav-list">{result}</ul></nav>';
	let result = '';

	for (tab of tabs) {
		result += renderNavItem(tab, currentPage);
	}

	navContainer = navContainer.replace('{result}', result);

	container.innerHTML = navContainer;
	window.scrollTo(0, 0);
}

function currentPage() {
	let path = window.location.href;
	let split = path.split('/');
	const last = split[split.length - 1];
	const justName = last.split('.')[0];
	return justName;
}
