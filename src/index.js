const walk = require("./walk");

function Matches() {
  let matches = new Array();

  matches.hasAttributes = function () {
    walk(this.htmlTree, (node) => {
      node.attrs &&
      node.attrs.filter((attr) => attr.name == attributeName).length > 0
        ? matches.push(node)
        : false;
    });
    return this;
  };

  matches.getAttribute = function (attributeName) {
    return this.hasAttribute(attributeName)[0].attrs.filter(
      (attr) => attr.name == attributeName
    );
  };

  return matches;
}

class TreeQuery {
  constructor(htmlTree) {
    this.htmlTree = htmlTree;
  }

  getElementsByTagName(tag) {
    walk(this.htmlTree, (node) => {
      node.tagName && node.tagName == tag ? Matches().array.push(node) : false;
    });
    return Matches();
  }

  getElementsByAttribute(id_name) {
    walk(this.htmlTree, (node) => {
      node.attrs &&
      node.attrs.filter(
        (attr) => attr.name == "id" && attr.value.includes(id_name)
      ).length > 0
        ? Matches.push(node)
        : false;
    });

    return Matches();
  }

  getElementsById(id_name) {
    walk(this.htmlTree, (node) => {
      node.attrs &&
      node.attrs.filter(
        (attr) => attr.name == "id" && attr.value.includes(id_name)
      ).length > 0
        ? Matches().push(node)
        : false;
    });

    return Matches();
  }

  getElementsByClassName(class_name) {
    walk(this.htmlTree, (node) => {
      node.attrs &&
      node.attrs.filter(
        (attr) => attr.name == "class" && attr.value.includes(class_name)
      ).length > 0
        ? Matches().push(node)
        : false;
    });
    //   this.hasAttribute("class") && this.hasAttribute.filter(attr => attr.name == "class" && attr.value == class_name) ? matches.push(node) : false;
    return Matches();
  }
}

// Returns an array of matches

function queryAll(htmlTree) {
  // Returns a class with methods
  // return the attribute value
  return new TreeQuery(htmlTree);
}

module.exports = {
  queryAll,
};
