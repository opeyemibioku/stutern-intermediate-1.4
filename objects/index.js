//Question 1

function InstagramPost(handle, content, image, views, likes) {
  (this.handle = handle),
    (this.content = content),
    (this.image = image),
    (this.views = views),
    (this.likes = likes);
}

//Question 2

const post1 = InstagramPost(
  "Opeyemi",
  "What an amazing view!",
  "https://image1.jpg",
  120,
  15
);
const post2 = InstagramPost(
  "Daniel",
  "This is interesting",
  "https://image2.jpg",
  90,
  12
);

//Question 3

// Using the factory function
function createPerson(name, age, location) {
  return {
    name: name,
    age: age,
    location: location,
  };
}
const Musa = createPerson("Musa Dawodu", 19, "Lekki, Lagos State");

function createJambScores(eng, govt, lit, crk) {
  return {
    eng: eng,
    govt: govt,
    lit: lit,
    crk: crk,
  };
}
Musa.MusaJambScores = createJambScores(70, 85, 82, 94);

// Question 4

// Method 1 - Using Object.assign()

const personOne = {
  name: "Ruth",
  class: "Grade 1",
};

const personTwo = Object.assign({}, personOne);

console.log(personOne);
console.log(personTwo);

personTwo.name = "Alex";

console.log(personOne);
console.log(personTwo);

// Method 2 - Using spread syntax {...}

const personThree = { ...personOne };
personThree.name = "Joe";
console.log({ personOne });
console.log({ personThree });

// Method 3 - Using the method JSON.parse(JSON.stringify())

const personFour = JSON.parse;
personFour.name = "Tayo";
console.log({ personOne });
console.log({ personFour });

//Question 5

const presidentialCandidates = {
  AAC: "Omoyele Sowore",
  ACCORD: "Christopher Imumolen",
  APC: "Bola Ahmed Tinubu",
  LP: "Peter Obi",
  NNPP: "Rabiu Kwankwaso",
  PDP: "Atiku Abubakar",
};

// Using the enumeration method (for..of)

for (const [key, value] of Object.entries(presidentialCandidates)) {
  console.log(`${value} is the presidential candidate of ${key}`);
}
