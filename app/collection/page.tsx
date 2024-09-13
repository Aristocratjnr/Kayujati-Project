"use client"
import React, { useEffect, useState, useMemo } from 'react';
import Navbar from '../fragments/Navbar';
import KitchenFragment from '../fragments/KitchenFragment';
import LivingRoomFragment from '../fragments/LivingRoomFragment';
import BedroomFragment from '../fragments/BedroomFragment';
import BathroomFragment from '../fragments/BathroomFragment';
import OthersTabFragment from '../fragments/OthersTabFragment';
import usePageTitle from '../hooks';
import Footer from '../fragments/Footer';
import { listImages } from '@/helpers';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const CollectionsPage: React.FC = () => {
  const TabDetails = useMemo(() => [
    {
      caption: "Kitchen",
      folder: "kitchen",
      style_guide: "Kitchen style guide content",
      component: KitchenFragment,
      imgUrl: "https://ndvgcrdxhzwmqsrxevur.supabase.co/storage/v1/object/public/PublicImages/aaron-huber-G7sE2S4Lab4-unsplash.jpg",
    },
    {
      caption: "Living Room",
      folder: "living-room",
      style_guide: "Living room style guide content",
      component: LivingRoomFragment,
      imgUrl: "https://ndvgcrdxhzwmqsrxevur.supabase.co/storage/v1/object/public/PublicImages/pexels-pixabay-276528.jpg",
    },
    {
      caption: "Bedroom",
      folder: "bedroom",
      style_guide: "Bedroom style guide content",
      component: BedroomFragment,
      imgUrl: "https://ndvgcrdxhzwmqsrxevur.supabase.co/storage/v1/object/public/PublicImages/dada_design-mpP3o5q0Opg-unsplash.jpg",
    },
    {
      caption: "Bathroom",
      folder: "bathroom",
      style_guide: "Bathroom style guide content",
      component: BathroomFragment,
      imgUrl: "https://ndvgcrdxhzwmqsrxevur.supabase.co/storage/v1/object/public/PublicImages/chastity-cortijo-6TY_WrJTwSI-unsplash.jpg",
    },
    {
      caption: "Other",
      folder: "other",
      style_guide: "Other style guide content",
      component: OthersTabFragment,
      imgUrl: "https://ndvgcrdxhzwmqsrxevur.supabase.co/storage/v1/object/public/PublicImages/roberto-nickson-rEJxpBskj3Q-unsplash.jpg",
    },
  ], []);

  const [selectedTab, setSelectedTab] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setSelectedTab((prevTab) => (prevTab + 1) % TabDetails.length);
      } else if (e.key === 'ArrowLeft') {
        setSelectedTab((prevTab) => (prevTab - 1 + TabDetails.length) % TabDetails.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [TabDetails.length]);

  usePageTitle(`${TabDetails[selectedTab].caption}`);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const urls = await listImages(`${TabDetails[selectedTab].folder}`);
        setImages(urls);
        console.log('Fetched images for selected tab:', urls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [selectedTab, TabDetails]);

  const renderComponent = () => {
    const Component = TabDetails[selectedTab].component;
    return <Component images={images} />;
  };

  console.log('Images for selected tab:', images);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false); // State for controlling popover visibility

  return (
    <>
      <Navbar />

      <div className='w-full'>
        <div
          className="w-full h-[500px] flex px-8 md:px-14"
          style={{ backgroundImage: `url(${TabDetails[selectedTab].imgUrl || images[0]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >

          {/* Tab caption and menu button container */}
          <div className="relative w-full md:w-[20%] h-[15%] self-end flex justify-between items-center bottom-4 gap-1 z-10">
            {/* Tab Caption */}
            <p className="text-2xl md:text-4xl leading-tight text-white font-sans">
              {TabDetails[selectedTab]?.caption}
            </p>

            {/* Mobile Menu for Tabs */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="h-10 w-10 rounded-full items-center md:hidden justify-center flex bg-white">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 text-muted-foreground"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                  </span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-32 md:hidden mr-4 items-center flex flex-col justify-center">
                {TabDetails.map((tab: any, index: any) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedTab(index);
                      setIsPopoverOpen(false); // Close popover after selecting a tab
                    }}
                    className={`block w-full text-left px-2 py-2 text-base transition duration-200 ease-in-out ${index === selectedTab
                      ? "text-orange-700 font-normal"
                      : "text-muted-foreground hover:text-orange-500"
                      }`}
                  >
                    {tab.caption}
                  </button>
                ))}
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Desktop Tabs */}
        <div className="w-full hidden md:flex h-[90px] bg-white justify-center items-center">
          {TabDetails.map((tab, index) => (
            <button
              key={index}
              onClick={() => setSelectedTab(index)}
              className={` mx-4 ml-2 pb-2 text-sm relative ${index === selectedTab ? 'border-b border-b-[#b38b70]' : 'hover:border-b-[#855C0C] hover:border-b'}`}
            >
              {tab.caption}
            </button>
          ))}
        </div>

        <div className="py-8 px-4 md:px-14">
          {renderComponent()}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CollectionsPage;
