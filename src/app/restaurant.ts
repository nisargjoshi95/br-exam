export interface Restaurant {
  name: string,
  backgroundImageUrl: string,
  category: string,
  contact: {
    phone: string,
    formattedPhone: string,
    twitter: string
  },
  location: {
    address: string,
    crossStreet: string,
    lat: number,
    lng: number,
    postalCode: string,
    cc: string,
    city: string,
    state: string,
    country: string,
    formattedAddress: string[]
  }
}