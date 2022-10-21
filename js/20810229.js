const API = 'https://web1-api.herokuapp.com/api';
const AUTHENTICATE_API = 'https://web1-api.herokuapp.com/users';

const username = 'test';
const password = '1c3cr3@m';
async function loadData(request, templateId, viewId) {
	const response = await fetch(`${API}/${request}`);
	const data = await response.json();
	console.log(data);
	var source = document.getElementById(templateId).innerHTML;
	var template = Handlebars.compile(source);
	var context = { data: data };
	var view = document.getElementById(viewId);
	view.innerHTML = template(context);
}
/* Blog and comment */
async function loadBlogs(request, currentPage, templateId, viewId) {
	const response = await fetch(`${API}/${request}?page=${currentPage}`);
	const context = await response.json();
	context.currentPage = currentPage;

	var source = document.getElementById(templateId).innerHTML;
	var template = Handlebars.compile(source);

	var view = document.getElementById(viewId);
	view.innerHTML = template(context);
}

async function loadBlogComments(
	blogId,
	templateId,
	viewId,
	gotoComment = false
) {
	await loadData(`blogs/${blogId}`, templateId, viewId);
	checkLogin();
	if (gotoComment) {
		window.location.href = '#comments';
	}
}
async function addComment(e) {
	e.preventDefault();
	let token = localStorage.getItem('token');
	let postData = {
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		comment: document.getElementById('comment').value,
		blogId: document.getElementById('blogId').value,
		agree: (document.getElementById('agree').value == 1)
	};
	let responseMessage = document.getElementById('responseMessage');
	try {
		let response = await fetch(`${AUTHENTICATE_API}/comment`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': 'Bearer ' + token,
			},
			body: JSON.stringify(postData)
		});
		let result = await response.json();
		if (response.status == 200) {
			loadBlogComments(postData.blogId, 'blog-details-template', 'blogs', true);
		} else {
			throw new Error(result.message);
		}

	} catch (error) {
		responseMessage.innerHTML = result.message;
		responseMessage.className = 'text-danger';
	}
}
/** **/
Handlebars.registerHelper('formatDate', function (date) {
	let formatDate = new Date(date);
	let options = {
		weekdays: 'short',
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		timeZonename: 'short',
	};
	return formatDate.toLocaleDateString('en-US', options);
});

/** Authenticate **/

async function getAuthenticateToken(_username, _password) {
	let postData = {
		username: _username,
		password: _password,
	};
	let response = await fetch(`${AUTHENTICATE_API}/authenticate`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		},
		body: JSON.stringify(postData),
	});
	let result = await response.json();
	console.log(result);
	if (response.status == 200) {
		return result.token;
	}
	throw new Error(result.message);
}

/** Login **/
async function login(event) {
	event.preventDefault();
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;
	try {
		let token = await getAuthenticateToken(username, password);
		if (token) {
			localStorage.setItem('token', token);
			document.getElementsByClassName('btn-close')[0].click();
			displayControls();
		}
	} catch (error) {
		document.getElementById('errorMessage').innerHTML = error;
		displayControls(false);
	}
}
function displayControls(isLogin = true) {
	let linkLogins = document.getElementsByClassName('linkLogin');
	let linkLogout = document.getElementsByClassName('linkLogout');
	let displayLogin = 'none';
	let displayLogout = 'block';
	if (!isLogin) {
		displayLogin = 'block';
		displayLogout = 'none';
	}
	for (let i = 0; i < 2; i++) {
		linkLogins[i].style.display = displayLogin;
		linkLogout[i].style.display = displayLogout;
	}

	/* Leave comment */
	let leaveComment = document.getElementById('leave-comment');
	if (leaveComment) {
		leaveComment.style.display = displayLogout;
	}
}
async function checkLogin() {
	let isLogin = await verifyToken();
	displayControls(isLogin);
}

async function verifyToken() {
	let token = localStorage.getItem('token');
	if (token) {
		let response = await fetch(`${AUTHENTICATE_API}/verify`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': 'Bearer ' + token,
			},
		});
		if (response.status == 200) {
			return true;
		}
	}
	return false;
}

function logout() {
	localStorage.clear();
	displayControls(false);
}