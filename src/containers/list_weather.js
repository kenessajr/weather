import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';
import '../App.css';

// we want to retreive data from redux
class WeatherList extends Component {
  // render a single city, a single row
  renderWeather(cityData){
    console.log(cityData);
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273 ); //array of data
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    console.log(cityData);

    return(
      <tr key={name}>
          <td>{name}</td>
          <td><Chart data={temps} color="orange" units="k" /></td>
          <td><Chart data={pressures} color="green" units="hPa"/></td>
          <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    );
  }

  render(){
    return(
      <table className="table table-hover">
          <thead>
              <tr>
                  <th>City</th>
                  <th>Temperature(K)</th>
                  <th>Pressure(hPa)</th>
                  <th>Humidity(%)</th>
              </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}){
  // we use the weather because we assign it to our weatherReducer in reducers to the weather key
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
