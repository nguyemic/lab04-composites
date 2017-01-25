var TextNode = (function () {
    function TextNode(text) {
        this.text = text;
    }
    TextNode.prototype.print = function () {
        console.log(this.text);
    };
    return TextNode;
}());
var DomElement = (function () {
    function DomElement(elementName, textContent) {
        this.elementName = elementName;
        this.elements = [];
        this.textContent = textContent;
    }
    DomElement.prototype.add = function (element) {
        this.elements.push(element);
    };
    DomElement.prototype.print = function () {
        console.log("<" + this.elementName + ">");
        if (this.textContent) {
            console.log(this.textContent);
        }
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var element = _a[_i];
            element.print();
        }
        console.log("</" + this.elementName + ">");
    };
    return DomElement;
}());
var p1 = new DomElement("p");
var p2 = new DomElement("p");
var div = new DomElement("div");
var html = new DomElement("html");
p1.add(new TextNode("Hi, I am a TextNode being printed!"));
p2.add(new TextNode("TextNode == leaf"));
div.add(p1);
div.add(p2);
html.add(div);
html.print();
