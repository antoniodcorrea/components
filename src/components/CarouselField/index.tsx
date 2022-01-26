import React, { useEffect, useState } from 'react';

import Cross from '../../assets/svg/cross.svg';
import Plus from '../../assets/svg/plusCircle.svg';
import { ImageField, Input, Sortable } from '..';
import { sortArrayByIdAndOrder } from '@antoniodcorrea/utils';

import './CarouselField.less';

export type CarouselFieldSlide = {
  id: number;
  order: number;
  title: string;
  images: {
    original: string;
    [key: string]: string;
  };
};

export const emptySlide = {
  id: 0,
  order: 0,
  title: '',
  images: {
    original: '',
  },
};

interface Props {
  className?: string;
  images: Array<CarouselFieldSlide>;
  onChange: (images: Array<CarouselFieldSlide>) => void;
  onFileUpload: (file: File) => Promise<{ image: string }>;
  onFileRemove?: (url: string) => Promise<void>;
}

export const CarouselField: React.FC<Props> = ({ className, images, onChange, onFileUpload, onFileRemove }) => {
  const [currentSlide, setCurrentSlide] = useState<CarouselFieldSlide>(undefined);
  const [listImages, setListImages] = useState<Array<CarouselFieldSlide>>(images);
  const sortedImages = listImages.sort((prev, next) => prev.order - next.order);

  const onSortChange = (image: Partial<CarouselFieldSlide>) => {
    const selectionModified = sortArrayByIdAndOrder({ data: sortedImages, id: image.id, order: image.order });
    const currentImage = selectionModified.find((item) => item.id === currentSlide?.id);

    setListImages(selectionModified); // To avoid re-renders with different set of images we previously set local order
    onChange(selectionModified);
    setCurrentSlide(currentImage);
  };

  const onImageListClick = (item: CarouselFieldSlide) => {
    setCurrentSlide(item);
  };

  const scrollToRight = (id: string) => {
    const carouselList = document.getElementById(id);
    if (!carouselList) return;

    const width = carouselList.getBoundingClientRect().width;

    carouselList.scrollTo({
      left: width,
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add a slide to the list and focus it on top
  const onSlideAdd = () => {
    const imagesWithoutImage = sortedImages.some((item) => !item.images?.original);
    if (imagesWithoutImage) return;

    const allIds = sortedImages.map((item) => item.id);
    const allOrders = sortedImages.map((item) => item.order);
    const maxId = Math.max(0, ...allIds);
    const maxOrder = Math.max(0, ...allOrders);
    const newImage = {
      ...emptySlide,
      order: maxOrder + 1,
      id: maxId + 1,
    };
    const allImages = [...sortedImages, newImage];

    onChange(allImages);
    setCurrentSlide(newImage);
    scrollToRight('CarouselField-list');
  };

  const onSlideRemove = async (removedSlide: CarouselFieldSlide) => {
    try {
      await onFileRemove(removedSlide?.images?.original);
    } catch (err) {
      console.log(err);
    } finally {
      const imagesWithoutRemoved = sortedImages.filter((item) => item.id !== removedSlide.id);
      onChange(imagesWithoutRemoved);
    }
  };

  const onFileUploadRequest = async (file) => {
    const data = await onFileUpload(file);
    const currentImageModified: CarouselFieldSlide = {
      ...currentSlide,
      images: {
        original: data.image,
      },
    };
    const imagesModified = sortedImages.map((item) => {
      if (item.id === currentSlide?.id) {
        return currentImageModified;
      }

      return item;
    });

    setCurrentSlide(currentImageModified);
    onChange(imagesModified);

    // If the image corresponds to the last item in the list, scroll to show the «add» button
    const allOrderIds = sortedImages.map((item) => item.order);
    const maxOrderId = Math.max(...allOrderIds);
    if (maxOrderId === currentImageModified.order) scrollToRight('CarouselField-list');
  };

  const onTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    const imagesModified = sortedImages.map((item) => {
      if (item.id === currentSlide?.id) {
        return {
          ...currentSlide,
          title: value,
        };
      }

      return item;
    });

    onChange(imagesModified);
  };

  useEffect(() => {
    // If the current slide is missing from the slides, don't update
    const currentIsInImages = sortedImages.some((item) => item.id === currentSlide?.id);
    if (currentSlide && currentIsInImages) return;

    // Base case, focus first image
    setCurrentSlide(sortedImages[0]);
  }, [sortedImages]);

  useEffect(() => {
    setListImages(images || []);
  }, [images]);

  return (
    <div className={'CarouselField' + (className ? ` ${className}` : '')}>
      <ImageField
        className="CarouselField-current"
        label={currentSlide?.title}
        name={currentSlide?.title}
        image={currentSlide?.images?.original}
        disabled={!sortedImages.length}
        grow={false}
        uploadFiles={onFileUploadRequest}
        onRemove={onFileRemove}
        percentCompleted={0}
        accept=".jpg,.jpeg,.png"
      />
      <Input
        className="CarouselField-input"
        name="input"
        value={sortedImages.find((item) => item.id === currentSlide?.id)?.title}
        onChange={onTitleChange}
      />
      <div className="CarouselField-list" id="CarouselField-list">
        <Sortable className="CarouselField-images" onSortEnd={onSortChange}>
          {sortedImages.map((item) => (
            <li
              className={'CarouselField-item' + (item.id === currentSlide?.id ? ' CarouselField-item--current' : '')}
              key={item.id}
              data-id={item.id}
              data-order={item.order}
            >
              <div className="CarouselField-overlay" onMouseDown={() => onImageListClick(item)} />
              <img src={item?.images?.original} />
              <Cross
                id="Remove"
                className="CarouselField-editCarouselIcon CarouselField-iconRemove"
                onClick={() => onSlideRemove(item)}
              />
            </li>
          ))}
        </Sortable>
        <li className="CarouselField-item CarouselField-itemAdd" onClick={onSlideAdd}>
          <div className="CarouselField-overlay" />
          <Plus className="CarouselField-iconAdd" />
        </li>
      </div>
    </div>
  );
};
