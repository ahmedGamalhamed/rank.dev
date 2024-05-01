type RoomType = {
  id: string;
  messages: {
    text: string;
    authorId: string;
    userImage: string;
    fullName: string;
  }[];
  roomInfo: {
    ownerId: string;
    roomData: {
      roomName: string;
      roomDescription: string;
      repo: string;
      tags: string;
      roomLevel: number;
      maximumParticipants: number;
    };
    id: string;
    createdAt: number;
  };
  participants: {
    authId: string;
    isAdmin: boolean;
    fullName: string;
    imageUrl: string;
    followers: any[];
    following: any[];
    technologies: any[];
    socials: any[];
    createdAt: Date;
    updatedAt: Date;
    id: string;
  }[];
};

export const Rooms: RoomType[] = [
  {
    id: 'room3id',
    messages: [
      {
        text: 'React makes UI development fun!',
        authorId: 'reactdev',
        userImage: '/images/user.png',
        fullName: 'Rebecca React',
      },
    ],
    roomInfo: {
      ownerId: 'ownerid3',
      roomData: {
        roomName: 'React Room',
        roomDescription: 'Exploring the world of React and its ecosystem.',
        repo: 'www.github.com/facebook/react',
        tags: 'React JavaScript UI fasfasdfsaf safsdfsfsdfsdaf',
        roomLevel: 7,
        maximumParticipants: 4,
      },
      id: 'room3info',
      createdAt: Date.now(),
    },
    participants: [
      {
        authId: 'reactdev',
        isAdmin: true,
        fullName: 'Rebecca React',
        imageUrl: '/images/user.png',
        followers: [],
        following: [],
        technologies: [],
        socials: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 'reactdevid',
      },
      {
        authId: 'reactdevvv',
        isAdmin: true,
        fullName: 'Rebecca React',
        imageUrl: '/images/user.png',
        followers: [],
        following: [],
        technologies: [],
        socials: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 'reactdevid',
      },
    ],
  },
  {
    id: 'room4id',
    messages: [
      {
        text: 'Node.js for backend magic!',
        authorId: 'nodeguru',
        userImage: '/images/user.png',
        fullName: 'Nina Node',
      },
    ],
    roomInfo: {
      ownerId: 'ownerid4',
      roomData: {
        roomName: 'Node.js Room',
        roomDescription: 'Server-side development with Node.js.',
        repo: 'www.github.com/nodejs/node',
        tags: 'Node.js JavaScript Backend',
        roomLevel: 9,
        maximumParticipants: 2,
      },
      id: 'room4info',
      createdAt: Date.now(),
    },
    participants: [
      {
        authId: 'nodeguru',
        isAdmin: true,
        fullName: 'Nina Node',
        imageUrl: '/images/user.png',
        followers: [],
        following: [],
        technologies: [],
        socials: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 'nodeguruid',
      },
    ],
  },
  {
    id: 'room6id',
    messages: [
      {
        text: 'Flutter & Dart for cross-platform apps',
        authorId: 'flutterfan',
        userImage: '/images/user.png',
        fullName: 'Fiona Flutter',
      },
    ],
    roomInfo: {
      ownerId: 'ownerid6',
      roomData: {
        roomName: 'Flutter Room',
        roomDescription:
          'Building cross-platform applications with Flutter.Building cross-platform applications with Flutter.Building cross-platform applications with Flutter.Building cross-platform applications with Flutter.Building cross-platform applications with Flutter.Building cross-platform applications with Flutter.Building cross-platform applications with Flutter.Building cross-platform applications with Flutter.Building cross-platform applications with Flutter.Building cross-platform applications with Flutter.Building cross-platform applications with Flutter.',
        repo: 'www.github.com/flutter/flutter',
        tags: 'Flutter Dart Mobile',
        roomLevel: 4,
        maximumParticipants: 3,
      },
      id: 'room6info',
      createdAt: Date.now(),
    },
    participants: [],
  },
  {
    id: 'room7id',
    messages: [
      {
        text: 'Exploring the depths of Data Science with Python',
        authorId: 'datascientist',
        userImage: '/images/user.png',
        fullName: 'Diana Data',
      },
    ],
    roomInfo: {
      ownerId: 'ownerid7',
      roomData: {
        roomName: 'Data Science Room',
        roomDescription: 'Data Science discussions and Python programming.',
        repo: 'www.github.com',
        tags: 'Data Science Python Machine Learning',
        roomLevel: 10,
        maximumParticipants: 4,
      },
      id: 'room7info',
      createdAt: Date.now(),
    },
    participants: [
      {
        authId: 'datascientist',
        isAdmin: true,
        fullName: 'Diana Data',
        imageUrl: '/images/user.png',
        followers: [],
        following: [],
        technologies: [],
        socials: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 'datascientistid',
      },
      {
        authId: 'flutterfan',
        isAdmin: true,
        fullName: 'Fiona Flutter',
        imageUrl: '/images/user.png',
        followers: [],
        following: [],
        technologies: [],
        socials: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 'flutterfanid',
      },
      {
        authId: 'flutterfannn',
        isAdmin: true,
        fullName: 'Fiona Flutter',
        imageUrl: '/images/user.png',
        followers: [],
        following: [],
        technologies: [],
        socials: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 'flutterfanid',
      },
    ],
  },
  {
    id: 'room8id',
    messages: [
      {
        text: 'The art of Game Development',
        authorId: 'gamedev',
        userImage: '/images/user.png',
        fullName: 'Gary Game',
      },
    ],
    roomInfo: {
      ownerId: 'ownerid8',
      roomData: {
        roomName: 'Game Dev Room',
        roomDescription: 'All about game development and design.',
        repo: 'www.github.com',
        tags: 'Game Development Design Programming',
        roomLevel: 3,
        maximumParticipants: 2,
      },
      id: 'room8info',
      createdAt: Date.now(),
    },
    participants: [
      {
        authId: 'gamedev',
        isAdmin: true,
        fullName: 'Gary Game',
        imageUrl: '/images/user.png',
        followers: [],
        following: [],
        technologies: [],
        socials: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 'gamedevid',
      },
    ],
  },
  {
    id: 'room9id',
    messages: [
      {
        text: 'Mastering Machine Learning',
        authorId: 'mlmaster',
        userImage: '/images/user.png',
        fullName: 'Molly Machine',
      },
    ],
    roomInfo: {
      ownerId: 'ownerid9',
      roomData: {
        roomName: 'Machine Learning Room',
        roomDescription:
          'Deep dives into machine learning algorithms and practices.',
        repo: 'www.github.com',
        tags: 'Machine Learning AI Data Science',
        roomLevel: 11,
        maximumParticipants: 1,
      },
      id: 'room9info',
      createdAt: Date.now(),
    },
    participants: [
      {
        authId: 'mlmaster',
        isAdmin: true,
        fullName: 'Molly Machine',
        imageUrl: '/images/user.png',
        followers: [],
        following: [],
        technologies: [],
        socials: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 'mlmasterid',
      },
    ],
  },
  {
    id: 'room10id', // Note: This ID was already used in the initial example; ensure unique IDs for each room.
    messages: [
      {
        text: 'Blockchain beyond Bitcoin',
        authorId: 'blockchainbuff',
        userImage: '/images/user.png',
        fullName: 'Bobby Blockchain',
      },
    ],
    roomInfo: {
      ownerId: 'ownerid10', // Ensure this ID is unique if adjusting from the example
      roomData: {
        roomName: 'Blockchain Room',
        roomDescription:
          'Exploring blockchain technology and its applications.',
        repo: 'www.github.com',
        tags: 'Blockchain Cryptocurrency Ethereum',
        roomLevel: 2,
        maximumParticipants: 4,
      },
      id: 'room10info', // Ensure this ID is unique if adjusting from the example
      createdAt: Date.now(),
    },
    participants: [
      {
        authId: 'blockchainbuff',
        isAdmin: true,
        fullName: 'Bobby Blockchain',
        imageUrl: '/images/user.png',
        followers: [],
        following: [],
        technologies: [],
        socials: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 'blockchainbuffid',
      },
      {
        authId: 'blockchainbuffff',
        isAdmin: true,
        fullName: 'Bobby Blockchain',
        imageUrl: '/images/user.png',
        followers: [],
        following: [],
        technologies: [],
        socials: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 'blockchainbuffid',
      },
    ],
  },
  {
    id: 'room11id', // Note: This ID was already used in the initial example; ensure unique IDs for each room.
    messages: [
      {
        text: 'Blockchain beyond Bitcoin',
        authorId: 'blockchainbuff',
        userImage: '/images/user.png',
        fullName: 'Bobby Blockchain',
      },
    ],
    roomInfo: {
      ownerId: 'ownerid10', // Ensure this ID is unique if adjusting from the example
      roomData: {
        roomName: 'Blockchain Room',
        roomDescription:
          'Exploring blockchain technology and its applications.',
        repo: 'www.github.com',
        tags: 'Blockchain Cryptocurrency Ethereum',
        roomLevel: 2,
        maximumParticipants: 4,
      },
      id: 'room10info', // Ensure this ID is unique if adjusting from the example
      createdAt: Date.now(),
    },
    participants: [
      {
        authId: 'blockchainbuff',
        isAdmin: true,
        fullName: 'Bobby Blockchain',
        imageUrl: '/images/user.png',
        followers: [],
        following: [],
        technologies: [],
        socials: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 'blockchainbuffid',
      },
      {
        authId: 'blockchainbuffff',
        isAdmin: true,
        fullName: 'Bobby Blockchain',
        imageUrl: '/images/user.png',
        followers: [],
        following: [],
        technologies: [],
        socials: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 'blockchainbuffid',
      },
    ],
  },
  {
    id: 'room12id', // Note: This ID was already used in the initial example; ensure unique IDs for each room.
    messages: [
      {
        text: 'Blockchain beyond Bitcoin',
        authorId: 'blockchainbuff',
        userImage: '/images/user.png',
        fullName: 'Bobby Blockchain',
      },
    ],
    roomInfo: {
      ownerId: 'ownerid10', // Ensure this ID is unique if adjusting from the example
      roomData: {
        roomName: 'Blockchain Room',
        roomDescription:
          'Exploring blockchain technology and its applications.',
        repo: 'www.github.com',
        tags: 'Blockchain Cryptocurrency Ethereum',
        roomLevel: 2,
        maximumParticipants: 4,
      },
      id: 'room10info', // Ensure this ID is unique if adjusting from the example
      createdAt: Date.now(),
    },
    participants: [
      {
        authId: 'blockchainbuff',
        isAdmin: true,
        fullName: 'Bobby Blockchain',
        imageUrl: '/images/user.png',
        followers: [],
        following: [],
        technologies: [],
        socials: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 'blockchainbuffid',
      },
      {
        authId: 'blockchainbuffff',
        isAdmin: true,
        fullName: 'Bobby Blockchain',
        imageUrl: '/images/user.png',
        followers: [],
        following: [],
        technologies: [],
        socials: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 'blockchainbuffid',
      },
    ],
  },
  {
    id: 'room13id', // Note: This ID was already used in the initial example; ensure unique IDs for each room.
    messages: [
      {
        text: 'Blockchain beyond Bitcoin',
        authorId: 'blockchainbuff',
        userImage: '/images/user.png',
        fullName: 'Bobby Blockchain',
      },
    ],
    roomInfo: {
      ownerId: 'ownerid10', // Ensure this ID is unique if adjusting from the example
      roomData: {
        roomName: 'Blockchain Room',
        roomDescription:
          'Exploring blockchain technology and its applications.',
        repo: 'www.github.com',
        tags: 'Blockchain Cryptocurrency Ethereum',
        roomLevel: 2,
        maximumParticipants: 4,
      },
      id: 'room10info', // Ensure this ID is unique if adjusting from the example
      createdAt: Date.now(),
    },
    participants: [
      {
        authId: 'blockchainbuff',
        isAdmin: true,
        fullName: 'Bobby Blockchain',
        imageUrl: '/images/user.png',
        followers: [],
        following: [],
        technologies: [],
        socials: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 'blockchainbuffid',
      },
      {
        authId: 'blockchainbuffff',
        isAdmin: true,
        fullName: 'Bobby Blockchain',
        imageUrl: '/images/user.png',
        followers: [],
        following: [],
        technologies: [],
        socials: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 'blockchainbuffid',
      },
    ],
  },
  {
    id: 'room15id', // Note: This ID was already used in the initial example; ensure unique IDs for each room.
    messages: [
      {
        text: 'Blockchain beyond Bitcoin',
        authorId: 'blockchainbuff',
        userImage: '/images/user.png',
        fullName: 'Bobby Blockchain',
      },
    ],
    roomInfo: {
      ownerId: 'ownerid10', // Ensure this ID is unique if adjusting from the example
      roomData: {
        roomName: 'Blockchain Room',
        roomDescription:
          'Exploring blockchain technology and its applications.',
        repo: 'www.github.com',
        tags: 'Blockchain Cryptocurrency Ethereum',
        roomLevel: 2,
        maximumParticipants: 4,
      },
      id: 'room10info', // Ensure this ID is unique if adjusting from the example
      createdAt: Date.now(),
    },
    participants: [
      {
        authId: 'blockchainbuff',
        isAdmin: true,
        fullName: 'Bobby Blockchain',
        imageUrl: '/images/user.png',
        followers: [],
        following: [],
        technologies: [],
        socials: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 'blockchainbuffid',
      },
      {
        authId: 'blockchainbuffff',
        isAdmin: true,
        fullName: 'Bobby Blockchain',
        imageUrl: '/images/user.png',
        followers: [],
        following: [],
        technologies: [],
        socials: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 'blockchainbuffid',
      },
    ],
  },
];
