import Image from "next/image";
import productImage from "../../public/images/Products/A52.png";
import Card from "@/Components/Products/Card/Card";
import CardOutOfStock from "@/Components/Products/Card/CardOutOfStock";

function Products() {
  return (
    <div className="container">
      <div className="product-container bg-white rounded py-[24px] px-[16px]">
        <div className="border-b border-[#dee2e6] mb-4 flex items-baseline">
          <div className="border-b-2 border-[#38b449] text-xl font-bold pb-4">
            Mobile & Gadgets
          </div>
          <div className="ml-auto py-1.5 px-3 rounded text-white font-normal text-sm bg-[#38b449] hover:bg-[#28a745] transition-all cursor-pointer">
            View More
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 items-center gap-5 place-items-center">
          <Card />
          <Card />
          <Card />
          {/* <Card /> */}
          <CardOutOfStock />
          <CardOutOfStock />
        </div>

        {/* <div className="flex flex-wrap gap-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <CardOutOfStock />
          <CardOutOfStock />
        </div> */}
      </div>
    </div>
  );
}

export default Products;
