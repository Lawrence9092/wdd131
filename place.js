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

  // One-line function
  function calculateWindChill(t, s) { 
    return (13.12 + 0.6215*t - 11.37*Math.pow(s,0.16) + 0.3965*t*Math.pow(s,0.16)).toFixed(1); 
  }

  let windChillValue = "N/A";

  if (temperature <= 10 && windSpeed > 4.8) {
    windChillValue = calculateWindChill(temperature, windSpeed) + " °C";
  }

  document.getElementById("windChill").textContent = windChillValue;
});
