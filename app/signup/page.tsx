"use client"
import React from 'react'
import { Icons } from '../fragments/Icon'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import SelectLanguage from '../fragments/LanguageSelector'
import AckFragment from '../fragments/AckFragment'
import { supabase } from '../../helpers/supabase/index'
import { Loader } from 'lucide-react'

type Props = {}

const SignUpPageFragment = (props: Props) => {
    const [firstName, setFirstName] = React.useState<string>("")
    const [lastName, setLastName] = React.useState<string>("")
    const [email, setEmail] = React.useState<string>("")
    const [password, setPassword] = React.useState<string>("")
    const [errorMessage, setErrorMessage] = React.useState<string>('')
    const [loading, setLoading] = React.useState<boolean>(false)
    const router = useRouter()

    async function handleEmailSignUp(event: React.FormEvent) {
      event.preventDefault()
      setErrorMessage('')
      setLoading(true)

      try {
          const { error } = await supabase.auth.signUp({
              email,
              password,
              options: {
                  data: {
                      first_name: firstName,
                      last_name: lastName
                  }
              }
          })
          if (error) {
              console.log('Error ', error.message)
              setErrorMessage(error.message)
          } else {
              router.push('/login') // Redirect to your dashboard or home page after successful sign-up
          }
      } catch (error: any) {
          setErrorMessage(error?.message) 
      } finally {
          setLoading(false)
      }
  }

    

    return (
        <div className='font-sans h-screen w-screen grid grid-cols-1 md:grid-cols-7'>
            {/* Image Section */}
            <div className="col-span-4 auth-sigup-bg h-full w-[4/7]">
                {/* Logo */}
                <div className="absolute top-8 left-8">
                    <Icons.WhiteLogo className='h-8 w-8 cursor-pointer' onClick={() => router.push('/')} />
                </div>

                {/* Caption */}
                <div className=" h-[20%] absolute self-end bg-transparent flex flex-col bottom-4  px-8">
                    <h2 className='text-2xl  text-gray-50 px-1 hover:text-slate-50 font-sans font-thin'><span className='font-normal'>Sign up</span> for <span className='font'>exclusive access</span> to stylish furniture</h2>
                    <h2 className='text-pretty h-[80%] w-[40vw] items-center flex justify-start text-7xl text-slate-100 font-medium'>Let&apos;s Transform Your Space</h2>
                </div>
            </div>

            {/* Create account form */}
            <div className="col-span-3  h-full w-full justify-center flex flex-col items-start py-34 px-20">
                <SelectLanguage />

                <div className="w-[45vw] h-[70vh] ">
                    <h2 className='text-3xl text-[#525252]'>Create an account</h2>

                    {/* Alternative Sign Up Options */}
                    <div className="my-8 flex gap-3 items-center justify-start">
                        <div
                            className='flex gap-2 items-center justify-center py-3 px-3 border hover:transform  rounded cursor-pointer'>
                            <span className='h-[20px] w-[20px]'><Icons.google /></span>
                            <p className='text-muted-foreground text-sm'>
                                Continue with Google
                            </p>
                        </div>
                        <div
                            className='flex gap-2 items-center justify-center py-3 px-3 border hover:transform  rounded cursor-pointer'>
                            <span className='h-[20px] w-[20px]'><Icons.facebook /></span>
                            <p className='text-muted-foreground text-sm'>
                                Continue with Facebook
                            </p>
                        </div>
                    </div>

                    {/* Seperator */}
                    <div className="w-full h-[8px] flex justify-start gap-4 mt-10 items-center">
                        <span className='w-[25%] h-[0.8px] bg-gray-300'></span>
                        <span>
                            <p className='text-sm text-muted-foreground'>OR</p>
                        </span>
                        <span className='w-[25%] h-[0.8px] bg-gray-300 '></span>
                    </div>

                    {/* Sign Up Form */}
                    <div className="w-full h-[55%] justify-start py-10 items-start flex flex-col">
                        {errorMessage && <div className='text-red-400'>{errorMessage}</div>}
                        <form onSubmit={handleEmailSignUp} className='w-full'>
                            <p className='text-2xl font-light'>Enter your details below</p>

                            {/* First Name */}
                            <div className="border-b py-2 w-[56%] my-8">
                                <input
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder='First Name'
                                    className='w-full outline-none text-muted-foreground border-none focus-within:outline-none focus-within:border-none placeholder:text-muted-foreground caret-slate-400'
                                    type="text" />
                            </div>

                            {/* Last Name */}
                            <div className="border-b py-2 w-[56%] my-8">
                                <input
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder='Last Name'
                                    className='w-full outline-none text-muted-foreground border-none focus-within:outline-none focus-within:border-none placeholder:text-muted-foreground caret-slate-400'
                                    type="text" />
                            </div>

                            {/* Email Address */}
                            <div className="border-b py-2 w-[56%] my-8">
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Email Address'
                                    className='w-full outline-none text-muted-foreground border-none focus-within:outline-none focus-within:border-none placeholder:text-muted-foreground caret-slate-400'
                                    type="email" />
                            </div>

                            {/* Password */}
                            <div className="border-b py-2 w-[56%] my-8">
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Password'
                                    className='w-full outline-none text-muted-foreground border-none focus-within:outline-none focus-within:border-none placeholder:text-muted-foreground caret-slate-400'
                                    type="password" />
                            </div>

                            <div className=" py-2 w-[56%] my-8">
                                <Button type="submit" className='w-full  rounded-none py-1 px-3 text-[17px] h-[55px]  bg-[#573C2C] hover:bg-[#573C1a]'>
                                    {loading
                                        ?
                                        <span className='flex gap-2 items-center justify-center'>
                                            <Loader className='animate-spin h-4 w-5 ' />
                                            <p>Loading...</p>
                                        </span>
                                        : "Create an account"}
                                </Button>
                                <div className=' mt-6 px-1 '> <p>
                                </p>Already have an account?
                                    <span onClick={() => router.push('/login')} className='text-[#573C2C] hover:underline  mx-2 cursor-pointer'>Login </span>
                                </div>
                            </div>


                            <AckFragment />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPageFragment
