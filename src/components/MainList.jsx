/* eslint-disable */
import ListCard from './ListCard';

const MainList = ({ products }) => {
  console.log('MainList----', products);

  return (
    <section className="mainlist">
      <h2>신상품 리스트가 들어가는 곳</h2>
      <a href="/shopall">View All</a>

      <ul className="listCon">
        { products.map((product) => {
          return (
            <li key={product.id}>
              <ListCard product={product} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MainList;
