import { UserCircleIcon, MailIcon, LockClosedIcon } from '@heroicons/react/solid'


const Register = () => {

    return (
        <div>
            <form className="flex flex-col" data-aos="fade-right">
                <label htmlFor="" className="relative flex items-center">
                    <UserCircleIcon className="h-8 my-auto  absolute" />
                    <input type="text" placeholder="Enter your Name" className='outline-none py-2 border-2 rounded-lg pl-8 pr-4' />
                </label>

                <label htmlFor="" className="relative flex items-center">
                    <MailIcon className="h-8 my-auto  absolute" />
                    <input type="email" placeholder="Enter your email address" className='outline-none py-2 border-2 rounded-lg pl-8 pr-4' />
                </label>

                <label htmlFor="" className="relative flex items-center">
                    <LockClosedIcon className="h-8 my-auto  absolute" />
                    <input type="password" placeholder="Enter your password" className='outline-none py-2 border-2 rounded-lg pl-8 pr-4' />
                </label>

                <label htmlFor="" className="relative flex items-center">
                    <LockClosedIcon className="h-8 my-auto  absolute" />
                    <input type="password" placeholder='Re-Type Password' className='outline-none py-2 border-2 rounded-lg pl-8 pr-4' />
                </label>
            </form>
        </div>
    );
};

export default Register;