var assert = require("assert");
const { queryAll } = require("../src")
const parse5 = require("parse5");
const html = require("../html")

describe("Match elements", function () {
  let htmlTree = parse5.parse(html)

  // describe("getElementsByTagName", function () {
  //   it("Find Spans", function () {
  //     let spans = queryNodes(htmlTree).getElementsByTagName("span")
  //     assert(spans)
  //     assert(spans.length == 2)
  //   });
  //   it("Find Divs", function () {
  //     let divs = queryNodes(htmlTree).getElementsByTagName("div")
  //     assert(divs)
  //     assert(divs.length == 8)
  //   });
  //   it("Find Sections", function () {
  //     let sections = queryNodes(htmlTree).getElementsByTagName("section")
  //     assert(sections)
  //     assert(sections.length == 2)
  //   });
  //   it("Find Scripts", function () {
  //     let scripts = queryNodes(htmlTree).getElementsByTagName("script")
  //     assert(scripts)
  //     assert(scripts.length == 1)
  //   });
  // });
  // describe("Find if it has a certain attribute name", function () {
  //   it("Attr: data-type", function () {
  //     let nodes = queryNodes(htmlTree).hasAttribute("data-type");
  //     assert(nodes)
  //     assert(nodes.length == 4)
  //   });
  //   it("Attr: class", function () {
  //     let nodes = queryNodes(htmlTree).hasAttribute("class");
  //     assert(nodes.length > 2)
  //   });
  //   it("Attr: id", function () {
  //     let nodes = queryNodes(htmlTree).hasAttribute("id");
  //     assert(nodes.length > 0)
  //   });
  // });

  // describe("Find by className", function () {
  //   it("Class name value", function () {
  //     let nodes = queryNodes(htmlTree).getElementsByClassName("one-class");
  //     assert(nodes)
  //     assert(nodes.length == 1)
  //   });
  // });
  // describe("Find by id", function () {
  //   it("id value", function () {
  //     let nodes = queryNodes(htmlTree).getElementsById("one");
  //     assert(nodes)
  //     assert(nodes.length == 1)
  //   });
  // });
  describe("Refactoring...", function () {
    it("attr value", function () {
      // let document = queryAll(htmlTree)
      let elements = queryAll(htmlTree).getElementsById("one")
      console.log(elements,"ee")

      // elements.prototype.hasAttribute = function() {

      // }
      // console.log(elements.hasAttribute("class"), "filter")
      // assert(nodes)
      // assert(nodes.length == 1)
    });
  });
});
