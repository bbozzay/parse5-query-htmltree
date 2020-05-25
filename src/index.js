class TreeQuery {
  constructor(htmlTree) {
    this.htmlTree = htmlTree;
    this.matches = [];
  }
  walk(node, callback) {
    if (callback(node) === false) {
      return false;
    } else {
      let childNode, i;

      if (node.childNodes !== undefined) {
        i = 0;
        childNode = node.childNodes[i];
      }

      while (childNode !== undefined) {
        if (this.walk(childNode, callback) === false) {
          return false;
        } else {
          childNode = node.childNodes[++i];
        }
      }
    }
  }

  //  getElementsByTagName(tag) {
  //     let matches = [];
  //     this.walk(this.htmlTree, (node) => {
  //       node.tagName && node.tagName == tag ? matches.push(node) : false;
  //     });
  //     return matches;
  //   }
  getElementsById(id_name) {
    this.walk(this.htmlTree, (node) => {
      node.attrs &&
      node.attrs.filter(
        (attr) => attr.name == "id" && attr.value.includes(id_name)
      ).length > 0
        ? this.matches.push(node)
        : false;
    });
    return this.matches;
  }

  //   getElementsByClassName(class_name) {
  //     let matches = [];
  //     this.walk(this.htmlTree, (node) => {
  //       node.attrs &&
  //       node.attrs.filter(
  //         (attr) => attr.name == "class" && attr.value.includes(class_name)
  //       ).length > 0
  //         ? matches.push(node)
  //         : false;
  //     });
  //     // console.log(matches)
  //     //   this.hasAttribute("class") && this.hasAttribute.filter(attr => attr.name == "class" && attr.value == class_name) ? matches.push(node) : false;
  //     return matches;
  //   }
}

class QueryNodes {
  constructor(htmlTree) {
    this.htmlTree = htmlTree;
    this.matches = [];
    // this.matchedNodes = []
  }

  //   hasAttribute(attributeName) {
  //       // chain with previous
  //       let matches = []
  //         //   this.attrs && this.attrs.filter(attr => attr.name == attributeName).length > 0 ? matches.push(node) : false;
  //       return this
  //   }
  hasAttributes(attributeName) {
    let matches = [];
    this.walk(this.htmlTree, (node) => {
      node.attrs &&
      node.attrs.filter((attr) => attr.name == attributeName).length > 0
        ? matches.push(node)
        : false;
    });
    return this;
  }
  // return the attribute value
  getAttribute(attributeName) {
    console.log(this);
    // return this.hasAttribute(attributeName)[0].attrs.filter(attr => attr.)
  }
}

function hasAttributes() {
  // return this
  return this.filter((node) => node.attrs).length > 0;
}
// Returns an array of matches
function queryAll(htmlTree) {
  return {
    getElementsById(id) {
      let q = new TreeQuery(htmlTree).getElementsById(id);
      console.log(q, "ll");
      q.hasAttributes = function () {
        // return this.filter(node => node.attrs).length > 0
        return hasAttributes();
      };
      return q;
    },
  };
}

// document().getElementsById
module.exports = {
  queryAll,
};
