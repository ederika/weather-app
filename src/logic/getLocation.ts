import Position from "./Position";

export default function getLocation(): Promise<Position> {
    return new Promise((resolve, reject) => {
        let res: Position = { coords: { latitude: 0, longitude: 0 } };

        const success = (position: GeolocationPosition) => {
            res.coords.latitude = position.coords.latitude;
            res.coords.longitude = position.coords.longitude;
            resolve(res);
        };
        const error = () => {
            reject(new Error("Unable to retrieve your location"));
        };

        navigator.geolocation.getCurrentPosition(success, error);
    });
}
