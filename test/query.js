var assert = require("assert");
const { queryAll, queryOne } = require("../src")
const parse5 = require("parse5");
const html = require("../html")

describe("Match elements", function () {
  let htmlTree = parse5.parse(html)

  describe("getElementsByTagName", function () {
    it("Spans", function () {
      let spans = queryAll(htmlTree).getElementsByTagName("span")
      assert(spans)
      assert(spans.length == 2)
    });

    it("Divs", function () {
      let divs = queryAll(htmlTree).getElementsByTagName("div")
      assert(divs)
      assert(divs.length == 8)
    });
    it("Sections", function () {
      let sections = queryAll(htmlTree).getElementsByTagName("section")
      assert(sections)
      assert(sections.length == 2)
    });
    it("Scripts", function () {
      let scripts = queryAll(htmlTree).getElementsByTagName("script")
      assert(scripts)
      assert(scripts.length == 1)
    });
  });
  describe("Get by attribute", function() {
    it("Scripts", function () {
      let dataType = queryAll(htmlTree).getElementsByAttribute("data-type")
      assert(dataType)
      assert(dataType.length == 4)
    });
  })
  describe("Get by className", function() {
    it("one-class", function () {
      let oneClass = queryAll(htmlTree).getElementsByClassName("one-class")
      assert(oneClass)
      assert(oneClass.length == 1)
    });
    it("container", function () {
      let oneClass = queryAll(htmlTree).getElementsByClassName("container")
      assert(oneClass)
      assert(oneClass.length == 2)
    });
  })
  describe("Get by id", function() {
    it("one", function () {
      let oneId = queryAll(htmlTree).getElementsById("one")
      assert(oneId)
      assert(oneId.length == 1)
    });
  })
  describe("Find if it has a certain attribute name", function () {
    it("Attr: data-type", function () {
      let nodes = queryAll(htmlTree).getElementsByAttribute("data-type");
      assert(nodes)
      assert(nodes.length == 4)
    });
    it("Attr: class", function () {
      let nodes = queryAll(htmlTree).getElementsByAttribute("class");
      assert(nodes.length > 2)
    });
    it("Attr: id", function () {
      let nodes = queryAll(htmlTree).getElementsByAttribute("id");
      assert(nodes.length > 0)
    });
  });

  describe("Return One Match", function () {
    it("By Class", function () {
      // let document = queryAll(htmlTree)
      let className = queryOne(htmlTree).getElementsByClassName("container")
      assert(className instanceof Object)
      assert(className.classList.includes("container"))
    });
    it("Attribute", function () {
      let node = queryOne(htmlTree).getElementsByAttribute("data-type")
      assert(node.getAttribute("data-type"))
    });
    it("Attribute value", function () {
      let node = queryOne(htmlTree).getElementsByAttribute("data-type", "video")
      assert(node.getAttribute("data-type") == "video")
    });
  })

  describe("Array node methods for filtering results", function () {
    it("Get nodelist by attribute value", function () {
      // let document = queryAll(htmlTree)
      let elements = queryAll(htmlTree).getElementsByAttribute("data-type", "video")
      assert(elements.length == 2)
    });
  })
  describe("Single node methods", function () {
    it("hasAttributes", function () {
      // let document = queryAll(htmlTree)
      let elements = queryAll(htmlTree).getElementsByAttribute("data-type")[0].hasAttributes()
      assert(elements == true)
    });
    it("getAttribute", function () {
      // let document = queryAll(htmlTree)
      let elements = queryAll(htmlTree).getElementsByAttribute("data-type", "video")[0].getAttribute("data-type")
      assert(elements == "video")
    });
    it("one classlist", function () {
      // let document = queryAll(htmlTree)
      let classList = queryAll(htmlTree).getElementsByClassName("container")[0].classList
      assert(classList == "container")
    });
    it("two classes", function () {
      // let document = queryAll(htmlTree)
      let classList = queryAll(htmlTree).getElementsByClassName("one-row")[0].classList
      assert(classList.length == 2)
    });
  });
});
