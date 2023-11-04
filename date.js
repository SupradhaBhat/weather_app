const apikey = "cdbb9bb9e06c4573812185129230406";
const apiurl = "https://api.weatherapi.com/v1/current.json?key=";

const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")

async function checkDate(city) {
    const response = await fetch(apiurl + apikey + `&q=${city}`);
        
    var data = await response.json();
    console.log(data);

    const currentTime = data.location.localtime.split(" ")[1];
    const currentDate = data.location.localtime.split(" ")[0];
    const currentDay = DayName(new Date(currentDate).getDay());
    const currentMonth = MonthName(new Date(currentDate).getMonth());
    document.querySelector(".country").innerHTML = data.location.country;

    const currentHour = currentTime.split(":")[0];
    const currentMinute = currentTime.split(":")[1];

    document.getElementById('date').innerHTML = 
    currentHour+`:`+currentMinute+` - ` +  currentDay + `, ` + new Date(currentDate).getDate() + ` ` + currentMonth + ` ` + new Date(currentDate).getFullYear();
}

searchbtn.addEventListener("click",()=>{
    checkDate(searchbox.value);
})

// Function to get the name of day
function DayName(num) {
    switch (num) {
      case 0:
        return "Sunday";
  
      case 1:
        return "Monday";
  
      case 2:
        return "Tuesday";
  
      case 3:
        return "Wednesday";
  
      case 4:
        return "Thursday";
  
      case 5:
        return "Friday";
  
      case 6:
        return "Saturday";
  
      default:
        return "Don't Know";
    }
  }

// function to get the name of the month
function MonthName(num) {
    switch(num){
        case 0: 
            return "January"; 
        case 1: 
            return "February"; 
        case 2: 
            return "March";
        case 3: 
            return "April"; 
        case 4: 
            return "May"; 
        case 5: 
            return "June"; 
        case 6: 
            return "July"; 
        case 7: 
            return "August"; 
        case 8: 
            return "September"; 
        case 9: 
            return "October"; 
        case 10: 
            return "November"; 
        case 11: 
            return "December"; 
    }
}
