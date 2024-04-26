import Main from '@/components/landing/Main';
import MainFeatures from '@/components/landing/MainFeatures';
import Features from '@/components/landing/Features';
import AOSComponent from '@/components/AOSComponent';

export default function Home() {
  return (
    <AOSComponent>
      <Main />
      <MainFeatures />
      <Features />
    </AOSComponent>
  );
}
