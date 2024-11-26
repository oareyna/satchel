
function person(event) {
    event.preventDefault()
    let First_Name = document.getElementById("fn").value
    let Last_Name = document.getElementById("ln").value
    let Course = document.getElementById("c").value
    let Section_Number = document.getElementById("sn").value
    let Role = document.getElementById("r").value


let person1 = {
    FirstName : First_Name,
    LastName : Last_Name,
    Course: Course,
    SectionNumber: Section_Number,
    Role: Role
}

console.log("Person object:")
console.log(person1)
console.log("JSON format:")
console.log(JSON.stringify(person1))
}
document.getElementById("submit1").addEventListener('click',person)



