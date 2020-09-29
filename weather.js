class Weather {
  constructor(city, country) {
    this.apiKey = '817aa40af18debe0f0128a7de3084738'; 
    this.city = city; 
    this.country = country; 

  }

  //fetch weather from api 
  async getWeather() {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apiKey}&units=metric`);
    
    const responseData = await response.json(); 
    return responseData;  

  }

  // change weather location 
  changeLocation(city, country) {
    this.country = country; 
    this.city = city;  
  }

}