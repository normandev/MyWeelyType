/**
 * Created by norman on 15.10.15.
 */
var Student = (function () {
    function Student(firstname, middleinitial, lastname) {
        this.firstname = firstname;
        this.middleinitial = middleinitial;
        this.lastname = lastname;
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
    return Student;
})();
function greeter(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
var user = new Student("Otto", "M&M", "Sugus");
document.body.innerHTML = greeter(user);
//# sourceMappingURL=greeter.js.map