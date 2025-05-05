let characters = [
    [
    "Luke Skywalker",
       177,
      "male",
      77,
    "brown",
    ],
    [
       "Leia Organa",
      160,
      "female",
       56,
       "blue",
    ],
    [
       "Han Solo",
      180,
      "male",
      80,
      "brown",
    ],
    [
       "Chewie",
      222,
      "male",
      190,
       "black",
    ],
    [
      "kevien",
      106,
       "male",
      32.2,
       "red",
    ],
  ];


// console.log(characters[0][0]);

let namesArr = characters.map(currentValue => {
    return currentValue[0];
})

console.log(namesArr);

//------

let hightsArr = characters.map(currentValue => {
    return currentValue[1];
})

console.log(hightsArr);

//------

let total_height = hightsArr.reduce((currentValue, sum) =>{
    return sum + currentValue;
})

console.log(total_height);


//------

console.log(hightsArr.filter(currentValue => {
    return currentValue < 200;
}))

//------

let arr = characters.filter((currentValue) => {
    return currentValue[2] === "male"
})

console.log(arr)

let massSorted = characters.sort((a, b) => {
    if(a[3] > b[3]){
        return 1
    } else return -1
})

console.log(massSorted);

let heightSorted = characters.sort((a, b) => {
    if(a[1] > b[1]){
        return 1
    } else return -1
})

console.log(heightSorted);

console.log(characters.every((item) => {
    return item[3] > 40
}))

console.log(characters.every((item) => {
    return item[1] < 200
}))

console.log(characters.some((item) => {
    return item[4] == "blue"
}))

console.log(characters.some((item) => {
    return item[1] > 210
}))
