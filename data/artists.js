const artists = [
    {
      id: '1',
      name: 'Studie Nord',
      type: 'Tattoo',
      location: 'København N',
      priceFrom: 800,
      image: require('../assets/artist1.jpg'), 
      services: ['Traditional', 'Realism'],
    },

    {
        id: '2',
        name: 'Studie Syd',
        type: 'Tattoo',
        location: 'København S',
        priceFrom: 800,
        image: require('../assets/artist2.jpg'), 
        services: ['Fine line', 'Blackwork'],
      },

      {
        id: '3',
        name: 'Studie Nordvest',
        type: 'Barber',
        location: 'København NV',
        priceFrom: 350,
        image: require('../assets/artist3.jpg'), 
        services: ['Fade', 'Taper'],
      },

      {
        id: '4',
        name: 'Studie Øst',
        type: 'Barber',
        location: 'København Ø',
        priceFrom: 350,
        image: require('../assets/artist4.jpg'),
        services: ['Fade', 'Taper'],
      },
  ];
  
  export default artists;