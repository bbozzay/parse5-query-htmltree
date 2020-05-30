const walk = (node, callback) => {
  if (callback(node) === false) {
    return false;
  } else {
    let childNode, i;

    if (node.childNodes !== undefined) {
      i = 0;
      childNode = node.childNodes[i];
    }

    while (childNode !== undefined) {
      if (walk(childNode, callback) === false) {
        return false;
      } else {
        childNode = node.childNodes[++i];
        if (childNode) {
          childNode.hasAttributes = function() {
            return this.attrs && this.attrs.length > 0 ? true : false
          }
          childNode.getAttribute = function(attr_name) {
            if (this.attrs) {
              let attrFound = this.attrs.filter(attr => attr.name == attr_name)
              return attrFound[0] ? attrFound[0].value : false
            } else {
              return false
            }
          }
          
          if (childNode.getAttribute("class")) {
            childNode.classList = (() => {
              let matchedClasses = childNode.getAttribute("class").split(" ");
              return matchedClasses
            })()
          }
            // console.log("CC", this.getAttribute("class"))
            // return this.getAttribute("class")[0] ? this.getAttribute("class").value : false;
        }
      }
    }
  }
};

module.exports = walk