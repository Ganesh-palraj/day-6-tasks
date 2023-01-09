// 1. https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md


// A. Write a constructor for the class Movie, which takes a String representing the title of the movie, 
// a String representing the studio, and a String representing the rating as its arguments, and sets 
// the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no
// rating is provided. 

// OUTPUT OF A AND B:

class movie {                                     // A. class named movie is created
    constructor (title,studio,rating="PG"){       // B. constructor for the class with rating with PG as default
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }  
   static getPG(movies) {
    const pgMovies = [];
    for (const movie of movies) {
      if (movie.rating === 'PG') {
        pgMovies.push(movie);
      }
    }
    return pgMovies;
  }
}

// C. Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only 
// those movies in the input array with a rating of "PG". You may assume the input array is full of Movie 
// instances. The returned array need not be full.

// OUTPUT:

// [
//     movie { title: 'Harry Potter', studio: 'Warner Bros', rating: 'PG' },
//     movie { title: 'Avatar', studio: 'Warner Bros', rating: 'PG' },
//     movie { title: 'Batman', studio: 'DC', rating: 'PG' }
//   ]

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
// the studio “Eon Productions”, and the rating “PG­13”


let movie_1 = new movie("Casino Royale" , "Eon Productions" , "PG13") //instance of class movie
let movie_2 = new movie("Harry Potter" , "Warner Bros" , "PG")
let movie_3 = new movie("Avatar" , "Warner Bros" , "PG")
let movie_4 = new movie("Batman" , "DC" , "PG")
// console.log(movie_1)
let movies =[movie_1,movie_2,movie_3,movie_4]
console.log(movie.getPG(movies))



// OUTPUT:

// movie {
//     title: 'Casino Royale',
//     studio: 'Eon Productions',
//     rating: 'PG13­'
//   }

// 2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

// Circle - Class
// Convert the UML diagram to Typescript class. - use number for double

class circle{
    constructor (radius,color="red"){
        this.radius = radius;
        this.color = color;
    }
    get getRadius(){
      return (this.radius)
      // output: 1
    }
    set setRadius(value){
      return (this.radius = value)
      // output:2
    }
    get getColor(){
      return (this.color)
      // output:red
    }
    setColor (value){
      return (this.color = value)
      // output:blue
    }
    displayasstring (){
      return (`circle [radius = ${this.radius}, color = ${this.color}]`)
    }
    // output: circle [radius = 1, color = red]
    getArea (){
      return Math.PI * this.radius * this.radius
    }
    // output: 3.141592653589793
    getCircumference(){
      return Math.PI * 2 * this.radius
    }
    // output: 6.283185307179586
}

let circle1 = new circle(1)
console.log(circle1.getRadius)
console.log(circle1.setRadius=2.0)
console.log(circle1.getColor)
console.log(circle1.setColor = "blue")
console.log(circle1.displayasstring())
console.log(circle1.getArea())
console.log(circle1.getCircumference())




// 3. Write a “person” class to hold all the details

class person{
    constructor(name,age,sex,fathername,mothername,education,occupation){
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.fathername = fathername;
        this.mothername = mothername;
        this.education = education;
        this.occupation = occupation;

    }
}

let person1 = new person("P.Ganesh","30","Male","S.Palraj","P.Manonmani","B.E","Self-employed")
// console.log(person1)

// OUTPUT:

// person {
//     name: 'P.Ganesh',
//     age: '30',
//     sex: 'Male',
//     fathername: 'S.Palraj',
//     mothername: 'P.Manonmani',
//     education: 'B.E',
//     occupation: 'Self-employed'
//   }

// 4. write a class to calculate the uber price

class uber {
  constructor(fixedcharge,perkm,distance,toll){
    this.fixedcharge = fixedcharge;
    this.perkm = perkm;
    this.distance = distance;
    this.toll = toll;
  }
  charge (){
    let data = (this.fixedcharge + (this.perkm * this.distance) + this.toll);
    return data
  }
}

let firstRide = new uber (50,15,10,50);
console.log(`The Uber ride rate is ${firstRide.charge()}`)

// output
// The Uber ride rate is 250