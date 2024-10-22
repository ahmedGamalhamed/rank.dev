/** @format */

'use client';

import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { usePathname } from 'next/navigation';
import { ModeToggle } from '../themeSwitcher';

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    variant: 'default' | 'ghost';
    href: string;
  }[];
}

export function Nav({ links, isCollapsed }: NavProps) {
  const pathName = usePathname();
  return (
    <TooltipProvider>
      <div
        data-collapsed={isCollapsed}
        className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
      >
        <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {links.map((link, index) => {
            // console.log(link.href);
            // console.log(link.href === pathName);
            return isCollapsed ? (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      buttonVariants({
                        variant: link.href === pathName ? 'default' : 'ghost',
                        size: 'icon',
                      }),
                      'h-9 w-9 text-slate-900 dark:text-slate-300 active:text-white',
                      link.href === pathName &&
                        ' hover:bg-slate-700 hover:text-slate-300 hover:dark:bg-slate-300 hover:dark:text-slate-800 bg-slate-300 dark:text-slate-700 ' // Change text color to white if the link is active

                      // link.variant === 'default' &&
                      //   'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white'
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    <span className="sr-only">{link.title}</span>
                  </Link>
                </TooltipTrigger>

                <TooltipContent
                  side="right"
                  className="flex items-center gap-4"
                >
                  {link.title}
                  {/* {link.label && (
                    <span className="ml-auto text-muted-foreground">
                      {link.label}
                    </span>
                  )} */}
                </TooltipContent>
              </Tooltip>
            ) : (
              <Link
                key={index}
                href={link.href}
                className={cn(
                  'text-white',
                  buttonVariants({
                    variant: link.href === pathName ? 'default' : 'ghost',
                    size: 'sm',
                  }),
                  '  text-slate-900 dark:text-slate-300  ', //here how to make if the link active make text white
                  link.href === pathName &&
                    ' hover:bg-slate-700 hover:text-slate-300 hover:dark:bg-slate-300 hover:dark:text-slate-800 bg-slate-300 dark:text-slate-700 ', // Change text color to white if the link is active
                  'justify-start'
                  // link.variant === 'default' &&
                  //   '  dark:bg-muted  dark:text-white dark:hover:bg-muted dark:hover:text-white',
                  // 'justify-start'
                )}
              >
                <link.icon className="mr-2 h-4 w-4" />
                {link.title}
                {/* {link.label && (
                  <span
                    className={cn(
                      'ml-auto',
                      link.variant === 'default' &&
                        'text-background dark:text-white'
                    )}
                  >
                    {link.label}
                  </span>
                )} */}
              </Link>
            );
          })}
        </nav>
      </div>
    </TooltipProvider>
  );
}
