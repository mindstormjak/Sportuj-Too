import Link from "next/link"

import { Input } from "@/components/ui/input"

import Logo from "../../logo"

export default function RegisterPage() {
    return (
        <div className='isolate flex h-screen flex-col items-center bg-[#EDEDED] py-8 md:justify-center'>
            <Link href='/' className='max-w-[400px]'>
                <Logo className='mb-4 w-full text-custom-green' />
            </Link>
            <div className='flex w-[90%] flex-col gap-4 md:max-w-[400px]'>
                <Input
                    type='text'
                    autoComplete='given-name'
                    placeholder='Meno'
                    className='rounded-[33px] px-6 py-7 text-lg placeholder:text-black/30'
                />
                <Input
                    type='text'
                    autoComplete='family-name'
                    placeholder='Priezvisko'
                    className='rounded-[33px] px-6 py-7 text-lg placeholder:text-black/30'
                />
                <Input
                    type='email'
                    autoComplete='email'
                    placeholder='E-mail'
                    className='rounded-[33px] px-6 py-7 text-lg placeholder:text-black/30'
                />
                <Input
                    type='password'
                    autoComplete='new-password'
                    placeholder='Heslo'
                    className='rounded-[33px] px-6 py-7 text-lg placeholder:text-black/30'
                />
                <Input
                    type='password'
                    autoComplete='new-password'
                    placeholder='Potvrdenie hesla'
                    className='rounded-[33px] px-6 py-7 text-lg placeholder:text-black/30'
                />
            </div>
            <div className='flex-grow md:max-h-8' />
            <div className='flex w-[90%] flex-col gap-4 md:max-w-[400px]'>
                <Link href='/tabs/map' className='w-full'>
                    <button className='w-full rounded-[40px] bg-custom-green px-6 py-3 text-lg font-bold text-white hover:bg-custom-green/70'>
                        Registrovať sa
                    </button>
                </Link>
                <button className='w-full rounded-[40px] bg-white px-6 py-3 text-lg font-bold text-[#252525] hover:bg-white/70'>
                    Registrovať sa cez Google
                </button>
                <p className='w-full text-center font-medium'>
                    Už máš vytvorený účet?{" "}
                    <Link href='/auth/login' className='font-medium text-custom-green hover:underline'>
                        Prihlás sa tu!
                    </Link>
                </p>
            </div>
        </div>
    )
}