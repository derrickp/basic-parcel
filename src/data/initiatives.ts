const initiatives = [
  {
    id: '1',
    fields: {
      'Initiative Name': 'Shopping',
      'Initiative Status': 'In Design',
      Timeline: 'November 2018',
    },
    createdTime: '2018-10-15T14:06:57.000Z',
  },
  {
    id: '2',
    fields: {
      'Initiative Name': 'Strength Training',
      'Initiative Due Date': '2018-08-17',
      'Initiative Status': 'Complete ',
      'Product manager': [
        {
          id: '1',
          email: 'peachie@juul.com',
          name: 'Princess Peach',
        },
      ],
      Timeline: 'August 2018',
    },
    createdTime: '2018-08-09T17:34:28.000Z',
  },
  {
    id: '3',
    fields: {
      'Initiative Name': 'Yoga Practice',
      'Initiative Status': 'Not started',
      'Product manager': [
        {
          id: '2',
          email: 'shellguy@juul.com',
          name: 'Bowser',
        },
      ],
    },
    createdTime: '2018-08-17T17:50:23.000Z',
  },
  {
    id: '4',
    fields: {
      'Initiative Name': 'Housekeeping',
      'Initiative Due Date': '2018-12-04',
      'Initiative Status': 'In Dev',
      'Product manager': [
        {
          id: '1',
          email: 'peachie@juul.com',
          name: 'Princess Peach',
        },
        {
          id: '3',
          email: 'ribbet@juul.com',
          name: 'Toad',
        },
      ],
      Timeline: 'December 2018',
    },
    createdTime: '2018-08-15T05:35:34.000Z',
  },
];
export default initiatives;
