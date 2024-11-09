import { useEffect, useState } from "react";
import TabsButton from "./components/TabsButton.jsx";
import ProductCard from "./components/ProductCard.jsx";

function App() {
  const PRODUCTS = {
    tab_1: {
      id: "dogs",
      api: "https://mocki.io/v1/578f71a1-bc49-4be1-a187-3aa664a635b3"
    },
    tab_2: {
      id: "humans",
      api: "https://mocki.io/v1/f6cd2ea7-fa2c-44e2-b611-f9ca993c49b4"
    }
  };

  // The first product tab is loaded immediately
  useEffect(() => {
    fetchData(PRODUCTS.tab_1.api);
  }, []);

  const [activeTab, setActiveTab] = useState(PRODUCTS.tab_1.id);
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const errorText = "We're sorry. Products could not be loaded.";

  function fetchData(url) {
    setIsLoading(true);
    setError(false);
    setProductData([]);

    const checkError = (response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw Error(response.status);
      }
    };

    const handleError = (error) => {
      console.warn(error.message);
      setIsLoading(false);
      setError(true);
    };

    const handleData = (data) => {
      setIsLoading(false);
      setProductData(data);
    };

    fetch(url).then(checkError).then(handleData).catch(handleError);
  }

  function handleClick(tabID, productsURL) {
    setActiveTab(tabID);
    fetchData(productsURL);
  }

  return (
    <div>
      <main>
        <div className="Container u-mt-64 u-xs-mt-40 u-pb-24">
          <h1 className="H1 u-ta-center">Product List UI</h1>

          <div className="u-ta-center u-mt-40 u-xs-mt-24">
            <div className="Tabs" role="tablist" aria-label="Choose product type">
              <TabsButton onClick={() => handleClick(PRODUCTS.tab_1.id, PRODUCTS.tab_1.api)} isActive={activeTab === PRODUCTS.tab_1.id}>
                For Dogs
              </TabsButton>
              <TabsButton onClick={() => handleClick(PRODUCTS.tab_2.id, PRODUCTS.tab_2.api)} isActive={activeTab === PRODUCTS.tab_2.id}>
                For Humans
              </TabsButton>
            </div>
          </div>

          <p className="Alert Alert--info u-mt-40 u-xs-mt-24">Buy multiples original canine or human products</p>

          <div className="u-mt-40 u-xs-mt-24">
            {isLoading && <span className="Loader"></span>}
            {error && <p className="Alert Alert--error">{errorText}</p>}
            <ul className="Products">
              {productData.map((product) => (
                <ProductCard key={product.id} img1x={product.img[0]} img2x={product.img[1]} name={product.name} desc={product.desc} rating={product.rating} reviews={product.reviews} price={product.price} />
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
