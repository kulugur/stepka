import Image from 'next/image';

export default function Card({ title, description, tag, image, price }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full">
      
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />

      <div className="p-6 flex flex-col flex-grow">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full mb-3 w-fit">
          {tag}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {description}
        </p >
		<h4 className="text-xl font-bold text-gray-900 mb-2"> {price}</h4>
        <button className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-200 mt-auto">
          Подробнее
        </button>
      </div>
    </div>
  );
}
