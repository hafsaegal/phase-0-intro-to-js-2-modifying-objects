// const circle= {};

// console.log(circle);

// circle.radius=5;

// console.log(circle);

// circle["diameter"]=10;

// circle.circumference= circle.diameter * Math.PI

// console.log(circle.circumference);

// circle["area"]= Math.PI * circle.radius ** 2

// console.log(circle.area);

// console.log(circle);


// const mondayMenu = {
//   cheesePlate: {
//     soft: "Chèvre",
//     semiSoft: "Gruyère",
//     hard: "Manchego",
//   },
//   fries: "Curly",
//   salad: "Cobb",
// };

// mondayMenu.fries = "Sweet potato";

function destructivelyUpdateObject(obj, key, value) {
  obj[key] = value; //Why are we using bracket notation here?

  return obj;
}

const mondayMenu = {
  cheesePlate: {
    soft: "Chèvre",
    semiSoft: "Gruyère",
    hard: "Manchego",
  },
  fries: "Sweet potato",
  salad: "Cobb",
};

const tuesdayMenu = destructivelyUpdateObject(mondayMenu, "salad", "Caesar");

function nondestructivelyUpdateObject(obj, key, value) {
  //code to return new,updated menu object
  const newObj = { ...obj };
  newObj[key] = value;
  return newObj;
}
const sundayMenu = nondestructivelyUpdateObject(
  tuesdayMenu,
  "fries",
  "Shoestring"
);

console.log(tuesdayMenu.fries);
console.log(sundayMenu.fries);