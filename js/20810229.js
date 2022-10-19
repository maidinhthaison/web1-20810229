const API = "https://web1-api.herokuapp.com/api/";

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
