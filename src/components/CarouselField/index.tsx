import React, { useEffect, useState } from 'react';

import Cross from '../../assets/svg/cross.svg';
import Plus from '../../assets/svg/plusCircle.svg';
import { ImageField, Input, SortableList } from '..';
import './CarouselField.less';

export type CarouselFieldImage = {
  id: number;
  order: number;
  src: string;
  sizes: string;
  srcSet: string;
  title: string;
  alt: string;
};

export const emptyImage = {
  id: 0,
  order: 0,
  src: '',
  sizes: '',
  srcSet: '',
  title: '',
  alt: '',
};

interface Props {
  className?: string;
  images: Array<CarouselFieldImage>;
  onChange: (images: Array<CarouselFieldImage>) => void;
  onFileUpload: (file: File) => Promise<{ image: string }>;
  onFileRemove?: (url: string) => Promise<void>;
}

export const CarouselField: React.FC<Props> = ({ className, images, onChange, onFileUpload, onFileRemove }) => {
  const [currentSlide, setCurrentSlide] = useState<CarouselFieldImage>(undefined);
  const [listImages, setListImages] = useState<Array<CarouselFieldImage>>(images);
  const sortedImages = listImages.sort((prev, next) => prev.order - next.order);

  function onSortChange(image: Partial<CarouselFieldImage>) {
    const imageFound = sortedImages?.find((item) => item.id === image.id);
    const originalOrder = imageFound?.order;
    const directionUp = image.order > originalOrder;

    const selectionModified = sortedImages.map((item) => {
      if (directionUp) {
        if (item.order > originalOrder && item.order <= image.order) {
          return {
            ...item,
            order: item.order - 1,
          };
        } else if (item.id === image.id) {
          return {
            ...item,
            order: image.order,
          };
        }
      } else {
        if (item.order < originalOrder && item.order >= image.order) {
          return {
            ...item,
            order: item.order + 1,
          };
        } else if (item.id === image.id) {
          return {
            ...item,
            order: image.order,
          };
        }
      }

      return item;
    });

    const currentImage = selectionModified.find((item) => item.id === currentSlide?.id);

    onChange(selectionModified);
    setCurrentSlide(currentImage);
  }

  const onImageListClick = (item: CarouselFieldImage) => {
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
    const imagesWithoutImage = sortedImages.some((item) => !item.src);
    if (imagesWithoutImage) return;

    const allIds = sortedImages.map((item) => item.id);
    const allOrders = sortedImages.map((item) => item.order);
    const maxId = Math.max(0, ...allIds);
    const maxOrder = Math.max(0, ...allOrders);
    const newImage = {
      ...emptyImage,
      order: maxOrder + 1,
      id: maxId + 1,
    };
    const allImages = [...sortedImages, newImage];

    onChange(allImages);
    setCurrentSlide(newImage);
    scrollToRight('CarouselField-list');
  };

  const onSlideRemove = async (removedSlide: CarouselFieldImage) => {
    try {
      await onFileRemove(removedSlide.src);
    } catch (err) {
      console.log(err);
    } finally {
      const imagesWithoutRemoved = sortedImages.filter((item) => item.id !== removedSlide.id);
      onChange(imagesWithoutRemoved);
    }
  };

  const onFileUploadRequest = async (file) => {
    const data = await onFileUpload(file);
    const currentImageModified = {
      ...currentSlide,
      src: data.image,
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
    const currentIsInImages = sortedImages?.some((item) => item.id === currentSlide?.id);
    if (currentSlide && currentIsInImages) return;

    // Base case, focus first image
    setCurrentSlide(sortedImages[0]);
  }, [sortedImages]);

  useEffect(() => {
    setListImages(images);
  }, [images]);

  return (
    <div className={'CarouselField' + (className ? ` ${className}` : '')}>
      <ImageField
        className="CarouselField-current"
        label={currentSlide?.title}
        name={currentSlide?.title}
        image={currentSlide?.src}
        disabled={!sortedImages.length}
        grow={false}
        uploadFiles={onFileUploadRequest}
        onRemove={onFileRemove}
        percentCompleted={0}
        accept=".jpg,.jpeg"
      />
      <Input
        className="CarouselField-input"
        name="input"
        value={sortedImages.find((item) => item.id === currentSlide?.id)?.title}
        onChange={onTitleChange}
      />
      <div className="CarouselField-list" id="CarouselField-list">
        <SortableList
          id="CarouselField-sortable"
          direction="horizontal"
          className="CarouselField-images"
          onSortChange={onSortChange}
          handleClass="CarouselField-overlay"
        >
          {sortedImages?.map((item) => (
            <li
              className={'CarouselField-item' + (item.id === currentSlide?.id ? ' CarouselField-item--current' : '')}
              key={item.src}
              data-id={String(item.id)}
              data-order={item.order}
            >
              <div className="CarouselField-overlay" onMouseDown={() => onImageListClick(item)} />
              <img src={item.src} />
              <Cross
                className="CarouselField-editCarouselIcon CarouselField-iconRemove"
                onClick={() => onSlideRemove(item)}
              />
            </li>
          ))}
        </SortableList>
        <li className="CarouselField-item CarouselField-itemAdd" onClick={onSlideAdd}>
          <div className="CarouselField-overlay" />
          <Plus className="CarouselField-iconAdd" />
        </li>
      </div>
    </div>
  );
};
