'use client';

function ProductsTitleSection({ title }) {
  return (
    <div className="border-b border-[#dee2e6] mb-4 flex items-baseline">
      <div className="border-b-2 border-[#38b449] text-xl font-bold pb-4">
        {title}
      </div>
      <div className="ml-auto py-1.5 px-3 rounded text-white font-normal text-sm bg-[#38b449] hover:bg-[#28a745] transition-all cursor-pointer">
        View More
      </div>
    </div>
  );
}

export default ProductsTitleSection;
