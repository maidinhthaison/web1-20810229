const API = "https://web1-api.herokuapp.com/api";
const AUTHENTICATE_API = "https://web1-api.herokuapp.com/users";

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
  if (gotoComment) {
    window.location.href = "#comments";
  }
}

Handlebars.registerHelper("formatDate", function (date) {
  let formatDate = new Date(date);
  let options = {
    weekdays: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZonename: "short",
  };
  return formatDate.toLocaleDateString("en-US", options);
});

/** Authenticate **/

async function getAuthenticateToken() {
  let postData = {
    username: username,
    password: password
  };
  let response = await fetch(`${AUTHENTICATE_API}/authenticate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
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
