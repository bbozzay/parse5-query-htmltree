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

    //
    // Return the HTML tree
    //
    let htmlTree = parse5.parse(page.data);

    //
    // Explore the tree
    //
    
    // Find all nodes by HTML tag
    let allParagraphs = queryAll(htmlTree).getElementsByTagName("p");
    // Array

    // Find all nodes with an HTML attribute
    let allNodesWithAttributeName = queryAll(htmlTree).getElementsByAttribute("data-type");
    // Array

    // Find all nodes with an HTML attribute with a specific value
    // Example: <div data-type="video"></div>
    let allNodesWithAttributeValue = queryAll(htmlTree).getElementsByAttribute("data-type", "video");
    // Array

    // Find all nodes containing a class
    // Example: <div class="container red_bg"></div>
    let allNodesWithClassName = queryAll(htmlTree).getElementsByClassName("container");
    // Array
    
    // Find one node containing an ID
    // Example: <div id="section-1"></div>
    // You could also use getElementsByAttribute("id", "section-1")
    let oneNodeWithId = queryOne(htmlTree).getElementsById("section-1");
    // Object

    //
    // Single element methods
    //
    
    // Find all nodes containing a class, then return the classList for the first node
    let oneNodeContainingClass = queryAll(htmlTree).getElementsByClassName("container")[0].classList
    // ["container"]


    // Find one node and check if it has any attributes
    let nodeHasAnyAttributes = queryOne(htmlTree).getElementsById("section-1").hasAttributes()
    // true

    // Find one node and return the value of an attribute
    // Example: <div id="section-1"></div>
    let oneNodeAttributeValue = queryOne(htmlTree).getElementsById("section-1").getAttribute("id")
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
