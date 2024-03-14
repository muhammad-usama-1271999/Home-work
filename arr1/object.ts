
let city= {
    name:{
        currentName: "Karachi",
        previous: "Kolachi",
    },
    population: 2500000,
    famousPlaces:{
        historicalPlaces:['Mazar ghazi', 'jinnah residency'],
        foodPoints:['burns road', 'nazimabad'],
        picnicPlaces:['seaview', 'clifton', 'meusum'],
    },
    


};
for( let i = 0; i < city.famousPlaces.picnicPlaces.length; i++){
 console.log(city.famousPlaces.picnicPlaces[i]);
}

console.log(city);
console.log(city.famousPlaces.foodPoints);
console.log (city.name.currentName);
console.log(city.famousPlaces.picnicPlaces[0]);