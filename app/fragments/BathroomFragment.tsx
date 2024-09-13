import React, { useState } from 'react';
import Masonry from 'react-masonry-css'; // Import Masonry layout
import Image from 'next/image'

interface BathroomFragmentProps {
  images: string[];
}

function BathroomImageDescription({ image, similarImages, onClose }: { image: string, similarImages: string[], onClose: () => void }) {
  return (
    <div className='h-[85vh] z-[9999] absolute bottom-0 w-full -ml-14 bg-white items-start justify-start px-20 flex'>
      <div className="grid grid-cols-2 gap-8 relative">
        <div className="py-16 flex flex-col gap-2">
          {/* eslint-disable-next-line  */}
          <img
            src={image}
            alt="Selected"
            className="max-h-96 rounded-none" />
          <div className="">
            <p className='text-sm font-sans'>Posted by Aristocrat Jnr · 3 days ago</p>
          </div>
          {/* Similar Images Section */}
          <div className="mt-4">
            <h4 className="text-2xl font-medium mb-2">Similar ones</h4>
            {/* eslint-disable-next-line */}
            <div className="flex gap-2">
              {similarImages.map((img, index) => (
                // eslint-disable-next-line
                <img
                  key={index}
                  src={img}
                  alt="Similar"
                  className="h-16 w-16 object-cover rounded-none cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="py-16">
          <h2 className="text-4xl font-medium font-sans mb-4">Luxury Bathroom Design · GHS2,000.00</h2>
          <p className="text-gray-700 mb-6">
            Experience a spa-like atmosphere in this luxurious bathroom. Featuring modern fixtures and high-quality finishes,
            this bathroom is designed to be both functional and stylish. The spacious layout includes a walk-in shower and a
            soaking tub, offering the perfect escape after a long day.
          </p>
          <p className="text-gray-700 mb-6">
            The double vanity with quartz countertops provides ample space for all your essentials, while the sleek cabinets
            offer plenty of storage. Soft, ambient lighting and natural tones create a serene environment, making this bathroom
            a true retreat within your home.
          </p>
          <p className="text-gray-700 mb-6">
            Large windows and carefully placed mirrors enhance the natural light, adding to the open and airy feel of the space.
            Every detail has been considered to ensure both comfort and elegance in this beautiful bathroom design.
          </p>
        </div>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 font-bold text-lg"
        >
          &times;
        </button>
      </div>
    </div>
  )
}

const BathroomFragment: React.FC<BathroomFragmentProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseDescription = () => {
    setSelectedImage(null);
  };

  // Breakpoints for responsive masonry layout
  const breakpointColumnsObj = {
    default: 4, // 4 columns for large screens
    1100: 3,    // 3 columns for medium screens
    700: 2,     // 2 columns for smaller screens
    500: 1      // 1 column for mobile screens
  };

  return (
    <div className="w-full">
      {!selectedImage ? (
        <Masonry
          breakpointCols={breakpointColumnsObj} // Masonry breakpoints for responsiveness
          className="flex -ml-4"
          columnClassName="pl-4 bg-clip-padding"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-auto cursor-pointer overflow-hidden group mb-4"
              onClick={() => handleImageClick(image)}
            >
              {/* eslint-disable-next-line */}
              <img
                src={image}
                alt={`Bathroom ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-end items-end p-2">
                {/* Download Button positioned at the bottom right */}
                <a
                  href={image}
                  download
                  className=" rounded-full text-white hover:bg-white hover:text-gray-800  p-2  text-sm absolute bottom-2 right-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </Masonry>
      ) : (
        <BathroomImageDescription
          image={selectedImage}
          similarImages={images.slice(-10)} // Pass the last ten images as similar images
          onClose={handleCloseDescription} // Handle close action
        />
      )}
    </div>
  );
};

export default BathroomFragment;
