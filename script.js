const hImg = document.querySelector(".hero-image h1");
var mystr = "My ";


//? Changing the h1 with a for loop
// 1. Select and define a constant for the div with a class of "hero-image"
// 2. Create a mutable (non-const) variable that has the string "My "
// 3. Create a for loop that will run three times and adds the string "Hero " to the end of the string you defined above
// 4. Select the hero h1 and set the text to the string variable you created and modified

for (var i = 0; i < 3;) {
	i = i + 1;
	mystr = mystr + " Hero";
	hImg.innerHTML = mystr;
}

//? Add even numbers in a while loop
// 5. Create a while loop that will run through the scores array and add every even number to a global variable
// 6. Log the result of adding every even number in the scores array to the console
// Hint: (i % 2 === 0) is a way to check if a number is even, the statement will be true if even, false if odd
const scores = [
	320, 340, 287, 118, 336, 281, 269, 209, 155, 62, 236, 246, 206, 211, 266, 333, 349, 69, 93, 290,
	197, 108, 128, 310, 168, 121, 295, 163, 98, 295, 193, 206, 132, 302, 267, 306, 224, 57, 247,
	147, 303, 136, 97, 255, 299, 79, 197, 118, 302, 188, 186, 81, 131, 269, 300, 171, 132, 154, 224,
	348, 127, 121, 225, 93, 195, 340, 186, 159, 173, 275, 128, 256, 211, 47, 307, 107, 123, 48, 284,
	162, 214, 207, 135, 325, 251, 191, 114, 156, 249, 294, 230, 343, 168, 234, 165, 299, 289, 301,
];

var x = 0
var evenNum = [0];
var evenSum = 0;

while (x < scores.length) {
	x = x + 1;
	if (scores[x] % 2 === 0) {
		evenNum.push(scores[x]);
		var vv = scores[x];
		evenSum = evenSum + vv;
	}
	//console.log("ran " + x + " time(s)");
	//console.log("there are " + evenNum.length + " even numbers");
}
//console.log(evenNum);
console.log(evenSum);

//? Append bug.jpg img to all item elements using a do-while loop
// 7. Select all the div elements that contain the class "item"
// 8. Create a do-while loop that will loop through all the divs that contain the class "item"
// 9. The loop will create an "img" element and set the "src" attribute to "bug.jpg"
// 10. Each item will append the newly created img element as a child

const items = document.querySelectorAll(".item");
d = 0;
do {
	var img = document.createElement("img");
	img.src = "bug.jpg";
	items[d].appendChild(img);
	d++;
} while (d < items.length);