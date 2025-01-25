import logo from '../assets/logo.png';
//https://react-icons.github.io/react-icons/
//react icon
import { GrLanguage } from "react-icons/gr";

export const Navbar = () => {


    const navItem=[
        {link:"Overview", path:"home"},
        {link:"Feature", path:"feature"},
        {link:"About", path:"about"},
        {link:"Pricing", path:"pricing"}
    ]

  return (
    <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary'>
        <div className='text-lg container mx-auto flex justify-between items-center'>
            <div className='flex space-x-14 items-center'>
                <a className='text-2xl font-semibold flex items-center space-x-3 text-primary' href="/">
                    <img className='w-10 inline-block item-center' src={logo} alt="" /> <span>XYZ</span>
                </a>
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItem.map(({link,path}) => <a key={link} href={path} className='block hover:text-gray-300'>{link}</a>)
                    }
                </ul>
            </div>
            <div className='space-x-12 hidden md:flex items-center'>
                <a className='hidden lg:flex items-center hover:text-secondary' href="/"><GrLanguage className='mr-2' /> <span>Language</span></a>
                <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>Sign up</button>

            </div>

        </div>
    </nav>
  )
}
