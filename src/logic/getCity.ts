import Address from './Address';
import getLocation from './getLocation';
import Position from './Position';

export default async function getCity(): Promise<Address> {
    const location: Position = await getLocation();
    const res: Address = { city: 'Kiev', continent: 'Europe', countryName: 'Ukraine' };

    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.coords.latitude}&longitude=${location.coords.longitude}&localityLanguage=en`;

    await fetch(geoApiUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            res.city = data.city;
            res.continent = data.continent;
            res.countryName = data.countryName;
        });

    return res;
}
