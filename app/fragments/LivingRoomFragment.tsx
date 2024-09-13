import React, { useState } from 'react';
import Masonry from 'react-masonry-css'; // Import Masonry layout

interface LivingRoomFragmentProps {
  images: string[];
}

function LivingRoomImageDescription({ image, similarImages, onClose }: { image: string, similarImages: string[], onClose: () => void }) {
  return (
    <div className='h-[85vh] z-[9999] absolute bottom-0 w-full -ml-14 bg-white items-start justify-start px-20 flex'>
      <div className="grid grid-cols-2 gap-8 relative">
        <div className="py-16 flex flex-col gap-2">
          {/* eslint-disable-next-line */}
          <img src={image} alt="Selected" className="max-h-96 rounded-none" />
          <div className="">
            <p className='text-sm font-sans'>Posted by Lyza  · A week ago</p>
          </div>
          {/* Similar Images Section */}
          <div className="mt-4">
            <h4 className="text-2xl font-medium mb-2">Similar ones</h4>
            <div className="flex gap-2">
              {similarImages.map((img, index) => (
                //eslint-disable-next-line
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
          <h2 className="text-4xl font-medium font-sans mb-4">Modern Kitchen Design · GHS1,880.00</h2>
          <p className="text-gray-700 mb-6">
            This sleek and modern kitchen is a perfect blend of functionality and style.
            With state-of-the-art stainless steel appliances, this kitchen is designed
            for those who love to cook and entertain. The open layout allows for seamless
            interaction between the cooking and dining areas, making it ideal for family
            gatherings and dinner parties.
          </p>
          <p className="text-gray-700 mb-6">
            The custom cabinetry provides ample storage space, while the quartz countertops
            add a touch of luxury. The large central island serves as both a workspace and a
            casual dining area, with enough room for the whole family to gather around.
          </p>
          <p className="text-gray-700 mb-6">
            Recessed lighting and under-cabinet lighting ensure that the kitchen is always
            well-lit, whether you&apos;re preparing a meal or enjoying a late-night snack. The
            neutral color palette, featuring shades of gray and white, allows for easy
            personalization with your choice of decor.
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

const LivingRoomFragment: React.FC<LivingRoomFragmentProps> = ({ images }) => {
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
                alt={`Living Room ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-end items-end p-2">
                {/* Download Button positioned at the bottom right */}
                <a
                  href={image}
                  download
                  className="rounded-full text-white hover:bg-white hover:text-gray-800 p-2 text-sm absolute bottom-2 right-2"
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
        <LivingRoomImageDescription
          image={selectedImage}
          similarImages={images.slice(-10)} // Pass the last ten images as similar images
          onClose={handleCloseDescription} // Handle close action
        />
      )}
    </div>
  );
};

export default LivingRoomFragment;
