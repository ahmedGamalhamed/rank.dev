import Logo from '@/components/Logo';
import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <div className="container flex justify-center  flex-col dark:text-white text-black">
      <div className="h-96 w-full flex justify-center ">
        <Logo />
      </div>
      <div className="px-6 py-8 bg-black dark:bg-white dark:bg-opacity-5 bg-opacity-10 rounded-lg">
        <h4 className="text-2xl font-bold  text-fuchsia-500">Our Story</h4>
        <ul className="container text-md flex flex-col gap-4 pt-4 whitespace-break-spaces list-disc ml-4">
          <li>
            Rank.dev is more than just a platform; it&apos;s a community built
            by developers, for developers. Our mission is simple: to foster
            collaboration and skill development through real-world coding
            challenges.
          </li>

          <li>
            At Rank.dev, we believe in the power of community-driven learning.
            Every developer faces challenges, whether they&apos;re just starting
            out or have years of experience under their belt. That &apos;s why
            we&apos;ve created a space where developers can come together to
            tackle coding problems, share knowledge, and grow together.
          </li>

          <li>
            How does it work? It&apos;s simple. Developers can post coding
            problems they&apos;re facing in dedicated rooms, complete with
            descriptions and context. Then, other developers who are eager to
            learn and help can enter these rooms to lend a hand, offer insights,
            and practice their problem-solving skills in a real-world setting.
          </li>
        </ul>
      </div>
      <div className="my-12  container text-md flex flex-col gap-4 px-6 py-8 bg-black dark:bg-white dark:bg-opacity-5 bg-opacity-10 rounded-lg">
        <h4 className="text-2xl font-bold  text-fuchsia-500">
          Why join Rank.dev?
        </h4>

        <ul className="container text-md flex flex-col gap-4 pt-4  whitespace-break-spaces list-disc ml-4">
          <li>
            <b>Real Problems, Real Solutions:</b> Say goodbye to contrived
            exercises. At Rank.dev, you&apos;ll tackle real coding challenges
            encountered by fellow developers in the field.
          </li>

          <li>
            <b>Community Collaboration:</b> Our platform thrives on
            collaboration. Whether you&apos;re seeking help or offering it,
            you&apos;ll find a supportive community ready to assist you on your
            coding journey.
          </li>

          <li>
            <b>Skill Development:</b> Practice makes perfect. By engaging with
            diverse problems and perspectives, you&apos;ll sharpen your
            problem-solving skills and expand your coding repertoire.
          </li>

          <li>
            <b>Networking Opportunities:</b> Connect with developers from around
            the world who share your passion for coding. Build meaningful
            relationships, exchange ideas, and expand your professional network.
          </li>
        </ul>

        <p className="px-4">
          Join us at Rank.dev and become part of a vibrant community dedicated
          to continuous learning and growth. Whether you&apos;re a seasoned
          developer or just getting started, there&apos;s a place for you here.
        </p>
      </div>
      <div
        className="font-bold text-lg animate-bounce "
        style={{ animationDuration: '2s' }}
      >
        <p className="text-center">Happy coding!</p>

        <p className="text-center pb-7">
          The <span className="text-fuchsia-500">Rank.dev</span> Team
        </p>
      </div>
    </div>
  );
}
