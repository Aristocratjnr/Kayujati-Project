import React from 'react';
import { KitchenImages } from './image.api';

interface DescriptionComponentProps {
    image: {
        alt: string;
        description: string;
        name: string;
        price: string;
        postedBy: string;
    };
}

const DescriptionComponent: React.FC<DescriptionComponentProps> = ({ image }) => {
    return (
        <div className="ml-8 p-4 bg-white shadow-md rounded-lg">
            {
                KitchenImages.map((image, index) => (
                    <div className="" key={index}>
                        {
                            image.name
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default DescriptionComponent;
