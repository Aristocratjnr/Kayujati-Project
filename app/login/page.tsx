"use client"
import { Button } from '@/components/ui/button';
import { EyeIcon, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Icons } from '../fragments/Icon';
import SelectLanguage from '../fragments/LanguageSelector';
import AckFragment from '../fragments/AckFragment';
import { supabase } from '../../helpers/supabase/index';

type Props = {};

const LoginPageFragment = (props: Props) => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>('');
  const router = useRouter();

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  async function handleAuthLogin(event: React.FormEvent) {
    event.preventDefault();
    setErrorMessage('');
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.log('Error ', error.message);
      setErrorMessage(error.message);
    } else {
      router.push('/'); // redirect to your dashboard or home page after successful login
    }
  }

  // async function signInWithProvider(provider: string) {
  //   const { error } = await supabase.auth.signInWithOAuth({ provider });
  //   if (error) {
  //     console.log('Error ', error.message);
  //     setErrorMessage(error.message);
  //   }
  // }

  function forgotPassword() {
    // Add forgot password functionality here
  }

  return (
    <div className='font-sans h-screen w-screen grid grid-cols-1 md:grid-cols-7'>
      {/* Image Section */}
      <div className="col-span-4 auth-bg h-full w-[4/7]">
        {/* Logo */}
        <div className="absolute top-8 left-8 ">
          <Icons.WhiteLogo className='h-8 w-8 cursor-pointer ' onClick={() => router.push('/')}/>
        </div>

        {/* Caption */}
        <div className=" h-[20%] absolute self-end bg-transparent flex flex-col bottom-4  px-8">
          <h2 className='text-2xl  text-gray-50 px-1 hover:text-slate-50 font-sans font-thin'><span className='font-normal'>Login</span> to <span className='font'>discover</span> new designs</h2>          
          <h2 className='text-pretty h-[80%] w-[50vw] items-center flex justify-start text-7xl text-slate-100 font-medium'>Ready for More Inspiration?</h2>
        </div>
      </div>

      {/* Login Form */}
      <div className="col-span-3 bg-white form-sec h-full w-full justify-center flex flex-col items-start py-34 px-20">
        <SelectLanguage/>

        <div className="w-[100%] h-[90%] flex flex-col items-start justify-start py-36  ">
          <p className='text text-muted-foreground py-4'>Welcome back buddy</p>
          <h2 className='text-3xl text-[#525252]'>Log in to your account</h2>

          <div className="w-full h-[55%] justify-start py-5 items-start flex flex-col">
            {errorMessage && <div className='text-red-500'>{errorMessage}</div>}
            <form onSubmit={handleAuthLogin} className='w-full'>
              {/* Email Address */}
              <div className="border-b py-2 w-[56%] my-4 gap-3 flex flex-col">
                <label htmlFor="email" className='text-muted-foreground text-xl'>Email</label>
                <input 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='username@novatron.fort'
                  className='w-full outline-none text-muted-foreground border-none focus-within:outline-none focus-within:border-none placeholder:text-muted-foreground caret-slate-400'
                  type="email" 
                />
              </div>

              {/* Password  */}
              <div className="border-b py-2 w-[56%] my-2 gap-3 flex flex-col">
                <div className="flex justify-between w-full items-center">
                  <label htmlFor="password" className='text-muted-foreground text-xl'>Password</label>
                  <p className='text-muted-foreground hover:text-[#573C1a] cursor-pointer hover:underline py-1' onClick={forgotPassword}>Forgot Password?</p>
                </div>
                <div className="w-full flex justify-between">
                  <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter a strong password'
                    className='w-[90%] outline-none text-muted-foreground border-none focus-within:outline-none focus-within:border-none placeholder:text-muted-foreground caret-slate-400'
                    type={showPassword === true ? "text" : "password"} 
                  />
                  <div className="h-[8px] cursor-pointer px-1" onClick={handleShowPassword}>
                    {showPassword 
                      ? <EyeOff className='h-5 w-5 text-muted-foreground'/>
                      : <EyeIcon className='h-5 w-5 text-muted-foreground'/>
                    }
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="py-2 w-[56%] my-2">
                <Button type="submit" className='w-full rounded-none py-1 px-3 text-[17px] h-[55px] mt-4 bg-[#573C2C] hover:bg-[#573C1a]'>Continue</Button>
                <div className='w-full mt-6 px-1'>Don&apos;t have an account? 
                  <span onClick={() => router.push('/signup')} className='text-[#573C2C] mx-2 hover:underline cursor-pointer'>Register</span>
                </div>
              </div>
              <AckFragment/>
            </form>
            {/* <div className='w-[56%] mt-6 flex justify-between'>
              <button onClick={() => signInWithProvider('google')} className='w-full rounded-none py-1 px-3 text-[17px] h-[55px] mt-4 bg-[#db4437] hover:bg-[#c33c2f] text-white'>
                Continue with Google
              </button>
              <button onClick={() => signInWithProvider('facebook')} className='w-full rounded-none py-1 px-3 text-[17px] h-[55px] mt-4 bg-[#4267B2] hover:bg-[#3b5da0] text-white'>
                Continue with Facebook
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPageFragment;
