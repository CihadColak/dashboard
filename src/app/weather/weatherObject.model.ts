export interface innerWeatherObject {
  id: number,
  main: string,
  description: string,
  icon: string

}

export interface weatherObject {
  weather: innerWeatherObject[],
  main: {
    temp : number,
    feels_like: string,
  }

}
