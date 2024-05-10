import * as React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { User } from '@/app/(db)/Schema';

export function CardWithProgressbar({ dbUser }: { dbUser: User }) {
  return (
    <Card
      className="w-[100%] sm:w-[100%]"
      style={{
        fontSize: '45px',
        backgroundImage: 'linear-gradient(to right, #581C87,#5B21B6,#4F46E5)',
        WebkitBackgroundClip: 'background',
      }}
    >
      <CardHeader>
        <CardTitle className="text-xl">Problems Solved</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {dbUser.problems_solved &&
          Array.from(dbUser.problems_solved.entries()).map(([key, value]) => {
            return (
              <div key={key}>
                <div className="flex flex-row justify-between mb-2">
                  <CardDescription className="text-lg text-white">
                    Level {key}
                  </CardDescription>
                  <CardDescription className="self-end text-white">
                    {value} / 100
                  </CardDescription>
                </div>
                <Progress max={100} value={+value} />
              </div>
            );
          })}
      </CardContent>
    </Card>
  );
}
