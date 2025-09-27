document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("lastModified").textContent = document.lastModified;
});

// =======================
// Footer Information
// =======================
document.querySelector("footer p").innerHTML = 
  `&copy; ${new Date().getFullYear()} | Your Name | Japan`;

document.getElementById("lastModified").textContent = document.lastModified;

// =======================
// Weather Information
// =======================

// Static values (match what you display in the HTML)
const temperature = 22;  // °C
const windSpeed = 10;    // km/h

// Function to calculate Wind Chill in °C
function calculateWindChill(tempC, speedKmh) {
  // Wind Chill formula for Celsius (Environment Canada formula)
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(speedKmh, 0.16) +
    0.3965 * tempC * Math.pow(speedKmh, 0.16)
  ).toFixed(1); // Round to 1 decimal place
}

// =======================
// Apply conditions
// =======================
let windChillValue = "N/A";

// Conditions: temp <= 10 °C AND wind speed > 4.8 km/h
if (temperature <= 10 && windSpeed > 4.8) {
  windChillValue = calculateWindChill(temperature, windSpeed) + " °C";
}

// Display in the Weather section
document.querySelector("#weather .weather-box").innerHTML += `
  <p><strong>Calculated Wind Chill:</strong> ${windChillValue}</p>
`;
