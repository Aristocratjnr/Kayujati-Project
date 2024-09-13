"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { KandC } from './Icon'
import { ArrowLeft, ArrowUp, ChevronLeft, ChevronRight, Hammer, Quote } from 'lucide-react'
import { useRouter } from 'next/navigation'
import TestimonialsComponent from './TestimonialsFragment'

type Props = {}

const LandingPageContent = (props: Props) => {
  // const [currentIndex, setcurrentIndex] = useState(0);
  const router = useRouter()
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const Perks = [
    {
      title: "Years of Experience",
      number: 15
    },
    {
      title: "Awards gained",
      number: 64
    },
    {
      title: "Products Sold",
      number: 1079
    },
    {
      title: "People Trained",
      number: 200
    },
  ]


  const ServicePers = [
    {
      title: "Designing",
      description: "Expertly crafting personalized designs to fit your unique style and space.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </svg>
      )
    },
    {
      title: "Layouting",
      description: "Maximizing space efficiency with strategic layout planning and execution.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
        </svg>

      )
    }
  ]

  const SecondServicePerks = [
    {
      title: "Creating",
      description: "Crafting custom pieces with precision and attention to detail.",
      icon: (
        <Hammer />
      )
    },
    {
      title: "Finishing",
      description: "Applying high-quality finishes to enhance durability and aesthetics.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
        </svg>
      )
    }
  ]

  const KandCOffers = [
    {
      number: 1,
      title: "Free Consultation",
      icon: (
        <ArrowUp className='transform rotate-45' />
      )
    },
    {
      number: 2,
      title: "Custom Furniture",
      icon: (
        <ArrowUp className='transform rotate-45' />
      )
    },
    {
      number: 3,
      title: "Furniture Assembling",
      icon: (
        <ArrowUp className='transform rotate-45' />
      )
    },
    {
      number: 4,
      title: "Training Session",
      icon: (
        <ArrowUp className='transform rotate-45' />
      )
    },
    {
      number: 5,
      title: "Free Delivery",
      icon: (
        <ArrowUp className='transform rotate-45' />
      )
    },
  ]

  const Testimonials = [
    {
      user: {
        name: "Radans",
        handle: "@radansun"
      },
      testimonial: "Kitchen & Closet transformed my home with their exquisite craftsmanship and attention to detail. Highly recommended!"
    },
    {
      user: {
        name: "Daniella",
        handle: "@daniellaaa"
      },
      testimonial: "Kitchen & Closet transformed my home with their exquisite craftsmanship and attention to detail. Highly recommended!"
    },
    {
      user: {
        name: "Lyza B",
        handle: "@shezlyza"
      },
      testimonial: "The custom kitchen cabinets from Kitchen & Closet are simply stunning. They perfectly matched my vision and are incredibly functional."
    },
    {
      user: {
        name: "Edem Hayibor",
        handle: "@bigglesssss"
      },
      testimonial: "I am thrilled with the custom furniture pieces I received. The quality and design are top-notch. Exceptional service and craftsmanship!"
    },
    {
      user: {
        name: "David Obuobi Jnr",
        handle: "@aristocrat.jnr"
      },
      testimonial: "From start to finish, the team at Kitchen & Closet was professional and attentive. The final product exceeded my expectations!"
    }
  ];

  const FAQs = [
    {
      "question": "What is Kitchen and Closet?",
      "answer": "Kitchen and Closet is an online platform that offers a wide range of kitchen and closet solutions, including furniture, decor, and organizational products to enhance your living spaces."
    },
    {
      "question": "How do I place an order on Kitchen and Closet?",
      "answer": "To place an order, browse our catalog, select the items you wish to purchase, add them to your cart, and proceed to checkout to complete your purchase."
    },
    {
      "question": "Do you offer installation services?",
      "answer": "Yes, we offer professional installation services for our products. You can choose the installation option during the checkout process."
    },
    {
      "question": "Can I customize my order?",
      "answer": "Yes, many of our products can be customized to fit your specific needs. Please check the product details for customization options or contact our customer support for assistance."
    },
    {
      "question": "How can I contact customer support?",
      "answer": "You can contact our customer support team through the 'Contact Us' section on our website. We are available to assist you with any queries or concerns."
    }
  ];

  const FAQs_2 = [
    {
      "question": "What payment methods are accepted on Kitchen and Closet?",
      "answer": "We accept a variety of payment methods including credit/debit cards, PayPal, and other popular digital payment platforms."
    },
    {
      "question": "How do I track my order?",
      "answer": "Once your order is placed, you can track its status through the 'My Orders' section in your account. You will receive updates via email and push notifications."
    },
    {
      "question": "What is your return policy?",
      "answer": "We offer a hassle-free return policy. Please visit the 'Returns and Exchanges' section on our website for more details on the process and eligibility."
    },
    {
      "question": "Do you offer international shipping?",
      "answer": "Currently, we offer shipping within [your country or region]. For international shipping inquiries, please contact our customer support."
    },
    {
      "question": "Are there any ongoing promotions or discounts?",
      "answer": "Yes, we frequently offer promotions and discounts. Please visit the 'Deals' section on our website or subscribe to our newsletter to stay updated."
    }
  ];


  const [activeIndex, setActiveIndex] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null)

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleFAQAccordion = (index: any) => {
    setActiveFaq(activeFaq === index ? null : index);
  };


  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Testimonials.length);
    }, 9000);

    setIntervalId(id);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId, Testimonials.length]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Testimonials.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [Testimonials.length]);



  return (
    <div className='w-full'>

      {/* Hero Section */}
      <div className="w-full h-[600px] md:h-[800px] hero-sec flex px-8 md:px-14">
        <div className="w-[20%] h-[18%] self-end bg-transparent flex flex-col bottom-4 gap-1">
          <Button
            className='bg-transparent border w-[200px] rounded-none border-gray-300 text-gray-300 hover:bg-white hover:text-[#212a2a]'
          >Shop Ready Stock</Button>
          <Button
            className='bg-transparent border w-[200px] rounded-none border-gray-300 text-gray-300 hover:bg-white hover:text-[#212a2a]'
          >Pre-Order Instead</Button>
        </div>
        <div className="w-[104%] md:w-[70%] -mr-4 h-[60%] md:h-[58%] self-end bg-transparent flex flex-col bottom-4 gap-1 items-center ">
          <KandC.PNG className='' />
        </div>
      </div>

      {/* Who We Are */}
      <div className="w-full md:h-[70vh] bg-opacity-25 bg-[#F8E8D6] grid grid-cols-1 md:grid-cols-2" id='about'>

        {/* First Grid Section */}
        <div className="">
          <div className='relative w-screen h-[250px] md:w-[660px] md:h-[390px] bg-[#F8E8D6] my-20'></div>
          <div className=" pl-0 md:px-0 absolute -mt-[18rem] md:-mt-[26rem] md:ml-20 w-[660px] h-[390px]">
            <Image src={"https://ndvgcrdxhzwmqsrxevur.supabase.co/storage/v1/object/public/PublicImages/ali-mkumbwa-PxlKOcj0a3Q-unsplash.jpg?t=2024-07-25T05%3A36%3A34.242Z"}
              alt='Joinery Image'
              width={650}
              height={390}
              className='h-[250px] w-[370px] md:w-[650px]  md:h-[390px]'
            />
          </div>
        </div>


        {/* Second Grid Section */}

        <div className="py-4 md:py-20 px-6 md:px-16 flex flex-col justify-start items-start">
          <h2 className='text-2xl md:text-4xl leading-tight font-sans'>Who We Are</h2>
          <p className='my-4  md:my-8 w-full md:w-[85%] text-gray-600'>At <span className='hover:text-[#855c0c] cursor-pointer hover:underline'>Kitchen & Closet,</span> we are passionate craftsmen dedicated to the art of fine joinery. With years of experience and a commitment to excellence, we specialize in creating bespoke furniture and custom woodwork that blend timeless craftsmanship with modern design. Our skilled team works closely with clients to bring their visions to life, ensuring each piece is not only beautiful but also functional and durable. Whether it&apos;s a unique piece of furniture, a custom kitchen, or intricate woodwork, we take pride in our attention to detail and our dedication to quality. Discover the elegance and precision of true craftsmanship with K & C.</p>

          {/* Perks */}

          <div className="grid grid-cols-2 my-2 md:my-0  md:grid-cols-4 gap-4 w-full">

            {
              Perks.map((perk, index) => (
                <span className='flex flex-col gap-2 items-start justify-center' key={index}>
                  <p className='text-3xl font-medium text-[#855C0C] font-CabinetGrotesk w-full items-center flex justify-center'>{perk?.number}</p>
                  <p className='text-sm font-sans text-center font-light w-full flex justify-center items-center'>{perk?.title}</p>
                </span>
              ))
            }
          </div>
        </div>

      </div>


      {/* What Can We Do? */}
      <div className="w-full md:h-[410px] bg-white grid grid-cols-1 md:grid-cols-2 py-4" id='services'>


        {/* First Grid */}
        <div className="w-full items-start flex flex-col justify-start px-8 py-8 md:px-20 md:py-16">
          <h2 className='text-2xl md:text-4xl font-sans w-[200px] text-pretty space-x-1'>What can we do?</h2>
          <p className='text-muted-foreground my-4 justify-normal text-sm md:w-[480px]'>Our skilled artisans are dedicated to delivering exceptional craftsmanship and personalized service, ensuring that every project is completed to the highest standards. Let us transform your ideas into beautifully crafted woodwork that stands the test of time.</p>
          <Button className='rounded-none w-[100px] h-[40px]' onClick={() => router.push('/#contact')}>Contact Us</Button>
        </div>

        {/* Second Grid */}
        <div className="flex gap-2 justify-center items-center flex-col px-8 md:px-20">

          {/* First Service Perk */}
          <div className="flex flex-col md:flex-row  items-center justify-center gap-1">
            {
              ServicePers.map((service, index) => (
                <div key={index} className={` py-2 md:py-0 flex flex-col items-start justify-start md:w-[300px] md:h-[150px] ${index !== ServicePers.length - 1 ? "border-b border-t md:border-y-0 md:border-r mr-4" : ""}`}>
                  <div className=" flex gap-2 items-center">
                    <span className=' md:h-8 md:w-8 text-muted-foreground'>{service?.icon}</span>
                    <h2 className='text-lg font-sans uppercase text-muted-foreground'>{service?.title}</h2>
                  </div>

                  {/* Description */}
                  <div className="px-6 py-3 ">
                    <p className='text-sm text-muted-foreground'>{service?.description}</p>
                  </div>
                </div>
              ))
            }
          </div>

          {/* Seperator */}
          <span className='hidden md:block w-full rounded h-[1px] bg-[#B38B70] bg-opacity-[0.33] px-20'></span>

          {/* Second Service Perk */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:pt-4">
            {
              SecondServicePerks.map((service, index) => (
                <div key={index} className={`py-2 md:py-0 flex flex-col items-start justify-start md:w-[300px] md:h-[150px] ${index !== ServicePers.length - 1 ? "border-y md:border-y-0  md:border-r mr-4" : ""}`}>
                  <div className="flex gap-2 items-center">
                    <span className=' h-8 w-8 text-muted-foreground'>{service?.icon}</span>
                    <h2 className='text-lg font-sans uppercase text-muted-foreground'>{service?.title}</h2>
                  </div>

                  {/* Description */}
                  <div className="px-6 py-3 ">
                    <p className='text-sm text-muted-foreground'>{service?.description}</p>
                  </div>
                </div>
              ))
            }
          </div>

        </div>


      </div>


      {/* Our Gallery */}
      <div className="w-full h-[510px] gallery-sec flex px-8 md:px-20">
        <div className="w-[20%] h-[20%] md:h-[35%] self-end bg-transparent flex flex-col bottom-4 gap-1">
          <h2 className='text-4xl md:4xl lg:text-7xl font-sans text-white md:textStroke'>Our Gallery</h2>
        </div>
        <div className=" hidden w-[80%] h-[18%] self-end bg-transparent md:flex flex-col bottom-2 gap-1 right-8 items-center ">
          <div className="flex gap-2 absolute right-20 ">
            <span className='h-[40px] w-[40px] bg-[#F8E8D6] border hover:bg-white bg-opacity-30 rounded-full items-center flex justify-center'>
              <ChevronLeft className='text-white hover:text-[#212a2a] cursor-pointer' />
            </span>
            <span className='h-[40px] w-[40px] bg-[#F8E8D6] border hover:bg-white bg-opacity-30 rounded-full items-center flex justify-center'>
              <ChevronRight className='text-white hover:text-[#212a2a] cursor-pointer' />
            </span>
          </div>
        </div>
      </div>


      {/* Experience the Difference with us */}
      <div className="w-full md:h-[864px] flex flex-col items-start justify-normal px-8 md:px-20 py-16">
        <h2 className='text-2xl md:text-4xl font-light font-sans w-full'>Experience the difference with us</h2>

        <div className="w-full  md:h-[700px] grid grid-cols-1 md:grid-cols-2 gap-x-32">
          {/* Experiences */}
          <div className="w-[1/2] items-center flex justify-start flex-col">
            {
              KandCOffers.map((offer, index) => (
                <div className='border-b w-full px-2 md:h-[100px] py-4  flex items-center justify-between gap-2' key={index}>
                  <div className=" flex w-[4/5] items-center justify-start gap-4 hover:text-[#B38B70]">
                    <span className='text-muted-foreground md:text-2xl font-thin font-sans hover:text-[#B38B70]'>0{offer?.number}.</span>
                    <p className='text-muted-foreground md:text-2xl  cursor-pointer hover:text-[#B38B70] font-thin font-sans'>{offer?.title}</p>
                  </div>
                  <span className='h-[40px] w-[40px] hover:bg-[#B38B70] cursor-pointer flex items-center justify-center font-thin hover:text-white'>{offer?.icon}</span>
                </div>

              ))
            }
          </div>


          {/* Image */}
          <div className="hidden md:block sofa-sec h-[100px] w-[100px] md:h-full md:w-[1/3] absolute md:right-20 "></div>
        </div>
      </div>


      {/* Testimonials */}
      <TestimonialsComponent Testimonials={Testimonials} />


      {/* FAQs */}
      <div className="w-full md:h-[750px] px-8 md:px-20 py-16">
        <h2 className='font-sans font-light text-2xl md:text-4xl px-4 md:mb-8'>Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full  gap-x-8">
          <div className="h-full w-full ">
            {FAQs.map((faq, index) => (
              <div key={index} className=" p-4  border-b my-4">
                <div
                  className="flex justify-start items-center cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-xl border flex justify-center items-center p-4 mr-3 rounded-full h-[40px] w-[40px] ">
                    {activeIndex === index ? '-' : '+'}
                  </span>
                  <h3 className="text-lg font-sans font-light">{faq.question}</h3>
                </div>
                {activeIndex === index && (
                  <p className="mt-2 text-gray-700 ml-14 text-muted-foreground">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
          <div className="h-full w-full">
            {FAQs_2.map((faq, index) => (
              <div key={index} className="p-4  border-b my-4">
                <div
                  className="flex justify-start items-center cursor-pointer"
                  onClick={() => toggleFAQAccordion(index)}
                >
                  <span className="text-xl border flex justify-center items-center p-4 mr-3 rounded-full h-[40px] w-[40px]">
                    {activeFaq === index ? '-' : '+'}
                  </span>
                  <h3 className="text-lg font-sans font-light">{faq.question}</h3>
                </div>
                {activeFaq === index && (
                  <p className="mt-2 text-gray-700 ml-14 text-muted-foreground">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  )
}



export default LandingPageContent