export interface requestDef {
  user?: string;
  location: string;
  name: string;
  number: string;
  alt_number: string;
  email: string;

  //   for address
  full_address: {
    house: string;
    area: string;
    landmark: string;
    pincode: string;
  };
  //
  cats: {
    male: number; // Number of male cats
    female: number; // Number of female cats
  };
  age: string;
  illness: string;
  gpsLocation: string;
  adhar: string;
  pan: string;
  transport: string;
}