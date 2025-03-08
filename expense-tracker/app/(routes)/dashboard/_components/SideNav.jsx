import React from 'react'
import Image from "next/image";
import {LayoutGrid,PiggyBank,ReceiptText,ShieldCheck} from 'lucide-react'
import { UserButton } from '@clerk/nextjs';
function SideNav()
{
    const menulist=[
        {
            id:1,
            name:'Dashboard',
            icon:LayoutGrid
        },

        {
            id:2,
            name:'Budgets',
            icon:PiggyBank
        },

        {
            id:3,
            name:'Expenses',
            icon:ReceiptText
        },

        {
            id:4,
            name:'Upgrade',
            icon:ShieldCheck
        }
    ]
    return (
        <div className='h-screen p-5 border shadow-sm'>
            <Image src={'/logo.svg'}
            alt='logo'
            width={160}
            height={100}
            />

            <div className='mt-5'>
               
               {menulist.map((menu,index)=>(
                <h2 className='flex gap-2 items-center
                text-gray-500 font-medium
                p-5 cursor-pointer rounded-md
                hover:text-primary hover:bg-blue-100'>
                    <menu.icon/>
                    {menu.name}
                </h2>
               )
            
            )}
            </div>
            <UserButton/>
        </div>
    )
}

export default SideNav