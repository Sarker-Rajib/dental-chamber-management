import React, { useContext, useState } from 'react';
// import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
// import { UserContext } from '../../ContextApi/AuthenticContex/AuthProvider';

const Login = () => {
    // const { logIn } = useContext(UserContext);
    // const [errMessage, setErrMessage] = useState();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleUserLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // logIn(email, password)
        //     .then(data => {
        //         // console.log(data);
        //         const currentUserMail = data.user.email;

        //         const tokenUser = {
        //             email: data.user.email
        //         }

        //         if (currentUserMail) {
        //             navigate(from, { replace: true });
        //             toast.success('Login Successful')

        //             // jtoken fetch
        //             fetch('https://dental-server-fawn.vercel.app/jwtToken', {
        //                 method: 'POST',
        //                 headers: {
        //                     'content-type': 'application/json'
        //                 },
        //                 body: JSON.stringify(tokenUser)
        //             })
        //                 .then(res => res.json())
        //                 .then(data => {
        //                     // console.log(data)
        //                     localStorage.setItem('jtoken', data.securityToken)
        //                     navigate(from, { replace: true });
        //                 })
        //                 .catch(err => console.log(err))
        //         }
        //     })
        //     .catch(err => setErrMessage(err.message))
        navigate(from, { replace: true });
    };

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="text-white px-8 py-12 rounded-md w-[400px] bg-black bg-opacity-40 border backdrop-blur">

                <h3 className='text-center font-bold text-xl underline-offset-4 underline'>Please Login</h3>
                <br />
                <form onSubmit={handleUserLogin}>
                    <div className="mb-5">
                        <label className='inline-block mb-1'>Input Your Email</label>
                        <input name='email' type="email" placeholder='Email' className='border rounded-lg text-blue-600 p-2 w-full' required />
                    </div>
                    <div className="mb-4">
                        <label className='inline-block mb-1'>Input Your Password</label>
                        <input name='password' type="password" placeholder='password' className='border rounded-lg text-blue-600 p-2 w-full' required />
                    </div>

                    <br />
                    <input type="submit" value='Login' className='cursor-pointer border rounded-lg p-2 w-full bg-yellow-500 text-white font-bold' />
                </form>
            </div>
        </div>
    );
};

export default Login;