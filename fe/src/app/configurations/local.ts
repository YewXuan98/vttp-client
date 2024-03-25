import { Configuration } from "./models";

export const config: Configuration = {
  apiUrl: 'http://localhost:8080',
  authUrl: 'http://localhost:8081',
  clientId: 'test',
  clientSecret: 'test',
  carousel: [
    {
      title: 'Title',
      text: 'Text',
      imageUrl: ''
    },
    {
      title: 'Title',
      text: 'Text',
      imageUrl: ''
    },
    {
      title: 'Title',
      text: 'Text',
      imageUrl: ''
    }
  ],
  bannerUrl: ''
};

export { Configuration };
