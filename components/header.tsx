'use client'

import { HomeIcon, PencilIcon, GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './theme-toggle'
import { Dock, DockIcon } from './magicui/dock'

export type IconProps = React.HTMLAttributes<SVGElement>

const DATA = {
  navbar: [
    { href: '#', icon: HomeIcon, label: 'Home' },
    { href: '#', icon: PencilIcon, label: 'Blog' },
    
  ],
  contact: {
    social: {
      GitHub: {
        name: 'GitHub',
        url: '#',
        icon: GithubIcon,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: '#',
        icon: LinkedinIcon,
      },
      Twitter: {
        name: 'Twitter',
        url: '#',
        icon: TwitterIcon,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: MailIcon,
      },
    },
  },
}

export function Header() {
  return (
    <TooltipProvider>
      <Dock className='fixed bottom-4 left-1/2 -translate-x-1/2'>
        {DATA.navbar.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                    'size-12 rounded-full'
                  )}
                >
                  <item.icon className='size-4' />
                </Link>
              </TooltipTrigger>
              <TooltipContent sideOffset={5} className="z-[60]">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation='vertical' className='h-full' />
        {Object.entries(DATA.contact.social).map(([name, social]) => (
          <DockIcon key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={social.url}
                  aria-label={social.name}
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                    'size-12 rounded-full'
                  )}
                >
                  <social.icon className='size-4' />
                </Link>
              </TooltipTrigger>
              <TooltipContent sideOffset={5} className="z-[60]">
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation='vertical' className='h-full py-2' />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ThemeToggle />
            </TooltipTrigger>
            <TooltipContent sideOffset={5} className="z-[60]">
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </TooltipProvider>
  )
}
