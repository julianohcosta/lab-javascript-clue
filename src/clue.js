// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: 30,
        description: 'This is Jacob the entrepreneur',
        image: "Jacob's image",
        color: 'blue'
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        occupation: 'Lawyer',
        age: 35,
        description: 'This is John the Lawyer',
        image: "John's image",
        color: 'gray'
    },
    {
        firstName: 'Rachel',
        lastName: 'Green',
        occupation: 'Actress',
        age: 50,
        description: 'This is Rachel the actress',
        image: "Rachel's image",
        color: 'yellow'
    },
    {
        firstName: 'Monica',
        lastName: 'Geller',
        occupation: 'Architect',
        age: 42,
        description: 'This is Monica the architect',
        image: "Monica's image",
        color: 'pink'
    },
    {
        firstName: 'Sanji',
        lastName: 'Vinsmoke ',
        occupation: 'Chef',
        age: 28,
        description: 'This is Sanji the chef',
        image: "Sanji's image",
        color: 'black'
    },
    {
        firstName: 'Robin ',
        lastName: 'Nico',
        occupation: 'Teacher',
        age: 38,
        description: 'This is Robin the teacher',
        image: "Robin's image",
        color: 'green'
    },
];

// Rooms Array

const roomsArray = [
    {
        name: 'Foyer'
    },
    {
        name: 'Kitchen'
    },
    {
        name: 'Dining Room'
    },
    {
        name: 'Living Room'
    },
    {
        name: 'Master Bedroom'
    },
    {
        name: 'Bathroom'
    },
    {
        name: 'Laundry Room'
    },
    {
        name: 'Guest Room'
    },
    {
        name: 'Home Office'
    },
    {
        name: 'Library'
    },
    {
        name: 'Kids Bedroom'
    },
    {
        name: 'Playroom'
    },
    {
        name: 'Basement'
    },
    {
        name: 'Garage'
    },
    {
        name: 'Pantry'
    },
];

// Weapons Array

const weaponsArray = [
    { 
        name: 'Sword', 
        weight: 5 
    },
    { 
        name: 'Spear', 
        weight: 4
    },
    { 
        name: 'Halberd', 
        weight: 7
    },
    { 
        name: 'Club', 
        weight: 2
    },
    { 
        name: 'Dagger', 
        weight: 3
    },
    { 
        name: 'Machete', 
        weight: 0
    },
    { 
        name: 'Battle axe', 
        weight: 6
    },
    { 
        name: 'Revolver', 
        weight: 10
    },
    { 
        name: 'Pitchfork', 
        weight: 2
    },
];


// ITERATION 2

function selectRandom(arr) { 
    if (arr.length === 0) return;
    if (arr.length === 1) return arr[0];
    return arr[Math.floor(Math.random()*arr.length)]
}

function pickMystery() { 

    return {
        suspect: suspectsArray[Math.floor(Math.random() * suspectsArray.length)],
        weapon: weaponsArray[Math.floor(Math.random() * weaponsArray.length)],
        room: roomsArray[Math.floor(Math.random() * roomsArray.length)]
    }

}


// ITERATION 3

function revealMystery(envelope) {
      return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`
 }

