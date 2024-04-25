import { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  title: string;
  textContent: string;
  dataAosDelay: number;
};

const FeaturesCard = ({ icon, title, textContent, dataAosDelay }: Props) => {
  return (
    <div
      className="card features-card md:max-w-[380px] px-[30px] md:px-[10px] text-center"
      data-aos="fade-up"
      data-aos-delay={dataAosDelay}
    >
      <div className="icon inline-flex">{icon}</div>
      <h3 className="title text-2xl font-bold mb-[10px]">{title}</h3>
      <p className="text-content text-lg text-[hsl(var(--muted-foreground))] text-center">
        {textContent}
      </p>
    </div>
  );
};

export default FeaturesCard;
