import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { myAlbums } from "./albums"
import Link from "next/link"

import { GiFireworkRocket, GiMexico, GiSurferVan, GiCarWheel, GiGolfFlag, GiCableStayedBridge, GiModernCity } from 'react-icons/gi'
import { PiMountainsLight} from 'react-icons/pi'
import { FaUmbrellaBeach } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  
}

function getIconComponent(icon: string) {
  switch (icon) {
      case 'GiSurferVan':
          return <GiSurferVan width={24} height={24} />;
      case 'GiFireworkRocket':
          return <GiFireworkRocket width={24} height={24} />;
      case 'PiMountainsLight':
          return <PiMountainsLight width={24} height={24} />;
      case 'FaUmbrellaBeach':
          return <FaUmbrellaBeach width={24} height={24} />;
      case 'GiMexico':
          return <GiMexico width={24} height={24} />;
      case 'GiCarWheel':
        return <GiCarWheel width={24} height={24} />;    
      case 'GiGolfFlag':
        return <GiGolfFlag width={24} height={24} />;    
      case 'GiCableStayedBridge':
        return <GiCableStayedBridge width={24} height={24} />;    
      case 'GiModernCity':
        return <GiModernCity width={24} height={24} />;    
      default:
          return null; // Handle default or error case
  }
}
export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Gallery
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
              Browse
            </Button>
          </div>
        </div>
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Albums
          </h2>
          <ScrollArea className="h-[350px] px-1">
          <div className="space-y-1">
            {myAlbums.map((album) => (
                <Button variant="ghost" className="w-full justify-start" key={album.tag}>
                  <Link href={`/other/${album.tag}`} className="flex flex-row">
                    {getIconComponent(album.icon)}
                    <p className="px-2 uppercase ">{album.name}</p>
                  </Link>
                </Button>
            ))}
          </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}