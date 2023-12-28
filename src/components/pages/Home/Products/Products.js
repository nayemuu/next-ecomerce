import ProductGallery from '@/components/reuseable/ProductGallery/ProductGallery';
import ProductsTitleSection from '@/components/reuseable/ProductsTitleSection/ProductsTitleSection';

function Products() {
  return (
    <div className="container">
      <div className="product-container bg-white rounded py-[24px] px-[16px]">
        <ProductsTitleSection title="Mobile & Gadgets" />
        <ProductGallery />
      </div>
    </div>
  );
}

export default Products;
