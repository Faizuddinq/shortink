import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Button } from './ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { LinkIcon, LogOut } from 'lucide-react'
import { UrlState } from '@/context/Context'
import useFetch from '@/hooks/use-fetch'
import { logout } from '@/db/apiAuth'
import { BarLoader } from 'react-spinners'
  
const Header = () => {
    const navigate = useNavigate();
    
    const {user, fetchUser} = UrlState();
    const {loading, fn: fnLogout}=useFetch(logout);

  return (
    <>
    <nav className=' py-4 flex justify-between items-center'>
        <Link to="/">
        <img src="/logo.png" alt="logo" className=' h-20' />
        </Link>

        <div>
            {
                (!user)?
                <Button onClick={()=> navigate("/auth")}>Login</Button>
                : (
                    <DropdownMenu>
                    <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src={user?.user_metadata?.profile_pic} className="object-contain"/>
                        <AvatarFallback>NA</AvatarFallback>
                    </Avatar>

                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel
                      >{user?.user_metadata?.name}
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link to="/dashboard" className='flex'>
                        <LinkIcon className=' mr-2 h-4 w-4'/>
                        My Links
                        </Link>

                        </DropdownMenuItem>
                      <DropdownMenuItem className=" text-red-400">
                        <LogOut className=' mr-2 h-4 w-4'/>
                        <span 
                        onClick={()=>{
                          fnLogout().then(()=>{
                            fetchUser();
                            navigate("/");
                          })
                        }}
                        >
                        Logout
                        </span>
                        </DropdownMenuItem>
                      
                    </DropdownMenuContent>
                  </DropdownMenu>
                   
                )
            }
        </div>
    </nav>
        {loading && <BarLoader className='mb4'width={'100%'} color='#36d7b7'/>}
    </>

  )
}

export default Header