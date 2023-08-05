import React, { useState, useCallback } from 'react';
import { View, TextInput, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';

// Set your Geocoding API key here
Geocoder.init('AIzaSyBneYjmqSHB47q93m5CDeVWMAztz1BbPfU');
const pinCoordinates = {
    latitude: 10.7201501,
    longitude: 122.5621063,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}
export default function TabTwoScreen() {
  const [location, setLocation] = useState('');
  const [coordinates, setCoordinates] = useState<{ latitude: number; longitude: number } | null>(null);
  const [showPin, setShowPin] = useState(true); // State to control pin visibility

  const handleSearch = useCallback(async () => {
    try {
      const response = await Geocoder.from(location);
      const { lat, lng } = response.results[0].geometry.location;
      setCoordinates({ latitude: lat, longitude: lng });
      setShowPin(true); // Show pin after a new search
    } catch (error) {
      console.error('Error geocoding location:', error);
    }
  }, [location]);

  const handleRemovePin = useCallback(() => {
    setShowPin(false); // Hide the pin
  }, []);

  const zoomFactor = 0.075; // 75% zoom factor

  const mapRegion = coordinates
    ? {
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        latitudeDelta: 0.0922 * zoomFactor,
        longitudeDelta: 0.0421 * zoomFactor,
      }
    : {
        latitude: pinCoordinates.latitude,
        longitude: pinCoordinates.longitude,
        latitudeDelta: pinCoordinates.latitudeDelta,
        longitudeDelta: pinCoordinates.longitudeDelta,
      };

  return (
    <View className='flex-1'>
      <View className='p-6'>
        <TextInput
          className='w-full h-10 rounded-xl border bg-slate-50 border-radius-20 mb-2 px-5 mt-9'
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 8 }}
          placeholder="Enter location (e.g. Philippines)"
          onChangeText={text => setLocation(text)}
          value={location}
        />
        <Button title="Search" onPress={handleSearch} />
        {showPin && (
          <Button title="Remove Pin" onPress={handleRemovePin} />
        )}
      </View>
      <MapView
        className='flex-1'
        initialRegion={mapRegion}
        region={mapRegion} // Set the region to match the searched coordinates
      >
        {showPin && (
          <Marker
            coordinate={{
              latitude: pinCoordinates.latitude,
              longitude: pinCoordinates.longitude,
            }}
            title="Default Pin Location"
            description={`Coordinates: ${pinCoordinates.latitude}, ${pinCoordinates.longitude}`}
          />
        )}
        {showPin && coordinates && (
          <Marker
            coordinate={{
              latitude: coordinates.latitude,
              longitude: coordinates.longitude,
            }}
            title="Entered Location"
            description={`Coordinates: ${coordinates.latitude}, ${coordinates.longitude}`}
          />
        )}
      </MapView>
    </View>
  );
}
