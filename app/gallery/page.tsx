"use client";
import React, { useEffect, useState } from 'react';
import { supabase } from '../../helpers/supabase'; 

type Props = {};

const GalleryPage = (props: Props) => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImages = async () => {
      // Fetch list of images from Supabase bucket
      const { data, error } = await supabase.storage
        .from('kayujati')
        .list('', { limit: 100, offset: 0 });

      if (error) {
        console.error('Error fetching images:', error);
        setLoading(false);
        return;
      }

      if (!data || data.length === 0) {
        console.warn('No images found in the bucket.');
        setImages([]);
        setLoading(false);
        return;
      }

      // Generate public URLs for each image
      const imageUrls = data.map((file) => {
        const { publicURL }: any = supabase.storage
          .from('kayujati')
          .getPublicUrl(file.name);
        return publicURL.publicURL;
      });

      setImages(imageUrls);
      setLoading(false);
      console.log('Fetched image URLs:', imageUrls);
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>GalleryPage</h1>
      {loading ? (
        <p>Loading images...</p>
      ) : (
        <div className="gallery">
          {images.length === 0 ? (
            <p>No images found.</p>
          ) : (
            images.map((url, index) => (
              //eslint-disable-next-line
              <img key={index} src={url} alt={`Image ${index + 1}`} className="gallery-image" />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
