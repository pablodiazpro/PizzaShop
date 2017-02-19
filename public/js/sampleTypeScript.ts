/**
 * Created by pablo on 2/19/2017.
 */
class FooBar {
    private name = "Test";

    showMe() {
        console.log(name);
    }
}

var foo = new FooBar();
foo.showMe();