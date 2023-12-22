import BillDetails from '@/components/pages/Cart/BillDetails/BillDetails';
import CartList from '@/components/pages/Cart/CartList/CartList';

export default function Cart() {
  return (
    <div className="container">
      <div className="mt-10 text-xl font-bold">Product List</div>
      <div className="mt-8">
        <div className="grid lg:grid-cols-6 gap-[50px]">
          <div className="lg:col-span-4">
            <CartList />
          </div>
          <div className="lg:col-span-2">
            <BillDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
