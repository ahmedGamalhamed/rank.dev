import Image from 'next/image';
import TagIcon from './svgIcons/TagIcon';

const Main = () => {
  return (
    <main
      className={`relative section bg-gradient-to-b from-80% from-[hsl(var(--banner-background))] to-[transparent] pt-16 -mt-16`}
    >
      <div className="bg-images absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/banner.svg"
          alt="banner image"
          loading="eager"
          className="overflow-clip absolute bottom-0 contain min-w-[1900px] opacity-70 max-md:right-0"
          width="1900"
          height="600"
          decoding="async"
        />
        <Image
          src="/images/bubbles.svg"
          alt="bubbles image"
          className="overflow-clip absolute bottom-0 contain min-w-[1900px] opacity-80 max-md:hidden aos-init aos-animate"
          data-aos="fade-up"
          width="1900"
          height="600"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="container pt-16 lg:pt-16 relative z-20">
        <div className="flex justify-center">
          <div className="flex flex-col items-start md:items-center justify-center text-start md:text-center lg:col-7">
            <div className="h-[100px] md:h-[150px]"></div>
            <header>
              <h4 className="text-2xl md:text-4xl">
                Ready to gain experience?
              </h4>
              <h1 className="mb-4 mt-4 text-5xl md:text-7xl font-bold ">
                Join a Room!
              </h1>
            </header>
            <p className="text-[hsl(var(--muted-foreground))] max-w-sm md:max-w-2xl md:mx-auto ">
              Create or join a room, solve problems in live video chats and
              screen shares.
            </p>
            <p className="pb-8 text-[hsl(var(--muted-foreground))] max-w-sm md:max-w-2xl md:mx-auto">
              Connect, collaborate, and conquer coding hurdles together.
            </p>
            <a className="px-10 py-3 mx-auto" href="#">
              <button
                className={`shadow-lg transform hover:scale-110 transition ease-in duration-300 active:scale-100 bg-gradient-to-l from-10% from-[#4e059d] via-[74%] via-[#40b7ff] to-[100%] to-[#5046e5] bg-[#5046e5] flex gap-3 rounded-3xl font-medium text-xl py-2 px-10 text-center text-white`}
              >
                <TagIcon />
                Join Now
              </button>
            </a>
            <div className="h-[200px] md:h-[300px]"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
