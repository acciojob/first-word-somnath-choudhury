function firstWord(s) {
  // your code here
	let modified = s.trim()
	let first = "";
	if (modified.length === 0)
		return s;
	
	for (let i = 0; i < modified.length; i++) {
		let ch = modified[i];
		if (ch !== ' '){
			first += ch;
		}
		else{
			break;
		}
	}
	return first;
}
// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
