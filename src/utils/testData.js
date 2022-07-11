const testData = {
  name: 'My Computer',
  children: [
    {
      name: 'Documents',
      children: [
        { name: 'Document1.jpg' },
        { name: 'Document2.jpg' },
        { name: 'Document3.jpg' },
      ],
    },
    {
      name: 'Desktop',
      children: [
        { name: 'Screenshot1.jpg' },
        { name: 'videopal.mp4' }
      ],
    },
    {
      name: 'Downloads',
      children: [
        {
          name: 'Drivers',
          children: [
            { name: 'Printerdriver.dmg' },
            { name: 'cameradriver.dmg' },
          ],
        },
      ],
    },
    {
      name: 'Applications',
      children: [
        { name: 'Webstorm.dmg' },
        { name: 'Pycharm.dmg' },
        { name: 'FileZila.dmg' },
        { name: 'Mattermost.dmg' },
      ],
    },
    { name: 'chromedriver.dmg' },
  ],
};

const testDataWithId = {
  name: 'My Computer',

  _id: 0,
  children: [
    {
      name: 'Documents',
      _id: 1,
      children: [
        { name: 'Document1.jpg', _id: 2, },
        { name: 'Document2.jpg', _id: 3, },
        { name: 'Document3.jpg', _id: 4, },
      ],
    },
    {
      name: 'Desktop',
      _id: 5,
      children: [
        { name: 'Screenshot1.jpg', _id: 6, },
        { name: 'videopal.mp4', _id: 7, }
      ],
    },
    {
      name: 'Downloads',
      _id: 8,
      children: [
        {
          name: 'Drivers',
          _id: 9,
          children: [
            { name: 'Printerdriver.dmg', _id: 10, },
            { name: 'cameradriver.dmg', _id: 11, },
          ],
        },
      ],
    },
    {
      name: 'Applications',
      _id: 12,
      children: [
        { name: 'Webstorm.dmg', _id: 13, },
        { name: 'Pycharm.dmg', _id: 14, },
        { name: 'FileZila.dmg', _id: 15, },
        { name: 'Mattermost.dmg', _id: 16, },
      ],
    },
    { name: 'chromedriver.dmg', _id: 17, },
  ]
};

const initializedTestData = {
  name: 'My Computer', checked: 0,
  _id: 0,
  children: [
    {
      name: 'Documents',
      _id: 1,
      children: [
        { name: 'Document1.jpg', _id: 2, checked: 0 },
        { name: 'Document2.jpg', _id: 3, checked: 0 },
        { name: 'Document3.jpg', _id: 4, checked: 0 },
      ],
    },
    {
      name: 'Desktop', checked: 0,
      _id: 5,
      children: [
        { name: 'Screenshot1.jpg', _id: 6, checked: 0 },
        { name: 'videopal.mp4', _id: 7, checked: 0 }
      ],
    },
    {
      name: 'Downloads', checked: 0,
      _id: 8,
      children: [
        {
          name: 'Drivers',
          _id: 9,
          children: [
            { name: 'Printerdriver.dmg', _id: 10, checked: 0 },
            { name: 'cameradriver.dmg', _id: 11, checked: 0 },
          ],
        },
      ],
    },
    {
      name: 'Applications', checked: 0,
      _id: 12,
      children: [
        { name: 'Webstorm.dmg', _id: 13, checked: 0 },
        { name: 'Pycharm.dmg', _id: 14, checked: 0 },
        { name: 'FileZila.dmg', _id: 15, checked: 0 },
        { name: 'Mattermost.dmg', _id: 16, checked: 0 },
      ],
    },
    { name: 'chromedriver.dmg', _id: 17, checked: 0 },
  ]
};

export {
  testData,
  testDataWithId,
  initializedTestData,
};
