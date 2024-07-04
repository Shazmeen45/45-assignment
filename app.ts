// Question 1
//   console.log("Hello World!");



// Question 2
//   let personName: string= "Eric"
//   console.log(`hello ${personName}, would you like to learn python today?`);



// Question 3
// lower case
//   let personName: string ="Shazmeen"
//   console.log("lowercase:", personName.toLowerCase());

//upper case
//   console.log("uppercase:", personName.toLocaleUpperCase());

//title case
//   console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));



// Question 4
//   let quote: string = "A person who never made a mistake never tried anything new";
//   let author: string = "Albert Einstein"
//   console.log(`${author} once said, "${quote}`);



// Question 5
//   let quote: string= "A person who never made a mistake never tried anything new";
//   let famous_person="Albert Einstein";
//   let message=`${famous_person} once said, ${quote}`;
//   console.log(message);



// Question 6
//   let personName: string = '\n\t VIRAT KOHLI\t\n';
//   console.log(personName);
//   let stripped: string = personName.trim();
//   console.log(stripped);



//Question 7,8
//   console.log(5 + 3);
//   console.log(11 - 3);
//   console.log(4 * 2);
//   console.log(16 / 2);



// Question 9
//   let favouriteNumber: number = 4;
//   console.log(`My favourite number is ${favouriteNumber}`);



// Question 10
//   const num1: number = 23;
//   const num2: number = 3;

// this will add the num1 and num2 (This is common in ts)
//   console.log(num1 + num2);



// Question 11
//   let friendsName: string[] = ["hassan", "ali", "zohaan", "taha"];

//   console.log(friendsName[0]);
//   console.log(friendsName[1]);
//   console.log(friendsName[2]);
//   console.log(friendsName[3]);



// Question 12
//   let friendsName: string[] = ["hassan", "ali", "zohaan", "taha"];
//   console.log(`Hello ${friendsName[0]}, how are you?`);
//   console.log(`Hello ${friendsName[1]}, how are you?`);
//   console.log(`Hello ${friendsName[2]}, how are you?`);
//   console.log(`Hello ${friendsName[3]}, how are you?`);



// Question 13
//   let transportation : string[] =['bike', 'sport car', 'bus', 'track', 'cycle'];
//   for(let i=0; i<transportation.length; i++){
//    console.log('i would like to own a ' + transportation[i]);
// }



// Question 14
//   const myFriends: string[] =["rafay", "ali", "zain", "zaid"];
//   for(let i=0; i<myFriends.length; i++){
//   console.log(`Mr. ${myFriends[i]}! you are invited to my dinner on Monday\n`);
// }



// Question 15
//   const myFriends: string[] =["rafay", "ali", "zain", "zaid"];
//   console.log(`due to some personal reasons Mr. ${myFriends[1]} will not come on my dinner`);
//   myFriends[1] = "zohaan";

//   console.log(`New  list of my friends who are coming to my dinner`)
//   for(let i=0; i<myFriends.length; i++){
//   console.log(`${i}. ${myFriends[i]}`);
// }



// Question 16
//   const myFriends: string[] =["rafay", "zoya", "zain", "minal"];
//   console.log(myFriends);
//   console.log(`we have 3 more friends to invite on dinner\n`)


//   myFriends.unshift("zohaan");
//   console.log(myFriends);


//   myFriends.splice(2, 0, "musab")
//   console.log(myFriends);


//   myFriends.push("fabiha");
//   console.log(myFriends);


//   for(let i=0; i<myFriends.length; i++){
//       console.log(`Mr. ${myFriends[i]} you are invited to my dinner`);
// }



// Question 17
//   const myFriends: string[] =["rafay", "ali", "zain", "zaid", "hamza", "moiz"];

//   console.log(`Table is not available I can invite only 2 persons\n`);


//   let friend1 = myFriends.pop();
//   console.log(`Sorry Mr. ${friend1} you are not invited!`);

//   let friend2 = myFriends.pop();
//   console.log(`Sorry Mr. ${friend2} you are not invited!`);

//   let friend3 = myFriends.pop();
//   console.log(`Sorry Mr. ${friend3} you are not invited!`);

//   let friend4 = myFriends.pop();
//   console.log(`Sorry Mr. ${friend4} you are not invited!`);


//   for(let i = 0; i < myFriends.length; i++){
//    console.log(`Mr. ${myFriends[i]} you sre still invited`);
// }

//   myFriends.pop();
//   myFriends.pop();

//   console.log(myFriends);



// Question 18
//   let placeToVisit: string[] = ["turkey", "italy", "switzerland", "new zealand", "japan"];
//   console.log("Original order:", placeToVisit);

//   console.log("Alphabetical order:", placeToVisit.slice().sort());

//   console.log("Original order:", placeToVisit);

//   console.log("Reverse Alphabetical order:", placeToVisit.slice().sort().reverse);

//   console.log("Original order after reverse sorting:", placeToVisit);

//   placeToVisit.reverse();
//   console.log("Reverse order:",placeToVisit);

//   placeToVisit.reverse();
//   console.log("Back to original order:",placeToVisit);

//   console.log("Sorted in alphabetical order:", placeToVisit.slice().sort());

//   console.log("Sorted in reverse Alphabetical order:", placeToVisit.slice().sort().reverse);



// Question 19
//   const myFriends: string[] =["anas", "alizey", "faiz", "hussain", "tayab"];
//   console.log(`I am inviting ${myFriends.length} number of friends to my dinner which are following\n`);

//  for(let i=0; i<myFriends.length; i++){
//    console.log(`${i + 1}. ${myFriends[i]}`)
// }



// Question 20
//   let language: string[]=["turkish", "spanish", "japanies", "french", "german"]
//   console.log("list of languages:")
//   for(let top of language){
//    console.log(top)
// }



// Question 21
//   interface item{
//    name:string
//    price:number
// }
//   const book: item={
//    name:'ESSENTIAL TYPESCRIPT',
//    price:450
// }
//   const apple: item={
//    name:'apple',
//    price:200
// }
//   console.log(`book name: ${book.name}, price: $${book.price}`)
//   console.log(`apple name: ${apple.name}, price: $${apple.price}`)



// Question 22
//   let array: (string | number) [] =["taha","saim",3,5,8,"shazma"]
//   console.log(array[5])
//   console.log(array[0])
//   console.log(array[1])
//   console.log(array[2])
//   console.log(array[4])



// Question 23
//   let car:string='subaru';


//test1
//   console.log("Is car== 'subaru'? I predict True.")
//   console.log(car == "subaru");


//test2
//   console.log("Is car=== 'subaru'? I predict True.")
//   console.log(car === "subaru");


//test3
//   console.log("Is car!= 'subaru'? I predict True.")
//   console.log(car != "subaru");


//test4
//   console.log("Is car!== 'subaru'? I predict True.")
//   console.log(car !== "subaru");


//test5
//   console.log("Is car < 'subaru'? I predict True.")
//   console.log(car < "subaru");


//test6
//   console.log("Is car > 'subaru'? I predict True.")
//   console.log(car > "subaru");


//test7
//   console.log("Is car <= 'subaru'? I predict True.")
//   console.log(car <= "subaru");


//test8
//   console.log("Is car >= 'subaru'? I predict True.")
//   console.log(car >= "subaru");


//test9
//   console.log("Is car? I predict True.")
//   console.log(car);


//test10
//   console.log("Is !car? I predict False.")
//   console.log(!car);



// Question 24
//   let car:string= 'Subaru';
//   let age: number= 20;
//   let numbers: number[] = [1, 2, 3, 4];


//string test

//test1
//   console.log("Is car == 'Subaru'? I predict True.")
//   console.log(car == 'Subaru');


//test2
//   console.log("Is car === 'Subaru'? I predict True.")
//   console.log(car === 'Subaru');


//test3
//   console.log("Is car != 'Toyoto'? I predict True.")
//   console.log(car != 'toyoto');


//test4
//   console.log("Is car !== 'Subaru'? I predict False.")
//   console.log(car !== 'Subaru');

// lowercase function test

//test5
//   console.log("Is car.toLowerCase()== 'Subaru'? I predict True.")
//   console.log(car.toLowerCase() == 'Subaru');


//test6
//   console.log("Is car === car.toLowerCase()? I predict False.")
//   console.log(car ===car.toLowerCase());

// numerical test

//test7
//   console.log("Is age == 20? I predict True.")
//   console.log(age == 20);


//test8
//   console.log("Is age != 30? I predict True.")
//   console.log(age !=30);


//test9
//   console.log("Is age > 30? I predict False.")
//   console.log(age > 30);


//test10
//   console.log("Is age <= 20? I predict True.")
//   console.log(age <= 20);

//logical test

//test11
//   console.log("Is age > 15 && age < 30? I predict True.");
//   console.log(age > 15 && age < 30);

//test12
//   console.log("Is age > 30 || age < 18? I predict False.");
//   console.log(age > 30 || age < 18);

//array test

//test 13
//   console.log("Is 3 in numbers? I predict True.");
//   console.log(3 in numbers);

//test 14
//   console.log("Is 5 ! in numbers? I predict True.");
//   console.log(5 ! in numbers);



// Question 25
//   let alien_color: string = "green";
//   if (alien_color == "white"){
//    console.log(`player just earned 5 points`);
// }else{

// }



// Question 26
//   let alienColor = "green";

//   if(alienColor == "green"){
//    console.log(`player just earned 5 points`);
// }else {
//    console.log(`player just earned 10 points`)
// }

//   if(alienColor == "white"){
//    console.log(`player just earned 5 points`);
// }else {
//    console.log(`player just earned 10 points`)
// }



// Question 27
// let alienColor = "red";
// let alienColor = "green";
// let alienColor = "yellow";
// let alienColor = "no color";

//   if(alienColor == "green"){
//    console.log(`player just earned 5 points`);

// }else if(alienColor == "yellow"){
//    console.log(`player just earned 10 points`);

// }else if(alienColor == "red"){
//    console.log(`player earned 15 points`);
// }else {
//    console.log(`player earned 0 points`)
// }



// Question 28
//   let age: number = 21;
//   if(age<2){
//    console.log("the person is a baby.")
// }



//   else if(age>= 2 && age <4){
//    console.log("person is a toddler.")
// }




//   else if(age>= 4 && age <13){
//    console.log("person is a kid.")
// }



//   else if(age>= 13 && age<20){
//    console.log("person is a teenager.")
// }



//   else if(age>= 20 && age <65){
//    console.log("person is a adult.")
// }



//   else{
//    console.log("person is an elder.")
// }



// Question 29
//   let favorite_fruit: string [] = ['apple', 'orange', 'grapes']
//   if(favorite_fruit.includes('apple')){
//    console.log('I really like apple!')
// }


//   if(favorite_fruit.includes('orange')){
//    console.log('I really like orange!')
// }


//   if(favorite_fruit.includes('mango')){
//    console.log('I really like mango!')
// }


//   if(favorite_fruit.includes('grapes')){
//    console.log('I really like grapes!')
// }


//   if(favorite_fruit.includes('bananas')){
//    console.log('I really like bananas!')
// }



// Question 30
//   let users: string [] = ['zara', 'zohaan', 'musab', 'haseeb', 'admin']

//   for (let user of users){
//    if(user === "admin"){
//        console.log("hello admin, would you like to see a status report?")
// }
//    else{
//        console.log(`hello ${user}, 'thank you for logging in again.'`)
// }
// }



// Question 31
//   let users: string [] = ['zara', 'zohaan', 'musab', 'haseeb', 'admin']

//   if(users.length === 0){
//    console.log("We need to find some users!")
// }


//   else{
//     users = [];
//   console.log("All user have been removed " + users.length)
// }



// Question 32
//   let current_users: string[] = ["anas", "admin", "fabiha", "shanza", "zohaan"];
//   let new_users: string[] = ["ramsha", "ali", "user7", "admin", "user9"];

//   new_users.forEach((newUser) => {
//    if(
//        current_users.some(
//            (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
//        )
//    ) {
//        console.log(`${newUser} will need to enter a new username.`);
//    } else {
//        console.log(`${newUser} is available.`);
//    }
// });



// Question 33
//   let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


//   for(let i=0; i <myNumbers.length; i++){

//    if(myNumbers[i] == 1){
//        console.log(`${myNumbers[i]}st`);
//    }else if(myNumbers[i] == 2){
//        console.log(`${myNumbers[i]}nd`);

//    }else if(myNumbers[i] == 3){
//        console.log(`${myNumbers[i]}nd`);

//    }else if(myNumbers[i] >= 4 && myNumbers[i] <=9){
//        console.log(`${myNumbers[i]}th`);    
//    }  
// }



// Question 34
//   let myPizza = ["Cheese Pizza", "Pepperoni Pizza", "Vegeterian Pizza"];


//   for(let i = 0; i < myPizza.length; i++) {
//    console.log(myPizza[i]);
// }


//   for(let i = 0; i < myPizza.length; i++) {
//    console.log(`I like to eat ${myPizza[i]}`);
// }


//   console.log(`I really like to eat Pizzas. Pizza comes in a variety of flavors and toopings, allowing individuals to customize it to their liking`);



// Question 35
//   let animalsNames = ["camel", "goat", "cow", "sheep"];


//   for(let i of animalsNames){
//    console.log(i);
// }


//   for(let j of animalsNames){
//    console.log(`${j} is a Domestic Animal`);
// }


//   console.log(`All these animals' ${animalsNames[0]}, ${animalsNames[1]}, ${animalsNames[2]} and ${animalsNames[3]} meat is Halal in Islam`);



// Question 36
//   function make_shirt(size: string, message: string){
//    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
// }



//   make_shirt("medium", "armando");



// Question 37
//   function make_shirt(size: string = "large", message: string = "I love typescript"){
//    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
// }




//   make_shirt();
//   make_shirt("medium");
//   make_shirt("small", "armando");



// Question 38
//   function describe_city(nameOfCity: string, country: string = "Pakistan"){
//    return `${nameOfCity} is in ${country}`;
// };



//   let city1 = describe_city("Istanbal","Turkey");
//   let city2 = describe_city("Karachi","Pakistan");
//   let city3 = describe_city("Lucerne","Switerland");
//   let city4 = describe_city("Rome","Italy");



//   console.log(city1);
//   console.log(city2);
//   console.log(city3);
//   console.log(city4);



// Question 39
//   function city_country(city: string, country: string){
//return ` "${city}, ${country}"`
//    console.log(`"${city}, ${country}"`)
// }


//   city_country("Istanbal", "Turkey");

//   let mycities = city_country("Istanbal", "Turkey");
//   console.log(mycities);


//   console.log(city_country("Tokyo", "Japan"));
//   console.log(city_country("Lucerne", "Switerland"));
//   console.log(city_country("Rome", "Italy"));



// Question 40

//   function myAlbum(artistName: string, albumTitle: string){
//    return {artistName, albumTitle}
// }



//   let album1 = myAlbum("The Beatles", "Abbey Road");
//   let album2 = myAlbum("Michael Jackson", "Thriller");
//   let album3 = myAlbum("Radiohead", "OK Computer");


//   console.log(album1);
//   console.log(album2);
//   console.log(album3);


//   function myAlbum2(artistName: string, albumTitle: string, numberOfTracks?: number){
//    return {artistName, albumTitle, numberOfTracks}

// }

//   let album4 = myAlbum2("Beyonce", "Lemonade", 10);
//   let album5 = myAlbum2("Pink Floyd", "The Dark Side of the Moon", 25);
//   let album6 = myAlbum2("Adele", "21");

//   console.log(album4);
//   console.log(album5);
//   console.log(album6);



// Question 41
//   et magiciansNames = ["zohaan", "taha", "hassan", "qadir"];

//   function show_magicians(){
//    for(let item of magiciansNames){
//       console.log(item);
//    }
// };


//   show_magicians();
//   show_magicians();



// Question 42
//   let magiciansNames = ["zohaan", "taha", "hassan", "qadir"];

//   function show_magicians(greet: string){


//    for(let item of magiciansNames){
//        console.log(greet, item);
//    }
// };


//   show_magicians("Hello, How are you Mr.");
//   show_magicians("Hello, ");     //2nd time calling



// Question 43
//   let magiciansNames2 = ["zohaan", "taha", "hassan", "qadir"];


//making copy of an array
//   let magiciansNamesCopy = [...magiciansNames2];


//   function show_magicians(greet: string){
//    let withGreetings = "";


//    for(let item of magiciansNamesCopy){
//        withGreetings += `${greet} ${item}\n`;
//    }

//    return withGreetings;
// };    
                
    
//   let myGreetings = show_magicians("Hello");
//   let makeArray = myGreetings.split('\n');
//   console.log(makeArray);


//original array
//   console.log(magiciansNames2);



// Question 44
//   function mySandwiches(...items: string[]){
//    return `I want Sandwich of ${items}`;
// };


//   let collection1 = mySandwiches("Ham", " Cheese", " Lettuce");
//   let collection2 = mySandwiches("Turkey", " Swiss");
//   let collection3 = mySandwiches()   // without arrgument


//   console.log(collection1);
//   console.log(collection2);
//   console.log(collection3);



// Question 45
//   type car = {
//    manufacture: string
//    model: string
//    [key: string]: any;
// }

//   function createCar(manufacture: string, model: string, optional: Record<string, any>): car{
//    return{
//        manufacture,
//        model,
//        ...optional
//    }
// }

//   const mycar: car = createCar("porsche", "911", {color: "Carmine Red" , year: "2024"})
//   console.log(mycar);   
