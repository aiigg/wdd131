// Footer Dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Static Weather Values (Metric: °C and km/h)
// Note: Bali's typical temperature is ~28°C with 12 km/h wind. 
// Since 28°C is above the metric threshold (<= 10°C), this will correctly output "N/A" for wind chill.
const temperature = 28;
const windSpeed = 12;

// One-line Metric Wind Chill Formula (Environment Canada / WMO standard)
const calculateWindChill = (temp, speed) => (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);

// Conditional check before calling calculateWindChill
const windChillElement = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.innerHTML = `${calculateWindChill(temperature, windSpeed)} &deg;C`;
} else {
    windChillElement.textContent = "N/A";
}