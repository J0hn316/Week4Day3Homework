//Part I: HTML & CSS

//Rank you comfort with the following material on a scale of 0 - 5:

// After watching the videos I'll say I'm at a
// 4 - I feel pretty good about the material, but some extra review would help.


// Part II: JavaScript Reps

////////////////////////////////
// Easy Going
////////////////////////////////
// Write a for loop that will log the numbers 1 through 20.

// for(let i=0; i<=20;i++){
//     console.log(i)
// }

////////////////////////////////
// Get Even
////////////////////////////////
// Write a for loop that will log only the even numbers in 0 through 200.

// for(let i=0; i<=200; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }


////////////////////////////////
// Fizz Buzz
////////////////////////////////

// This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

// for(let i=0; i<=100; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log(i + " FizzBuzz")
//     }else if(i % 5 == 0){
//         console.log(i + " Buzz")
//     }else if(i % 3 == 0){
//         console.log(i + " Fizz")
//     }
// }

////////////////////////////////
// Wild Wild Life
////////////////////////////////

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// 1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// plantee[2] += 1
// console.log(plantee)

// 2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// wolfy[3] = "Gotham City"
// console.log(wolfy)

// 3. Give D'Art a second hometown by adding "Hawkins"
// dart.push("Hawkins")
// console.log(dart)

//4.Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
// wolfy.shift()
// wolfy.unshift("Gameboy")
// console.log(wolfy)


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

// //1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, michelangelo)

// let ninja_Turtles = ["Donatello","Leonardo","Raphael", "Michelangelo"]

// //2. Use a for of loop(not a typo - try it out! Try a for of loop) to call toUpperCase()on each of them and print out the result.

// for(const el of ninja_Turtles){
//     console.log(el.toUpperCase())
// }

////////////////////////////////
// Methods, Revisited
////////////////////////////////

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// // Console log: the index of Titanic

// // console.log(favMovies[8])

// // //1. use the .sort method Thought question: what did this do to the array? Did it permanently alter it?

//     favMovies.sort()
// console.log(favMovies)
// // Yes it permanently altered it 

//2. Use the method pop
    
//     favMovies.pop()
//     // console.log(favMovies)
// //3. push"Guardians of the Galaxy"

//     favMovies.push("Guardians of the Galaxy")
//     // console.log(favMovies);
 
// // //4. Reverse the array

//     favMovies.reverse()
//     // console.log(favMovies);

// //5. Use the shift method

//         favMovies.shift()
//         // console.log(favMovies);

// //6. unshift- what does it return?

//     favMovies.unshift('Land before time')
    // console.log(favMovies)
    // it returns the favMovies array with land before time as the first element of the array

//7. splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?

// console.log(favMovies.indexOf("Django Unchained")) 15
    // favMovies.splice(15)
    // // console.log(favMovies)
    // favMovies.push("Avatar")
    // console.log(favMovies)

// //yes 

//8. slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?


// console.log(favMovies.length)
// console.log(favMovies)
// favMovies.slice(0,8)

// yes

//9.store the value of your slice in a variable, console.log it - Thought question: what is going on here? 

// let slice = favMovies.slice(0,8)
// console.log(slice)

//10. console.log your final results

// console.log(favMovies)

//11. After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?

//-1

// 12.Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?

// No both let and const work.


////////////////////////////////
// Where is Waldo
////////////////////////////////

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];

// // //1. Remove Eggbert (hint look at the slice/splice method(s))
// // console.log(whereIsWaldo.indexOf("Eggbert"))

// whereIsWaldo.splice(1,1)
// // console.log(whereIsWaldo)

// //2.Change "Neff" to "No One"
// whereIsWaldo[1][2] = "No One"

// console.log(whereIsWaldo)
// whereIsWaldo

//3. Access and console.log "Waldo"
// console.log(whereIsWaldo[2][1][1])

////////////////////////////////
//  Excited Kitten
////////////////////////////////

//1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

//2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

// function getRandom(num){
//     return Math.floor((Math.random() * num));
// }

// let kittyTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

// for(let i=0; i<=20; i++){
//     if(i % 2 == 0){
//         const randomIndex = getRandom(kittyTalk.length)
//         console.log(i + " " + kittyTalk[randomIndex])
//     }
//     else{
//         console.log(i + " Love me, pet me! HSSSSSS!")
//     }
// }



////////////////////////////////
//  Find the Median
////////////////////////////////

//1. Find the median number in the following numsarray, then console.log that number.
//2. hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// nums.sort()

// console.log("The middle element is: ", (nums[(nums.length - 1)/parseInt('2')]));

// // I couldn't figure this one out.
// // Surprisingly the AI "Blackbox" answer this one for me.





