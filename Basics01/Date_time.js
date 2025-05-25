let mydate = new Date()
console.log(mydate); // Date object

// console.log(mydate.toString()); // Converts to a human-readable string
// // Example output: "Sun May 25 2025 14:30:00 GMT+0000 (Coordinated Universal Time)"
// console.log(mydate.toISOString()); // Converts to ISO 8601 string (UTC)
// // Example output: "2025-05-25T14:30:00.000Z"
// console.log(mydate.toUTCString()); // Converts to a string in UTC time zone
// // Example output: "Sun, 25 May 2025 14:30:00 GMT"
// console.log(mydate.toDateString()); // Converts to date portion only (human-readable)
// // Example output: "Sun May 25 2025"
// console.log(mydate.toTimeString()); // Converts to time portion only (human-readable)
// // Example output: "14:30:00 GMT+0000 (Coordinated Universal Time)"
// console.log(mydate.toLocaleString()); // Converts to string using local time and locale
// // Example output: "5/25/2025, 2:30:00 PM"
// console.log(mydate.toLocaleDateString()); // Converts to date string using local format
// // Example output: "5/25/2025"
// console.log(mydate.toLocaleTimeString()); // Converts to time string using local format
// // Example output: "2:30:00 PM"
// console.log(mydate.valueOf()); // Returns the timestamp (milliseconds since Jan 1, 1970)
// // Example output: 1748183400000

console.log(typeof mydate); // "object" - Date is an object type in JavaScript

let mydate2 = new Date(2025,0,25); // Creates a date for January 25, 2025 (months are 0-indexed in JavaScript)
console.log(`mydate2: ${mydate2}`); // Date object for January 25, 2025
console.log(mydate2); // Outputs the date in local time zone);
console.log(mydate2.toDateString());    // Converts to date portion only (human-readable)

let mydate3 = new Date("2025-01-25"); // Creates a date from an ISO 8601 string
console.log(mydate3); // Outputs the date in local time zone
console.log(mydate3.toDateString()); // Converts to date portion only (human-readable)  

let mytimestamp = Date.now(); // Gets the current timestamp in milliseconds since Jan 1, 1970

// console.log(mytimestamp); // Outputs the current timestamp

// console.log(mydate3.getTime()); // Gets the timestamp for mydate3 in milliseconds since Jan 1, 1970 
// console.log(Math.floor(mydate3.getTime()/1000)); // Converts to seconds since Jan 1, 1970

// console.log(mydate3.getMonth()+1); // Gets the month (0-11, where 0 is January)
// console.log(mydate3.getDate()); // Gets the day of the month (1-31)
// console.log(mydate3.getDay()); // Gets the day of the week (0-6, where 0 is Sunday)

mydate3.toLocaleString('Default', { timeZone: 'America/New_York', hour12: true, 
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }); // Converts to a localized string in New York time zone with full date and time format 

  

