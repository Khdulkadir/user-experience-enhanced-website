// Get the current date
const headerdatecurrentDate = new Date();

// Define the days of the week in Dutch
const headerdatedaysOfWeek = [
  "Zondag",
  "Maandag",
  "Dinsdag",
  "Woensdag",
  "Donderdag",
  "Vrijdag",
  "Zaterdag",
];

// Define the months in Dutch
const headerdatemonths = [
  "Januari",
  "Februari",
  "Maart",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Augustus",
  "September",
  "Oktober",
  "November",
  "December",
];

// Get the day of the week, month, and year
const headerdatedayOfWeek =
  headerdatedaysOfWeek[headerdatecurrentDate.getDay()];
const headerdatemonth = headerdatemonths[headerdatecurrentDate.getMonth()];
const headerdatedayOfMonth = headerdatecurrentDate.getDate();
const headerdateyear = headerdatecurrentDate.getFullYear();

// Construct the date string
const headerdatedateString = `${headerdatedayOfWeek} ${headerdatedayOfMonth} ${headerdatemonth}, ${headerdateyear}`;

// Find the paragraph element with the class "header-date" and set its text content to the constructed date string
const headerdatedateParagraph = document.querySelector(".header-date");
headerdatedateParagraph.textContent = headerdatedateString;

//______________________________________________________________________//

// Get all elements with the class "article-date" or "sub-article-date"
const articledateParagraphs = document.querySelectorAll(
  ".article-date, .sub-article-date, .sub-article-date-mobile"
);

// Loop through each paragraph element
articledateParagraphs.forEach((paragraph) => {
  // Get the date string from the paragraph's text content
  const articledateString = paragraph.textContent;

  // Parse the date string
  const articledate = new Date(articledateString);

  // Define the months in Dutch (shortened version)
  const articledatemonths = [
    "Jan",
    "Feb",
    "Mrt",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dec",
  ];

  // Extract the month and day from the parsed date
  const articledatemonth = articledatemonths[articledate.getMonth()];
  const articledatedayOfMonth = articledate.getDate();

  // Construct the shortened date string
  const shortenedDateString = `${articledatedayOfMonth} ${articledatemonth}`;

  // Set the text content of the paragraph to the shortened date string
  paragraph.textContent = shortenedDateString;
});


// Change Minuten to Min

// Get all elements with the class "reading-time"
var elements = document.getElementsByClassName("reading-time");

// Loop through each element
for (var i = 0; i < elements.length; i++) {
    // Get the text content of the element
    var text = elements[i].textContent;
    
    // Replace "minuten" with "min"
    var newText = text.replace("minuten", "min");
    
    // Set the modified text back to the element
    elements[i].textContent = newText;
}


    // Input date string
    var inputDateString = document.querySelector('.article-post-date').textContent;

    // Parse the input date string into a Date object
    var dateObj = new Date(inputDateString);

    // Define an array to store the month names
    var monthNamesArray = [
      "Januari", "Februari", "Maart",
      "April", "Mei", "Juni", "Juli",
      "Augustus", "September", "Oktober",
      "November", "December"
    ];

    // Extract the day, month, year, hour, and minute from the Date object
    var dayValue = dateObj.getDate();
    var monthIndexValue = dateObj.getMonth();
    var yearValue = dateObj.getFullYear();
    var hourValue = dateObj.getHours();
    var minuteValue = dateObj.getMinutes();

    // Format the date and time
    var formattedDateStr = dayValue + " " + monthNamesArray[monthIndexValue] + " " + yearValue + ", " + hourValue + ":" + (minuteValue < 10 ? '0' : '') + minuteValue;

    // Update the content of the element with the formatted date
document.querySelector('.article-post-date').textContent = formattedDateStr;
