const walk = require("./walk");


class TreeQuery {
  constructor(htmlTree) {
    this.htmlTree = htmlTree;
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

      matches.getAttribute = function (attributeName) {
        let attr_values = []
      };

      return matches;
    };
    this.matched = this.matches();
  }

  getElementsByTagName(tag) {
    walk(this.htmlTree, (node) => {
      node.tagName && node.tagName == tag ? this.matched.push(node) : false;
    });
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
    //   this.hasAttribute("class") && this.hasAttribute.filter(attr => attr.name == "class" && attr.value == class_name) ? matches.push(node) : false;
    return this.matched;
  }
}

// Returns an array of matches

function queryAll(htmlTree) {
  // Returns a class with methods
  // return the attribute value
//   let nodes = []
//   walk(htmlTree, (node) => {
//     node.hasAttribute = function() {
//         return this
//     }
//     nodes.push(node)
//   })
//   console.log(nodes)
  return new TreeQuery(htmlTree);
}

module.exports = {
  queryAll,
};
