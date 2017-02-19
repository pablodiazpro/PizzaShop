/**
 * Created by pablo on 2/19/2017.
 */
var FooBar = (function () {
    function FooBar() {
        this.name = "Test";
    }
    FooBar.prototype.showMe = function () {
        console.log(name);
    };
    return FooBar;
}());
var foo = new FooBar();
foo.showMe();
//# sourceMappingURL=sampleTypeScript.js.map