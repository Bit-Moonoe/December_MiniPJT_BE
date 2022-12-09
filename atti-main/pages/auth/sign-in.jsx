import React, { useState } from 'react'
import Link from 'next/link'
import { LockClosedIcon } from '@heroicons/react/24/outline'
import { useAtom } from 'jotai';
import authAtom from '../../stores/authAtom';
import { useRouter } from 'next/router';


const SignIn = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useAtom(authAtom);

    const router = useRouter();

    const idInputHandler = (event) => setId(event.target.value); // 입력된 value값을 id state에 보관
    const passwordInputHandler = (event) => setPassword(event.target.value);

    const signInButtonHandler = (event) => {
        event.preventDefault();
        console.log(id, password);

        const formValue = { id, password };

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValue),
        };

        //fetch()
        fetch('http://localhost:8090/users/auth/sign-in', options)
        .then(response => response.json())
        .then(user => setAuth({token: user.token, user: user.id}))
        .catch(error => console.error('실패', error));

        router.push('/');
    };

  return <>
  <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
          <div>
              <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
              
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" value="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                  <div>
                      <label htmlFor="user-id" className="sr-only">User ID</label>
                      <input id="user-id" type="text" onChange={idInputHandler} autoComplete="id" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="ID" />
                  </div>
                  <div>
                      <label htmlFor="password" className="sr-only">Password</label>
                      <input id="password" type="password" onChange={passwordInputHandler} autoComplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" />
                  </div>
              </div>

              <div className="flex items-center justify-between">
                  <div className="flex items-center">
                      <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                  </div>

                  <div className="text-sm">
                      <Link href="/auth/sign-up">
                          <a className="font-medium text-indigo-600 hover:text-indigo-500">회원 가입</a>
                      </Link>
                  </div>
              </div>

              <div>
                  <button type="submit" onClick={signInButtonHandler} className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <LockClosedIcon className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'/>
                      </span>
                      로그인
                  </button>
              </div>
          </form>
      </div>
  </div>
</>
}

export default SignIn