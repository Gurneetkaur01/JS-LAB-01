// First 
const marks = [85, 97, 44, 37, 76, 60];

const totalMarks = marks.reduce((acc, mark) => acc + mark, 0);
const averageMarks = totalMarks / marks.length;

console.log(averageMarks);

// Second 
const prices = [250, 645, 300, 900, 50];

const finalPrices = prices.map(price => price * 0.90);

console.log(finalPrices);


// Third


const companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];


companies.shift();





const indexOfUber = companies.indexOf("Uber");
if (indexOfUber !== -1) {
  companies.splice(indexOfUber, 1, "Ola");
}



companies.push("Amazon");

console.log(companies);