import Address from './Address';
import getLocationByInput from './getLocationByInput';
import Position from './Position';

export default async function getAddressByInput(input: string): Promise<Address> {
    const location: Position | null = await getLocationByInput(input);

    const res: Address = { city: 'Kiev', continent: 'Europe', countryName: 'Ukraine' };

    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location?.coords.latitude}&longitude=${location?.coords.longitude}&localityLanguage=en`;

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
