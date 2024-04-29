type RoomsType = {
  id: string;
  owner: {
    name: string;
    avatarUrl: string;
  };
  targetRank: number;
  description: string;
  tags: {
    name: string;
    isFav: boolean;
  }[];
  participants: {
    id: string;
    name: string;
    avatarUrl: string;
  }[];
  maximumParticipants: number;
};

export const Rooms: RoomsType[] = [
  {
    id: 'asdfasdfasdf',
    owner: {
      name: 'ahmed redaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      avatarUrl: '/images/user.png',
    },
    targetRank: 17,
    description:
      'Write a Javascript function that takes an array of numbers and returns the sum of all the positive numbers in the array.',
    tags: [
      { name: 'JS', isFav: true },
      { name: 'React', isFav: false },
      { name: 'CPP', isFav: true },
    ],
    participants: [
      {
        id: '1',
        name: 'John Doe',
        avatarUrl: '/images/user2.png',
      },
      {
        id: '2',
        name: 'Smith Smith',
        avatarUrl: '/images/user2.png',
      },
    ],
    maximumParticipants: 3,
  },
  {
    id: 'asdfasdfasdfrr',
    owner: {
      name: 'ahmed reda',
      avatarUrl: '/images/user.png',
    },
    targetRank: 17,
    description:
      'Write a Javascript function that takes an array of numbers and returns the sum of all the positive numbers in the array.',
    tags: [
      { name: 'JS', isFav: true },
      { name: 'React', isFav: false },
      { name: 'CPP', isFav: true },
    ],
    participants: [
      {
        id: '1',
        name: 'John Doe',
        avatarUrl: '/images/user2.png',
      },
      {
        id: '2',
        name: 'Smith Smith',
        avatarUrl: '/images/user2.png',
      },
      {
        id: '44',
        name: 'Smith Smith Smith',
        avatarUrl: '/images/user2.png',
      },
    ],
    maximumParticipants: 4,
  },
  {
    id: 'asdfasdfasdfrr2',
    owner: {
      name: 'John Smith',
      avatarUrl: '/images/user.png',
    },
    targetRank: 15,
    description:
      'Write a Python function that takes a list of strings and returns the concatenation of all strings with a length greater than 5.',
    tags: [
      { name: 'Python', isFav: true },
      { name: 'Django', isFav: false },
      { name: 'Flask', isFav: true },
    ],
    participants: [
      {
        id: '3',
        name: 'Jane Doe',
        avatarUrl: '/images/user2.png',
      },
    ],
    maximumParticipants: 2,
  },
  {
    id: 'asdfasdfasdfrr3',
    owner: {
      name: 'Jane Smith',
      avatarUrl: '/images/user.png',
    },
    targetRank: 20,
    description:
      'Write a Java method that takes a string and returns the number of vowels in the string.',
    tags: [
      { name: 'Java', isFav: true },
      { name: 'Spring', isFav: false },
    ],
    participants: [
      {
        id: '4',
        name: 'Alice Smith',
        avatarUrl: '/images/user2.png',
      },
    ],
    maximumParticipants: 3,
  },
  {
    id: 'asdfasdfasdfrr4',
    owner: {
      name: 'Tom Johnson',
      avatarUrl: '/images/user.png',
    },
    targetRank: 18,
    description:
      'Write a C# function that takes an array of integers and returns the maximum value.',
    tags: [
      { name: 'C#', isFav: true },
      { name: '.NET', isFav: false },
    ],
    participants: [
      {
        id: '5',
        name: 'Bob Brown',
        avatarUrl: '/images/user2.png',
      },
    ],
    maximumParticipants: 3,
  },
  {
    id: 'asdfasdfasdfrr5',
    owner: {
      name: 'Sarah Johnson',
      avatarUrl: '/images/user.png',
    },
    targetRank: 16,
    description:
      'Write a Ruby method that takes a string and returns the reversed string.',
    tags: [
      { name: 'Ruby', isFav: true },
      { name: 'Rails', isFav: false },
    ],
    participants: [
      {
        id: '6',
        name: 'Chris White',
        avatarUrl: '/images/user2.png',
      },
    ],
    maximumParticipants: 2,
  },
  {
    id: 'asdfasdfasdfrr6',
    owner: {
      name: 'David Williams',
      avatarUrl: '/images/user.png',
    },
    targetRank: 19,
    description:
      'Write a PHP function that takes an array of strings and returns the longest string.',
    tags: [
      { name: 'PHP', isFav: true },
      { name: 'Laravel', isFav: false },
    ],
    participants: [
      {
        id: '7',
        name: 'Emily Green',
        avatarUrl: '/images/user2.png',
      },
    ],
    maximumParticipants: 4,
  },
  {
    id: 'asdfasdfasdfrr7',
    owner: {
      name: 'Michael Davis',
      avatarUrl: '/images/user.png',
    },
    targetRank: 20,
    description:
      'Write a TypeScript function that takes an array of numbers and returns the sum of all the even numbers in the array.',
    tags: [
      { name: 'TypeScript', isFav: true },
      { name: 'Angular', isFav: false },
    ],
    participants: [
      {
        id: '8',
        name: 'Jennifer Black',
        avatarUrl: '/images/user2.png',
      },
    ],
    maximumParticipants: 2,
  },
  {
    id: 'asdfasdfasdfrr8',
    owner: {
      name: 'Sophia Martinez',
      avatarUrl: '/images/user.png',
    },
    targetRank: 15,
    description:
      'Write a Swift function that takes a string and returns the number of words in the string.',
    tags: [
      { name: 'Swift', isFav: true },
      { name: 'iOS', isFav: false },
    ],
    participants: [
      {
        id: '9',
        name: 'William Lee',
        avatarUrl: '/images/user2.png',
      },
    ],
    maximumParticipants: 1,
  },
  {
    id: 'asdfasdfasdfrr9',
    owner: {
      name: 'Ella Taylor',
      avatarUrl: '/images/user.png',
    },
    targetRank: 18,
    description:
      'Write a Kotlin function that takes an array of integers and returns the average value.',
    tags: [
      { name: 'Kotlin', isFav: true },
      { name: 'Android', isFav: false },
    ],
    participants: [
      {
        id: '10',
        name: 'Daniel Brown',
        avatarUrl: '/images/user2.png',
      },
    ],
    maximumParticipants: 3,
  },
  {
    id: 'asdfasdfasdfrr10',
    owner: {
      name: 'Olivia Wilson',
      avatarUrl: '/images/user.png',
    },
    targetRank: 16,
    description:
      'Write a Go function that takes a slice of integers and returns the sum of all the elements in the slice.',
    tags: [
      { name: 'Go', isFav: true },
      { name: 'Golang', isFav: false },
    ],
    participants: [
      {
        id: '11',
        name: 'Liam Garcia',
        avatarUrl: '/images/user2.png',
      },
    ],
    maximumParticipants: 2,
  },
];
