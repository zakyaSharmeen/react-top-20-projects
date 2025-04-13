import React from "react";
import { useParams, Link } from "react-router-dom";

const images = [
  {
    id: 1,
    src: "https://plus.unsplash.com/premium_photo-1669806748708-5fab7e9cc89c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",

    title: "Image 1",
    content: "This is content for Image 1",
  },
  {
    id: 2,
    src: "https://plus.unsplash.com/premium_photo-1669806748708-5fab7e9cc89c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
    title: "Image 2",
    content: "This is content for Image 2",
  },
  {
    id: 3,
    src: "https://plus.unsplash.com/premium_photo-1669806748708-5fab7e9cc89c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
    title: "Image 3",
    content: "This is content for Image 3",
  },
];

function ImageDetails() {
  const { id } = useParams();
  const image = images.find((img) => img.id === parseInt(id));

  if (!image) {
    return <p className="text-center text-red-500">Image not found!</p>;
  }

  return (
    <div className="p-5 max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold">{image.title}</h2>
      <img
        src={image.src}
        alt={image.title}
        className="w-full rounded-lg shadow-lg my-4"
      />
      <p>{image.content}</p>
      <Link to="/" className="block mt-4 text-blue-500">
        Back to Gallery
      </Link>
    </div>
  );
}

export default ImageDetails;
