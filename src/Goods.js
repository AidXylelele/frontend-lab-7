import GoodsCard from "./GoodsCard";

import apple from "./images/apple.png";
import pear from "./images/pear.png";
import grapes from "./images/grapes.png";
import orange from "./images/orange.png";
import peach from "./images/peach.png";
import banana from "./images/banana.png";

const Goods = () => {
  const GOODS = [
    {
      name: "Banana",
      price: 50,
      image: banana,
    },
    {
      name: "Pear",
      price: 15,
      image: pear,
    },
    {
      name: "Orange",
      price: 25,
      image: orange,
    },
    {
      name: "Grapes",
      price: 20,
      image: grapes,
    },
    {
      name: "Peach",
      price: 30,
      image: peach,
    },
    {
      name: "Apple",
      price: 10,
      image: apple,
    },
  ];

  return (
    <div className="goods">
      {GOODS.map((el) => (
        <GoodsCard
          name={el.name}
          price={el.price}
          image={el.image}
          key={el.name}
        />
      ))}
    </div>
  );
};

export default Goods;
