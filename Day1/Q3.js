function Initials(name){
    let fullname = name.split(" ");
    let result = "";
    for(let i = 0; i < fullname.length; i++){
        result += fullname[i][0].toUpperCase();
    }
    return result;


}

console.log(Initials("John Doe")); // Output: "JD"
console.log(Initials("Madhur Kakkar")); // Output: "MK"