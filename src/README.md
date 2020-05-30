# parse5-query-domtree
Familiar DOM parser methods for traversing the parse5 DOM tree.

### Setup
```
npm install --save parse5-query-domtree
```

#### Import into project
```
const { queryAll, queryOne } = require("parse5-query-domtree")
```

## Find Nodes
Project example:

```
const parse5 = require("parse5");
const { queryAll, queryOne } = require("parse5-query-domtree")

(async() => {
    let page = await axios.get("/some-website/");

    // generate the html tree
    let htmlTree = parse5.parse(page.data);

    // explore the tree
    let paragraphs = queryAll(htmlTree).getElementsByTagName("p");
    // Array

    let nodesWithAttributeName = queryAll(htmlTree).getElementsByAttribute("data-type");
    // Array

    let nodesWithAttributeValue = queryAll(htmlTree).getElementsByAttribute("data-type", "video");
    // Array

    let nodesWithClassName = queryAll(htmlTree).getElementsByClassName("container");
    // Array

    let nodesWithClassName = queryAll(htmlTree).getElementsByClassName("container").classList
    // ["container"]

    let nodesWithId = queryOne(htmlTree).getElementsWithId("section-1");
    // Object

    let nodesWithId = queryOne(htmlTree).getElementsWithId("section-1").hasAttributes()
    // true

    let nodesWithId = queryOne(htmlTree).getElementsWithId("section-1").getAttribute("id")
    // "section-1"
})()
```

### Query methods
Filter the parse5 DOMTree using standard DOM methods.

#### QueryAll(htmlTree)
return an array of nodes

#### QueryOne(htmlTree)
return the first matched node

```
QueryAll(htmlTree).getElementsByClassName()
QueryAll(htmlTree).getElementsById()
QueryAll(htmlTree).getElementsByAttribute()
QueryAll(htmlTree).getElementsByTagName()
QueryOne(htmlTree).getElementsByTagName()
```

### Single element methods
Evaluate a node object. This extends the standard node from the parse5 DOM tree.

#### classList
Return an array of classes for the given node.

```
QueryAll(htmlTree).getElementsByClassName("container")[0].classList
// Returns ["container"]

QueryOne(htmlTree).getElementsByClassName("container").classList
// Return ["container"]
```

#### getAttribute(name)
Return an attribute value.

```
QueryAll(htmlTree).getElementsByClassName("container")[0].getAttribute("class")
// Returns "container"

QueryOne(htmlTree).getElementsByAttribute("data-type").getAttribute("data-type")
// Returns "video"

QueryOne(htmlTree).getElementsByAttribute("data-type", "video").getAttribute("data-type")
// Returns "video"
```

#### hasAttributes()
true/false