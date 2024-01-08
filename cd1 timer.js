var countDownDate = new Date("dec 27,2023 09:51:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = hours + "h: "+ minutes + "m: " + seconds + "s";  
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
db.countdowns.createIndex({ "createdAt": 1 }, { expireAfterSeconds: 3600 }) // expires documents after 1 hour
db.countdowns.insertOne({
    "createdAt": new Date(),
    // other fields relevant to your countdown
})
//const countdownDoc = db.countdowns.findOne({ /* your query criteria */ }, { "createdAt": 1 })
const createdAtTimestamp = countdownDoc.createdAt.getTime(); // Get the timestamp
const currentTime = new Date().getTime();
const remainingTimeInSeconds = (createdAtTimestamp + (3600 * 1000)) - currentTime; // Calculate remaining time in milliseconds
const remainingHours = Math.floor(remainingTimeInSeconds / (60 * 60 * 1000));
const remainingMinutes = Math.floor((remainingTimeInSeconds % (60 * 60 * 1000)) / (60 * 1000));
const remainingSeconds = Math.floor((remainingTimeInSeconds % (60 * 1000)) / 1000);

console.log(`Remaining time: ${remainingHours} hours, ${remainingMinutes} minutes, ${remainingSeconds} seconds`);
