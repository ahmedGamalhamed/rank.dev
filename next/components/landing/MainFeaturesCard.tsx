import Image from 'next/image';
import { ReactNode } from 'react';

type Props = {
  title: (string | ReactNode)[];
  subTitle: string;
  textContent: string;
  imageUrl: string;
  imageOrder: number;
};

const MainFeaturesCard = ({
  subTitle,
  title,
  textContent,
  imageUrl,
  imageOrder,
}: Props) => {
  return (
    <div className="card main-features-card flex flex-col md:flex-row gap-[10px] md:gap-[100px] items-center px-6 md:px-10px mb-[50px] md:mb-[100px]">
      <div className="text flex-1 mt-9 md:mt-0" data-aos="fade-right">
        <h6 className="text-md text-[hsl(var(--accent-foreground))] mb-2 font-bold">
          {subTitle}
        </h6>
        <h2 className="text-3xl font-bold mb-3">{title}</h2>
        <p className="text-xl text-[hsl(var(--muted-foreground))] mb-4">
          {textContent}
        </p>
      </div>
      <div
        className={`image flex-1 ${
          imageOrder === 1 ? 'order-[1] md:order-[-1]' : ''
        }`}
      >
        <Image
          src={imageUrl}
          alt="Interests"
          data-aos="fade-up"
          width="1900"
          height="600"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default MainFeaturesCard;
