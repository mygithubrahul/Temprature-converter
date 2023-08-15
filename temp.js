function convertToCelsius() {
    const celsiusInput = document.getElementById("celsiusInput");
    const resultCelsius = document.getElementById("resultCelsius");
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    resultCelsius.textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
  }
  
  function convertToFahrenheit() {
    const fahrenheitInput = document.getElementById("fahrenheitInput");
    const resultFahrenheit = document.getElementById("resultFahrenheit");
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) * 5/9;
    resultFahrenheit.textContent = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
  }
  