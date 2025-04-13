import React from "react";
import { Link } from "react-router-dom";

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

function ImageGallery() {
  return (
    <div className="p-5 max-w-2xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Image Gallery</h2>
      <div className="grid grid-cols-3 gap-4">
        {images.map((img) => (
          <Link to={`/image/${img.id}`} key={img.id} className="block">
            <img
              src={img.src}
              alt={img.title}
              className="w-full rounded-lg shadow-lg hover:opacity-80 transition"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
