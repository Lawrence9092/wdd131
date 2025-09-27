// =======================
// Footer Information
// =======================
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;

  // =======================
  // Weather Information
  // =======================
  const temperature = 22; // °C (static for now)
  const windSpeed = 10;   // km/h (static for now)

  function calculateWindChill(tempC, speedKmh) {
    return (
      13.12 +
      0.6215 * tempC -
      11.37 * Math.pow(speedKmh, 0.16) +
      0.3965 * tempC * Math.pow(speedKmh, 0.16)
    ).toFixed(1);
  }

  let windChillValue = "N/A";

  // Only calculate if conditions are met
  if (temperature <= 10 && windSpeed > 4.8) {
    windChillValue = calculateWindChill(temperature, windSpeed) + " °C";
  }

  // Update DOM
  document.getElementById("windChill").textContent = windChillValue;
});
