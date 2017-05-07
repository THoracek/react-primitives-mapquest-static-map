import React, {Component} from 'react';
import {Image} from 'react-primitives';

const defaultMapScale = () => {
  return 2;
};

const values = (obj) => {
  return Object.keys(obj).map(key => obj[key]);
};

const IMAGE_FORMATS = {
  //png specifies the PNG format.
  PNG: 'png',

  //gif specifies the GIF format.
  GIF: 'gif',

  //jpg (default) specifies the JPEG compression format at 100% quality.
  JPG: 'jpg',

  //jpg (default) specifies the JPEG compression format at 70% quality.
  JPG70: 'jpg70',

  //jpg (default) specifies the JPEG compression format at 80% quality.
  JPG80: 'jpg80',

  //jpg (default) specifies the JPEG compression format at 90% quality.
  JPG90: 'jpg90'
};

const MAP_TYPES = {
  // map (default) specifies a standard MapQuest map image, as is normally shown on the MapQuest website.
  MAP: 'map',

  // hybrid specifies a hybrid of the satellite and road image,
  // showing a transparent layer of major streets and place names on the satellite image.
  HYBRID: 'hyb',

  // satellite specifies a satellite image.
  SATELLITE: 'sat',

  // light specifies a white backed map with grey streets and place names.
  LIGHT: 'light',

  // dark specifies a black backed map with grey streets and place names.
  DARK: 'dark'
};

const IMAGE_FORMATS_VALUES = values(IMAGE_FORMATS);
const MAP_TYPES_VALUES = values(MAP_TYPES);

// the Image's source should be ignored
const {source, ...imagePropTypes} = Image.propTypes;

/**
 * A wrapper for MapQuest's Static Maps
 *
 * @see https://developer.mapquest.com/documentation/static-map-api/v5/map/
 *
 * @example: https://developer.mapquest.com/documentation/static-map-api/v5/examples/basic/map-with-center/
 */
class MapQuestStaticMap extends Component {
  render() {
    return (
        <Image
            style={[this.props.style, this.props.size]}
            source={{uri: this.staticMapUrl}}
        />
    );
  }

  get staticMapUrl() {
    const {
      latitude,
      longitude,
      zoom,
      size,
      scale,
      format,
      mapType
    } = this.props;

    const {width, height} = size;
    const rootUrl = this.constructor.RootUrl;

    return `${rootUrl}?center=${latitude},${longitude}&zoom=${zoom}&size=${width}x${height}@${scale}x&type=${mapType}&format=${format}&${this.apiKeyParam}`;
  }

  get apiKeyParam() {
    const apiKey = this.constructor.ApiKey;
    return apiKey ? `key=${apiKey}` : '';
  }
}

// https://developer.mapquest.com/user/register
MapQuestStaticMap.ApiKey = null;

MapQuestStaticMap.RootUrl = 'https://www.mapquestapi.com/staticmap/v5/map';

MapQuestStaticMap.ImageFormats = IMAGE_FORMATS;

MapQuestStaticMap.MapTypes = MAP_TYPES;

MapQuestStaticMap.propTypes = {
  ...imagePropTypes,

  size: React.PropTypes.shape({
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired
  }),


  /**
   * Defines the zoom level of the map
   *
   * @see //https://developer.mapquest.com/documentation/static-map-api/v5/map/#request_parameters-zoom
   */
  zoom: React.PropTypes.number,

  /**
   * @see https://developer.mapquest.com/documentation/static-map-api/v5/map/#request_parameters-format
   */
  format: React.PropTypes.oneOf(IMAGE_FORMATS_VALUES),

  /**
   * @see https://developer.mapquest.com/documentation/static-map-api/v5/map/#request_parameters-type
   */
  mapType: React.PropTypes.oneOf(MAP_TYPES_VALUES),

  /**
   * Add a marker on the center
   */
  hasCenterMarker: React.PropTypes.bool
};

MapQuestStaticMap.defaultProps = {
  scale: defaultMapScale(),
  format: IMAGE_FORMATS.JPG,
  mapType: MAP_TYPES.MAP,
  hasCenterMarker: true,
  markers: [],
};


export default MapQuestStaticMap;