//base class
class Facebook{
    //facebook's main class
}
//derived class
class FacebookAboutSection extends Facebook{
    //properties
    worksAt : String;
    previousCompanies : String[];
    studiedAt : String;
    previousColleges : String[];
    livesIn : String;
    from : String;
    family : String[];
    private phone : number;
    currentPlace : String;
    private email : String;
    birthday : String;
    //constructor
    constructor( worksAt : String,previousCompanies : String[],studiedAt : String,previousColleges : String[],
        livesIn : String,from : String,family : String[],phone : number,
        currentPlace : String,email : String,birthday : String){
        //calling base class constructor
        super();
        this.worksAt = worksAt;
        this.previousCompanies = previousCompanies;
        this.studiedAt = studiedAt;
        this.previousColleges = previousColleges;
        this.livesIn = livesIn;
        this.from = from;
        this.family = family;
        this.phone = phone;
        this.currentPlace = currentPlace;
        this.email = email;
        this.birthday = birthday;
    }
    //functions
    getWorksAt = () =>{
        return this.worksAt;
    }
    getPreviousCompanies = () =>{
        let num : number = 0;
        let len: number = this.previousCompanies.length;
        //for loop to display all previous companies
        for(num;num<len;num++){
            console.log("Previous Company "+(num+1)+"-"+this.previousCompanies[num]);
        }
    }
    getStudiedAt = () =>{
        return this.studiedAt;
    }
    getPreviousColleges = () =>{
        let num : number = 0;
        let len: number = this.previousColleges.length;
        //for loop to display all previous colleges
        for(num;num<len;num++){
            console.log("Previous College "+(num+1)+"-"+this.previousColleges[num]);
        }
    }
    getLivesIn = () =>{
        return this.livesIn;
    }
    getFrom = () =>{
        return this.from;
    }
    getFamilyMembers = () =>{
        return this.family.length;
    }
    getFamily = () =>{
        let num : number = 0;
        let len: number = this.family.length;
        //for loop to display all family
        for(num;num<len;num++){
            console.log("Family "+(num+1)+"-"+this.family[num]);
        }
    }
    getPhone = () =>{
        return this.phone;
    }
    getCurrentPlace = () =>{
        return this.currentPlace;
    }
    getEmail = () =>{
        return this.email;
    }
    getBirthday = () =>{
        return this.birthday;
    }
}
//creating object
let abhishekpalwankar = new FacebookAboutSection("Capgemini Pvt Ltd",["Vara United Pvt Ltd","Wipro","Accenture"],
"VJTI",["Pune Vidyarthi griha's college of sci and tech.","Vidyaniketan Jr college"],"Vikhroli","Mumbai,Maharashtra",
["Asha Palwankar","Ashok Palwankar"],9594133469,"Vikhroli,India","palwankar786@gmail.com","9 April,1994");
//calling functions with abhishekpalwankar's object
console.log("Works At:"+abhishekpalwankar.getWorksAt());
abhishekpalwankar.getPreviousCompanies();
console.log("Studied At:"+abhishekpalwankar.getStudiedAt());
abhishekpalwankar.getPreviousColleges();
console.log("Lives In:"+abhishekpalwankar.getLivesIn());
console.log("From:"+abhishekpalwankar.getFrom());
console.log("Family Members:"+abhishekpalwankar.getFamilyMembers());
abhishekpalwankar.getFamily();
console.log("Phone:"+abhishekpalwankar.getPhone());
console.log("Current Place:"+abhishekpalwankar.getCurrentPlace());
console.log("Email:"+abhishekpalwankar.getEmail());
console.log("Birthday:"+abhishekpalwankar.getBirthday());