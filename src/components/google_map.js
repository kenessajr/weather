import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'



export default class Map extends Component {

render() {
  const defaultProps = {
    center: { lat: this.props.lat, lng: this.props.lon },
    zoom: 11
  }
  console.log(this.props);
    return (
      <div className='google-map'>
        <GoogleMapReact
          defaultCenter={ defaultProps.center }
          defaultZoom={ defaultProps.zoom }>
        </GoogleMapReact>
      </div>
    )
  }
}
