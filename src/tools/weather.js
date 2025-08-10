export const weatherTool = {
  name: 'weather',
  description: 'Gets weather information for a specified location (mock data for demo)',
  triggers: ['weather', 'temperature', 'forecast', 'climate'],
  argPattern: { location: true },
  
  async execute(args, message) {
    const location = args.location || 'Unknown Location';
    
    // Mock weather data for demonstration
    const mockWeatherData = [
      { temp: 22, condition: 'Sunny', humidity: 45 },
      { temp: 18, condition: 'Cloudy', humidity: 65 },
      { temp: 25, condition: 'Partly Cloudy', humidity: 55 },
      { temp: 15, condition: 'Rainy', humidity: 85 },
      { temp: 28, condition: 'Hot', humidity: 35 }
    ];
    
    const randomWeather = mockWeatherData[Math.floor(Math.random() * mockWeatherData.length)];
    
    return `🌤️  Weather in ${location}:
  Temperature: ${randomWeather.temp}°C
  Condition: ${randomWeather.condition}
  Humidity: ${randomWeather.humidity}%
  
  Note: This is mock data for demonstration purposes.`;
  }
};