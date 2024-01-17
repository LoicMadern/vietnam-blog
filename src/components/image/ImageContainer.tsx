import React from "react";

interface ImageContainerProps {
  name: string;
  caption?: string;
  widthSize?: number;
  heigthSize?: number;
  borderRadius?: number;
}

export default function ImageContainer(image: ImageContainerProps) {
  return (
    <div>
      <figure>
        <img
          style={{
            width: image.widthSize,
            height: image.heigthSize,
            borderRadius: image.borderRadius,
          }}
          className="post-image"
          src={require("../../assets/" + image.name + ".jpg")}
          alt={image.name}
        />
        <figcaption>{image.caption}</figcaption>
      </figure>
    </div>
  );
}
