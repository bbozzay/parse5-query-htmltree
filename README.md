# parse5-query-htmltree
Familiar DOM parser methods for traversing the parse5 htmlTree.

### Install
```
npm install --save parse5-query-htmltree
```

### Import into project
```
const { queryAll } = require("parse5-query-htmltree")
```

## Find Nodes

Project example
```
const parse5 = require("parse5");
const { queryAll } = require("parse5-query-htmltree")

(async() => {
    let page = await axios.get("/some-website/");

    // generate the html tree
    let htmlTree = parse5.parse(page.data);

    // explore the tree
    let paragraphs = queryAll(htmlTree).getElementsByTagName("p");
    let nodesWithAttributeName = queryAll(htmlTree).getElementsByAttribute("data-type");
    let nodesWithAttributeValue = queryAll(htmlTree).getElementsByAttribute("data-type", "video");
    let nodesWithClassName = queryAll(htmlTree).getElementsByClassName("container");
    let nodesWithId = queryAll(htmlTree).getElementsWithId("section-1");

})()
