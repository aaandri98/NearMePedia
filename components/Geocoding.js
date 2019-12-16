import * as Location from 'expo-location';

export async function getTextAddress(long, lat) {

    await Location.reverseGeocodeAsync({
        longitude: long,
        latitude: lat
    }).then(res => {
        let address = res[0].street + ", " + res[0].city + ", " + res[0].country;
        return address;
    })
}
