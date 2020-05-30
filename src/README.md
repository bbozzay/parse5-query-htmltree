# parse5-query-htmltree
Familiar DOM parser methods for traversing the parse5 DOM tree.

### Install
```
npm install --save parse5-query-htmltree
```

### Import into project
```
const { queryAll, queryOne } = require("parse5-query-htmltree")
```

## Find Nodes

Project example
```
const parse5 = require("parse5");
const { queryAll, queryOne } = require("parse5-query-htmltree")

(async() => {
    let page = await axios.get("/some-website/");

    // generate the html tree
    let htmlTree = parse5.parse(page.data);

    // explore the tree
    let paragraphs = queryAll(htmlTree).getElementsByTagName("p");
    let nodesWithAttributeName = queryAll(htmlTree).getElementsByAttribute("data-type");
    let nodesWithAttributeValue = queryAll(htmlTree).getElementsByAttribute("data-type", "video");
    let nodesWithClassName = queryAll(htmlTree).getElementsByClassName("container");
    let nodesWithId = queryOne(htmlTree).getElementsWithId("section-1");

})()
```


### Array methods
Return an array of nodes from the parse5 DOMTree using standard DOM methods.
getElementsByClassName()
getElementsById()
getElementsByAttribute()
getElementsByTagName()


### Single element methods
Evaluate a node object. This extends the standard node from the parse5 DOM tree.

.classList
Return an array of classes for the given node.

.getAttribute(name, value)
Return an arrtibute value.