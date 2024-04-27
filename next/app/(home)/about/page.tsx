import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <div className="container flex justify-center items-center flex-col">
      <Image src="/images/LOGO.png" alt="Rank.Dev" style={{ width: '30%' }} />
      <h1 style={{ fontSize: '50px' }} className="text-center">
        Our Story
      </h1>
      <div className="container text-lg ">
        <p className="text-center">Welcome to Rank.dev!</p>
        <br />
        <p>
          Rank.dev is more than just a platform; it{'&apos'}s a community built
          by developers, for developers. Our mission is simple: to foster
          collaboration and skill development through real-world coding
          challenges.
        </p>

        <p>
          At Rank.dev, we believe in the power of community-driven learning.
          Every developer faces challenges, whether they{'&apos'}re just
          starting out or have years of experience under their belt. That
          {'&apos'}s why we{'&apos'}ve created a space where developers can come
          together to tackle coding problems, share knowledge, and grow
          together.
        </p>

        <p>
          How does it work? It{'&apos'}s simple. Developers can post coding
          problems they{'&apos'}re facing in dedicated rooms, complete with
          descriptions and context. Then, other developers who are eager to
          learn and help can enter these rooms to lend a hand, offer insights,
          and practice their problem-solving skills in a real-world setting.
        </p>

        <p className="text-center">Why join Rank.dev?</p>

        <br />

        <ul style={{ listStyleType: 'disc' }}>
          <li>
            <b>Real Problems, Real Solutions:</b> Say goodbye to contrived
            exercises. At Rank.dev, you{'&apos'}ll tackle real coding challenges
            encountered by fellow developers in the field.
          </li>

          <li>
            <b>Community Collaboration:</b> Our platform thrives on
            collaboration. Whether you{'&apos'}re seeking help or offering it,
            you{'&apos'}ll find a supportive community ready to assist you on
            your coding journey.
          </li>

          <li>
            <b>Skill Development:</b> Practice makes perfect. By engaging with
            diverse problems and perspectives, you{'&apos'}ll sharpen your
            problem-solving skills and expand your coding repertoire.
          </li>

          <li>
            <b>Networking Opportunities:</b> Connect with developers from around
            the world who share your passion for coding. Build meaningful
            relationships, exchange ideas, and expand your professional network.
          </li>
        </ul>

        <p>
          Join us at Rank.dev and become part of a vibrant community dedicated
          to continuous learning and growth. Whether you{'&apos'}re a seasoned
          developer or just getting started, there{'&apos'}s a place for you
          here.
        </p>
        <br />
        <p className="text-center">Happy coding!</p>

        <p className="text-center pb-7">The Rank.dev Team</p>
      </div>
    </div>
  );
}
