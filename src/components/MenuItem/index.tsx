import { Link } from '@/navigation'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'

const MenuItem = ({
  name,
  href,
  subLinks
}: {
  name: string
  href?: string
  subLinks?: { name: string; href: string }[]
}) => {
  if (!href && !subLinks) return null
  if (href)
    return (
      <Link href={href} className='text-white hover:text-gray-300'>
        {name}
      </Link>
    )
  else if (subLinks)
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <span>{name}</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={40} className='rounded-sm !bg-[#3E3D42]'>
          {subLinks.map(subLink => (
            <DropdownMenuItem className='rounded-none !text-white hover:!bg-[#343338]' key={subLink.href}>
              <Link href={subLink.href} className='w-full p-2'>
                {subLink.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    )
}

export default MenuItem
