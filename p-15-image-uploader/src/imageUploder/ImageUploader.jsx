import React, { useState } from "react";

function ImageUploader() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="p-5 max-w-md mx-auto bg-white rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Image Uploader</h2>

      {/* File Input */}
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleImageUpload}
        className="mb-4"
      />

      {/* Image Preview */}
      {image && (
        <div className="mt-4">
          <p className="text-gray-500">Uploaded Image:</p>
          <img
            src={image}
            alt="Uploaded"
            className="mt-2 w-full rounded-lg shadow-md"
          />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
