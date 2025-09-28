var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//with inheritance
var person = /** @class */ (function () {
    function person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    person.prototype.greet = function () {
        return "hello ".concat(this.firstName, " ").concat(this.lastName, ",");
    };
    person.prototype.greetAge = function () {
        return this.age;
    };
    return person;
}());
var user = /** @class */ (function (_super) {
    __extends(user, _super);
    function user(firstName, lastName, age) {
        return _super.call(this, firstName, lastName, age) || this;
    }
    return user;
}(person));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(firstName, lastName, age, role) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.role = role;
        return _this;
    }
    Admin.prototype.greet = function () {
        return "hello ".concat(this.firstName, " ").concat(this.lastName, ", role ").concat(this.role);
    };
    Admin.prototype.manageUser = function () {
        return "managing users with roles ".concat(this.role);
    };
    return Admin;
}(person));
var user5 = new user("john", "j0o", 35);
var user4 = new Admin("sef", "seew", 65, "hr");
console.log(user5.greet());
console.log(user4.greet());
console.log(user4.manageUser());
