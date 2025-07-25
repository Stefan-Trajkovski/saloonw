
const GallerySection = () => {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=500&fit=crop",
      alt: "Модерна фризура"
    },
    {
      url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=600&fit=crop",
      alt: "Боење на коса"
    },
    {
      url: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=400&fit=crop",
      alt: "Стилизирање"
    },
    {
      url: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&h=700&fit=crop",
      alt: "Професионална нега"
    },
    {
      url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=500&fit=crop",
      alt: "Свечена фризура"
    },
    {
      url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=600&fit=crop",
      alt: "Машко шишање"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            Наша галерија
          </h2>
          <p className="text-xl text-gray-600">
            Погледни некои од нашите најдобри работи
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : 
                index % 7 === 0 ? 'md:row-span-2' : ''
              }`}
            >
              <img 
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-rose-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg">
            Види повеќе на Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
