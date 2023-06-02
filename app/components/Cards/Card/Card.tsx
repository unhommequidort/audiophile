import Button from '../../../../components/ui/Button/Button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CardProps {
  category: string;
}

const Card = ({ category }: CardProps) => {
  return (
    <div className="mt-[5rem] flex h-[12.75rem] w-full flex-col items-center justify-start rounded-lg bg-anti-flash-white sm:w-[21.875rem]">
      <Link href={`category/${category}`}>
        <img
          src={`https://res.cloudinary.com/dwboe2hgs/image/upload/v1684954930/audiophile/assets/shared/desktop/image-category-thumbnail-${category}.png`}
          alt={`Shop ${category}`}
          width="422"
          height="438"
          className="-mt-20 h-52 w-56"
        />
      </Link>
      <h3 className="text-lg font-semibold uppercase leading-6 tracking-[1.3px]">
        {category}
      </h3>
      <Button
        href={`category/${category}`}
        intent={'tertiary'}
        title={`Shop ${category}`}
        className="flex flex-row items-center justify-center"
      >
        <p>Shop</p>
        <Image
          src={`https://res.cloudinary.com/dwboe2hgs/image/upload/c_thumb,w_200,g_face/v1684954928/audiophile/assets/shared/desktop/icon-arrow-right_wjuryv.svg`}
          alt=""
          width="8"
          height="12"
          className="ml-3"
          aria-hidden="true"
        />
      </Button>
    </div>
  );
};

export default Card;
