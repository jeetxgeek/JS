const name = "jeetesh"
const repo = "50"

console.log(`hello my name is ${name} and my repo count is ${repo}`);

const gamename = new String('kab-ad-di')
console.log(gamename[5]);
console.log(gamename.__proto__);

console.log(gamename.toUpperCase());
console.log(gamename.charAt('4'));
console.log(gamename.indexOf('d'));

const newstring = gamename.substring(0,4)
console.log(newstring);

const ne = "     jeetesh   "
console.log(ne.trim);

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('hite'));
console.log(gamename.split('-'));
