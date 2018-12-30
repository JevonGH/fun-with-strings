function reverse() {
	let myStr = document.getElementById('str').value;
	let reversedStr = "";
	for(let char of myStr) {
		reversedStr = char + reversedStr;
	}
	document.getElementById('reversedStr').innerHTML = reversedStr;
}

function countVowels() {
	let vowStr = document.getElementById('str').value;
	const vowels = ["a", "e", "i", "o", "u"]
	let c = 0;

	for(let letter of vowStr.toLowerCase()){
		if(vowels.includes(letter)) {
			c++
		}
	}
	document.getElementById('vowels').innerHTML = c;
}

function palindrome() {
	let palStr = document.getElementById('str').value;
	let re = /[\W_]/g;
	let lowRegStr = palStr.toLowerCase().replace(re,'');
	let reverseStr = lowRegStr.split('').reverse().join('');
	if(reverseStr === lowRegStr) {
		document.getElementById('palindrome').innerHTML = 'Yes';
	} else {
		document.getElementById('palindrome').innerHTML = 'No';
	}
}

function runFunctions() {
	reverse();
	countVowels();
	palindrome();
}