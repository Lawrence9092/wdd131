// Get the current year
const currentYear = new Date().getFullYear();

// Output the current year in the footer copyright paragraph
document.getElementById("year").textContent = currentYear;

// Output the last modified date of the document
document.getElementById("lastModified").textContent = document.lastModified;
