function handleClick(callback) {
    alert('This button has been clicked');
    if (callback) {
        callback();
    }
}
function doMore() {
    alert('I could process more logic here');
}
function doSomethingElse() {
    document.writeln('Test Message');
}