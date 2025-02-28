import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/images/project1.jpeg", alt: "Project View 1" },
    { src: "/images/project2.jpeg", alt: "Project View 2" },
    { src: "/images/project3.jpeg", alt: "Project View 3" },
    { src: "/images/project4.jpeg", alt: "Project View 4" },
    { src: "/images/project5.jpeg", alt: "Project View 5" },
    { src: "/images/project6.jpeg", alt: "Project View 6" },
  ];

  return (
    <section className="py-16 bg-gray-50" id="gallery">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 overflow-hidden rounded-lg"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
