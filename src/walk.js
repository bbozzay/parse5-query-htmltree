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
            return this.attrs ? this.attrs.filter(attr => attr.name == attr_name)[0].value : false
          }
        }
      }
    }
  }
};

module.exports = walk