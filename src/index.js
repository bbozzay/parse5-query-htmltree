const walk = require("./walk");


class TreeQuery {
  constructor(htmlTree, returnOne) {
    this.htmlTree = htmlTree;
    this.returnOne = returnOne || false;
    this.matches = () => {
      let matches = new Array();

      matches.hasAttribute = function () {
        walk(matches, (node) => {
          node.attrs &&
          node.attrs.filter((attr) => attr.name == attributeName).length > 0
            ? matches.push(node)
            : false;
        });
        return this;
      };

      matches.hasAttributes = function () {
        walk(this.htmlTree, (node) => {
          node.attrs &&
          node.attrs.filter((attr) => attr.name == attributeName).length > 0
            ? matches.push(node)
            : false;
        });
        return this;
      };

      return matches;
    };
    this.matched = this.matches();
  }

  getElementsByTagName(tag) {
    walk(this.htmlTree, (node) => {
      node.tagName && node.tagName == tag ? this.matched.push(node) : false;
    });
    if (this.returnOne) {
        return this.matched ? this.matched[0] : false;
    }
    return this.matched;
  }

  getElementsByAttribute(id_name, id_value) {
    function con(attr) {
      if (id_value) {
        return attr.name == id_name && attr.value == id_value;
      }
      return attr.name == id_name;
    }
    walk(this.htmlTree, (node) => {
      node.attrs && node.attrs.filter((attr) => con(attr)).length > 0
        ? this.matched.push(node)
        : false;
    });
    if (this.returnOne) {
        return this.matched ? this.matched[0] : false;
    }
    return this.matched;
  }

  getElementsById(id_name) {
    walk(this.htmlTree, (node) => {
      node.attrs &&
      node.attrs.filter(
        (attr) => attr.name == "id" && attr.value.includes(id_name)
      ).length > 0
        ? this.matched.push(node)
        : false;
    });
    if (this.returnOne) {
        return this.matched ? this.matched[0] : false;
    }
    return this.matched;
  }

  getElementsByClassName(class_name) {
    walk(this.htmlTree, (node) => {
      node.attrs &&
      node.attrs.filter(
        (attr) => attr.name == "class" && attr.value.includes(class_name)
      ).length > 0
        ? this.matched.push(node)
        : false;
    });
    if (this.returnOne) {
        return this.matched ? this.matched[0] : false;
    }
    return this.matched;
  }
}

// Returns an array of matches
function queryAll(htmlTree) {
  return new TreeQuery(htmlTree);
}

function queryOne(htmlTree) {
  return new TreeQuery(htmlTree, true)
}
module.exports = {
  queryAll,
  queryOne
};
