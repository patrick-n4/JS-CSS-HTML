function Student(fname, lname, gender) {
    this.fname = fname;
    this.lname = lname;
    this.gender = gender;
    greeting= ()=> {
        let salut;
        if (gender === "male") {
            salut = "Sir";
        } else {
            salut = "Madam";
        }
        console.log(`Hi ${salut} ${fname} ${lname}!`);
    }
}
let student1 = new Student("NDAYAMBAJE", "Patrick", "male");
greeting(student1);
let student2 = new Student("NIYIGENA", "Jeannette", "female");
greeting(student2);