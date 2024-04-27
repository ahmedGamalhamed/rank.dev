import MainFeaturesCard from '@/components/landing/MainFeaturesCard';

const MainFeatures = () => {
  const cards = [
    {
      title: [
        'Pair ',
        <span
          key={1}
          className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-transparent bg-clip-text"
        >
          Programming
        </span>,
      ],
      subTitle: 'Developers at your fingertips',
      textContent:
        'Foster enduring bonds with our pair programming tool, seamlessly transitioning chats into lasting connections. Effortlessly reconnect with past contacts, nurturing ongoing collaboration and reviving previous sessions.',
      imageUrl: '/images/features-03-image-03.png',
      imageOrder: 2,
    },
    {
      title: [
        'Code with Random developers With Similar ',
        <span
          key={2}
          className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-transparent bg-clip-text"
        >
          Interests
        </span>,
      ],
      subTitle: 'Strangers turned friends',
      textContent:
        'Collaborate with fellow enthusiasts on coding projects and exchange knowledge effortlessly. Our platform connects you with like-minded individuals, facilitating meaningful discussions and skill-building opportunities. Join a vibrant community where you can code, learn, and grow together.',
      imageUrl: '/images/features-03-image-01.png',
      imageOrder: 1,
    },
    {
      title: [
        'Spam and ',
        <span
          key={3}
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text"
        >
          Bot free
        </span>,
        ' rooms',
      ],
      subTitle: 'Say goodbye to pesky bots and spam',
      textContent:
        "Unlike some other websites , we actually care about your chat experience and take the necessary steps to keep the bots at bay. So come on in, the conversation's lovely and bot-free!",
      imageUrl: '/images/features-03-image-02.png',
      imageOrder: 2,
    },
  ];

  const cardsComponents = cards.map((card, idx) => {
    return (
      <MainFeaturesCard
        key={idx}
        title={card.title}
        subTitle={card.subTitle}
        textContent={card.textContent}
        imageUrl={card.imageUrl}
        imageOrder={card.imageOrder}
      />
    );
  });

  return (
    <section className="main-features max-w-6xl mx-auto py-10 border-t  border-neutral-200 dark:border-neutral-600">
      <header className="flex flex-col items-center max-w-3xl mx-auto text-left md:text-center md:pb-16 px-6">
        <h4 className="inline-flex text-sm font-semibold py-1 px-3 m-2 bg-[#4e059d] text-violet-100 rounded-full mb-4">
          Reach developers like you
        </h4>
        <h1 className="text-3xl font-bold mb-4">
          Solve Problems, Gain Experience
        </h1>
        <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-2xl">
          Find coding problems to solve with your favourite technologies.
          Connect with real people, enjoy ad free chats, and build connections.
        </p>
      </header>
      <div className="cards">{cardsComponents}</div>
    </section>
  );
};

export default MainFeatures;
