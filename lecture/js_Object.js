// create a object 
const aMan = {
    name: "Shakil",
    age: 20,
    ageCalculation: function (age, dates) {
        console.log(age + dates)
    },
    address: {
        country: "Bangladesh ",
        state: "Dhaka",
        zipCode: "1216",
        localAdderss: "AncerCamp "

    },
    collage: "Central Univercity Dhaka ",
    phone: {
        countryCode: "+88",
        number: "01538088262"
    },


}

const carName = aMan.ageCalculation(aMan.age, 20);
// console.log(carName)
