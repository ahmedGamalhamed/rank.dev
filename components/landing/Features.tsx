import FeaturesCard from '@/components/landing/FeaturesCard';
import CommunityIcon from './svgIcons/CommunityIcon';
import VideoIcon from './svgIcons/VideoIcon';
import RankingIcon from './svgIcons/RankingIcon';
import SpeedIcon from './svgIcons/SpeedIcon';
import TrackingIcon from './svgIcons/TrackingIcon';
import FreeIcon from './svgIcons/FreeIcon';

const Features = () => {
  const cards = [
    {
      icon: <CommunityIcon />,
      title: 'Community driven',
      textContent:
        'Our community-driven feature fosters collaboration, innovation, and inclusivity, enriching experiences and enhancing collective creativity and problem-solving',
    },
    {
      icon: <VideoIcon />,
      title: 'Video Streaming',
      textContent:
        'You can engage in live video streaming sessions to collaborate and discuss coding problems in real-time.',
    },
    {
      icon: <RankingIcon />,
      title: 'Ranking System',
      textContent:
        'Users earn ranks based on peer evaluations and collaborative work, with each rank advancement reflecting an increase in their levels .',
    },
    {
      icon: <SpeedIcon />,
      title: 'Fast & Familiar',
      textContent:
        'A fast and lightweight platform, with a design similar to popular platforms like Discord.',
    },
    {
      icon: <TrackingIcon />,
      title: 'Performance Tracking',
      textContent:
        "Every user's proficiency level is determined by their ranking, solutions to problems, and contributions to projects.",
    },
    {
      icon: <FreeIcon />,
      title: 'Ad Free',
      textContent:
        'Code without distractions in an ad-free zone! Enjoy uninterrupted conversations without annoying ads.',
    },
  ];

  const cardsComponents = cards.map((card, idx) => {
    return (
      <FeaturesCard
        key={idx}
        icon={card.icon}
        title={card.title}
        textContent={card.textContent}
        dataAosDelay={(idx + 1) * 100}
      />
    );
  });

  return (
    <section className="bg-[hsl(var(--features-background))] py-[90px]">
      <header className="flex flex-col items-center max-w-3xl mx-auto text-left md:text-center md:pb-16 px-6">
        <h1 className="text-2xl font-bold mb-[20px]">
          The best platform to build thriving developer community.
        </h1>
        <p className="text-lg max-w-2xl text-[hsl(var(--muted-foreground))]">
          Discover our developer-centric platform where individuals seek
          solutions to coding challenges, supported by a diverse community of
          peers eager to gain experience through collaborative problem-solving.
        </p>
      </header>
      <div className="features max-w-6xl mx-auto flex gap-x-[0px] gap-y-[90px] flex-wrap justify-center my-[90px]">
        {cardsComponents}
      </div>
    </section>
  );
};

export default Features;
