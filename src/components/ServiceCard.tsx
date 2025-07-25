
import { Clock } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

const ServiceCard = ({ title, description, price, duration, image }: ServiceCardProps) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-semibold text-rose-600">{price}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-rose-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500">
            <Clock size={16} className="mr-1" />
            <span className="text-sm">{duration}</span>
          </div>
          <button className="bg-gradient-to-r from-rose-100 to-pink-100 text-rose-600 px-4 py-2 rounded-full text-sm font-semibold hover:from-rose-200 hover:to-pink-200 transition-all">
            Детали
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
