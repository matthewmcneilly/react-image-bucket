import React from 'react';
import ImageDetail from './image_detail';

const ImageList = (props) => {
  // filter through the array and remove any albums (have multiple images) which
  // would cause broken images to show
  const validImages = props.images.filter(image => !image.is_album);

  // Itterates over each image wraps it in an ImageDetail with its title and image
  const RenderedImages = validImages.map(image =>
    // key is required for performance concerns
    // implicit return used here so return keyword and {} not required
    <ImageDetail key={image.title} image={image} />
  );

  return (
    // {} required when referencing a js variable
    <ul className="media-list list-group">
      {RenderedImages}
    </ul>
  );
};

export default ImageList;
