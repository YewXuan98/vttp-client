export interface Carousel  {
    title: string;
    text: string;
    imageUrl: string;
  }
  
  export interface Configuration {
    apiUrl: string;
    authUrl: string;
    clientId: string;
    clientSecret: string;
    carousel: Array<Carousel>;
    bannerUrl: string;
  }