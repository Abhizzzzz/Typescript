var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//base class
var Facebook = /** @class */ (function () {
    function Facebook() {
    }
    return Facebook;
}());
//derived class
var FacebookAboutSection = /** @class */ (function (_super) {
    __extends(FacebookAboutSection, _super);
    //constructor
    function FacebookAboutSection(worksAt, previousCompanies, studiedAt, previousColleges, livesIn, from, family, phone, currentPlace, email, birthday) {
        var _this = 
        //calling base class constructor
        _super.call(this) || this;
        //functions
        _this.getWorksAt = function () {
            return _this.worksAt;
        };
        _this.getPreviousCompanies = function () {
            var num = 0;
            var len = _this.previousCompanies.length;
            //for loop to display all previous companies
            for (num; num < len; num++) {
                console.log("Previous Company " + (num + 1) + "-" + _this.previousCompanies[num]);
            }
        };
        _this.getStudiedAt = function () {
            return _this.studiedAt;
        };
        _this.getPreviousColleges = function () {
            var num = 0;
            var len = _this.previousColleges.length;
            //for loop to display all previous colleges
            for (num; num < len; num++) {
                console.log("Previous College " + (num + 1) + "-" + _this.previousColleges[num]);
            }
        };
        _this.getLivesIn = function () {
            return _this.livesIn;
        };
        _this.getFrom = function () {
            return _this.from;
        };
        _this.getFamilyMembers = function () {
            return _this.family.length;
        };
        _this.getFamily = function () {
            var num = 0;
            var len = _this.family.length;
            //for loop to display all family
            for (num; num < len; num++) {
                console.log("Family " + (num + 1) + "-" + _this.family[num]);
            }
        };
        _this.getPhone = function () {
            return _this.phone;
        };
        _this.getCurrentPlace = function () {
            return _this.currentPlace;
        };
        _this.getEmail = function () {
            return _this.email;
        };
        _this.getBirthday = function () {
            return _this.birthday;
        };
        _this.worksAt = worksAt;
        _this.previousCompanies = previousCompanies;
        _this.studiedAt = studiedAt;
        _this.previousColleges = previousColleges;
        _this.livesIn = livesIn;
        _this.from = from;
        _this.family = family;
        _this.phone = phone;
        _this.currentPlace = currentPlace;
        _this.email = email;
        _this.birthday = birthday;
        return _this;
    }
    return FacebookAboutSection;
}(Facebook));
//creating object
var abhishekpalwankar = new FacebookAboutSection("Capgemini Pvt Ltd", ["Vara United Pvt Ltd", "Wipro", "Accenture"], "VJTI", ["Pune Vidyarthi griha's college of sci and tech.", "Vidyaniketan Jr college"], "Vikhroli", "Mumbai,Maharashtra", ["Asha Palwankar", "Ashok Palwankar"], 9594133469, "Vikhroli,India", "palwankar786@gmail.com", "9 April,1994");
//calling functions with abhishekpalwankar's object
console.log("Works At:" + abhishekpalwankar.getWorksAt());
abhishekpalwankar.getPreviousCompanies();
console.log("Studied At:" + abhishekpalwankar.getStudiedAt());
abhishekpalwankar.getPreviousColleges();
console.log("Lives In:" + abhishekpalwankar.getLivesIn());
console.log("From:" + abhishekpalwankar.getFrom());
console.log("Family Members:" + abhishekpalwankar.getFamilyMembers());
abhishekpalwankar.getFamily();
console.log("Phone:" + abhishekpalwankar.getPhone());
console.log("Current Place:" + abhishekpalwankar.getCurrentPlace());
console.log("Email:" + abhishekpalwankar.getEmail());
console.log("Birthday:" + abhishekpalwankar.getBirthday());
