# react-primitives-mapquest-static-map

A simple wrapper for an `<Image />` element with a url for MapQuest's Static Map API:
https://developer.mapquest.com/documentation/static-map-api/v5/getting-started/

## Installation
```
npm install --save react-primitives-mapquest-static-map
```

## Usage
```js
var MapQuestStaticMap = require('react-primitives-mapquest-static-map');

class MapExample extends Component {
  render() {
    return (
        <MapQuestStaticMap
            style={styles.map} {...locationProps}
            latitude={'37.7749'}
            longitude={'-122.4194'}
            zoom={11}
            size={{ width: 300, height: 550 }}
        />
    );
  }
}
```

## Props
| Prop | Type | Description |
|---|---|---|
|**`latitude`**|`string`|latitude point.|
|**`longitude`**|`string`|longitude point.|
|**`size`**|`object`| the image size - `{ width: 300, height: 550 }`|
|**`zoom`**|`number`|defines the zoom level of the map.|
|**`scale`**|`number`|scale=2 returns twice as many pixels as scale=1. |
|**`format`**|`string`|'png', 'jpg', 'jpg70', 'jpg80', 'jpg90', 'gif'. Use the `MapQuestStaticMap.ImageFormats` enum. default is `jpg`.|
|**`markers`**| `array` | array of `{ latitude, longitude }` markers to render |
|**`mapType`**|`string`|'map', 'satellite', 'hybrid', 'light', 'dark'. Use the `MapQuestStaticMap.MapTypes` enum. default is `map`.|
|**`hasCenterMarker`**|`bool`|add a marker on the center. default is `false`.|

and also any `Image.propTypes`.

see: http://facebook.github.io/react-primitives/docs/image.html#props

## Example
See the example in the `Example` folder.

## Props
Inspired by https://github.com/jongold/react-primitives-google-static-map (https://github.com/jongold) and his fork of https://github.com/yelled3/react-native-google-static-map (https://github.com/yelled3)
