import ProductsList from "../components/ProductsList";

function ProductsPage() {
  return (
    <div className="content-area">
      <div className="flex flex-col items-center mb-20">
        <h2 className="my-8 font-bold text-2xl">Products List:</h2>
        <ProductsList />
      </div>
    </div>
  );
}

export default ProductsPage;
