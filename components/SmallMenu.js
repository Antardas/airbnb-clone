import { useRouter } from "next/router";
import { useContext } from 'react'
import { MenuContext } from "../pages/_app";
import { signIn } from "next-auth/react"
import ExistUser from "./ExistUser";

const SmallMenu = () => {
    const router = useRouter();
    const menu_styles = 'mt-2 px-4 py-2 hover:bg-slate-200 hover:rounded-full cursor-pointer';
    return (
        <div className='bg-slate-100 w-60 mr-auto rounded-lg text-slate-600 py-3 px-1'>
                {/* <ExistUser /> */}
            <ul>
                <li className={menu_styles} onClick={() => signIn()}>Sign In</li>
                <li className={menu_styles}>Host Your Home</li>
                <li className={menu_styles}>Host Your Experience</li>
                <li className={menu_styles}>Help</li>
            </ul>
        </div>
    );
};

export default SmallMenu;