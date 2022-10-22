(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['details-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"container py-5\">\n    <h1 class=\"pb-3\">"
    + container.escapeExpression(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</h1>\n    <div class=\"text-black-50\">"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"description") : depth0), depth0)) != null ? stack1 : "")
    + "</div>\n</section>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"container-fluid\" id=\"banner-small\"></section>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":7,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['news-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"col\">\n        <div class=\"float-start me-3\">\n            <div class=\"date text-white text-center rounded-4 py-1\">\n                <h3>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"date") : depth0), depth0))
    + "</h3>\n            </div>\n            <a href=\"?request=news/"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\" class=\"btn btn-link ps-0\">Read more</a>\n        </div>\n        <div>\n            <h3>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</h3>\n            <p>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"summary") : depth0), depth0))
    + "</p>\n        </div>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"row py-3\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":15,"column":13}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['products-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"col-lg-3 col-md-6 col-sm-12\">\n        <img src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"imagepath") : depth0), depth0))
    + "\" alt=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\" onmouseover=\"setActiveImagepath(this,'"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"imagepath") : depth0), depth0))
    + "')\"\n            onmouseout=\"setActiveImagepath(this,'"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"imagepath") : depth0), depth0))
    + "', false)\" />\n        <h3>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</h3>\n        <p>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"summary") : depth0), depth0))
    + "</p>\n        <a class=\"readmore btn btn-link pt-0\" href=\"?request=products/"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\">Read more</a>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"row text-center py-5\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":10,"column":13}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
})();