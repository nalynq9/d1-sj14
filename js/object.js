var student = {
    //Property
    firstName: "Chananthon",
    lastName: "Thanomngoen",
    birthYear: 2003,

    //Method
    getAge: function (currentYear){
        return currentYear - this.birthYear;
    }
}

document.write(`${student.firstName} ${student.lastName}`);

document.write(`is ${student.getAge(2021)}`);