export interface CountryDetail {
    country_id: string;
    probability: number;
  }

  export interface CountryFinal {
    count: number;
    name: string;
    country: CountryDetail[];
  }