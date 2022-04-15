import { LockClosedIcon, MailIcon } from "@heroicons/react/solid";

const Login = () => {

    return (
        <div>
            <form action="" className='text-xl'>
               <label htmlFor="" className="relative flex items-center">
                    <MailIcon className="h-8 my-auto  absolute" />
                    <input type="email" placeholder="Enter your email address" className='outline-none py-2 border-2 rounded-lg pl-8 pr-4' />
                </label>

                <label htmlFor="" className="relative flex items-center">
                    <LockClosedIcon className="h-8 my-auto  absolute" />
                    <input type="password" placeholder="Enter your password" className='outline-none py-2 border-2 rounded-lg pl-8 pr-4' />
                </label>
                <button type="submit"></button>
            </form>
        </div>
    );
};

export default Login;