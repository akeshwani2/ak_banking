"use client";

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Each "Link" needs to have an href. Here, the href is "/" meaning Homepage. mb-12 = margin-bottom 12

const Sidebar = ({user}: SidebarProps) => {
    const pathname = usePathname();
  return (
    <section className="sidebar">
        <nav className="flex flex-col gap-4">
            {/* Styling the logo */}
            <Link href="/" className="mb-12 cursor-pointer items-center gap-2 flex">
                {/* Making the logo appear on the sidebar */}
                <Image 
                    src="/icons/logo.svg"
                    width={34}
                    height={34}
                    alt="Horizon logo"
                    className="size-[24px] max-xl:size-14"
                />
                <h1 className="sidebar-logo">Moneta</h1>
            </Link>
            {/* Creating links to all other pages relative to sidebar only */}
            {sidebarLinks.map((item)=> {
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                // the "isActive" is making sure the item is "selected" only if pathname matches route. 
                return (
                    <Link href={item.route} key={item.label} className={cn("sidebar-link", {"bg-bank-gradient": isActive })}>
                        {/* Displays sidebar logos */}
                        <div className="relative size-6">
                            <Image 
                                src={item.imgURL}
                                alt={item.label}
                                fill
                                // Changes logo from being dark to adding a white highlight when active
                                className={cn({
                                    "brightness-[3] invert-0": isActive
                                })}
                            />
                        </div>
                        <p className={cn("sidebar-label", {
                            // Makes sure that when specific tab is selected, the label turns white.
                            "!text-white": isActive
                        })}>
                            {item.label}
                        </p>
                    </Link>
                )
            })}
{/* Displays "user" under sidebar tabs*/}
            USER
        </nav>

{/* Displays "user" all the way on the bottom of sidebar */}
        FOOTER
    </section>
  )
}

export default Sidebar