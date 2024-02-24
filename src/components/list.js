import List1 from "./../assets/list/list1.png";
import List2 from "./../assets/list/list2.png";
import List3 from "./../assets/list/list3.png";
import List4 from "./../assets/list/list4.png";
import List5 from "./../assets/list/list5.png";
import List6 from "./../assets/list/list6.png";
import List7 from "./../assets/list/list7.png";
import List8 from "./../assets/list/list8.png";
import List9 from "./../assets/list/list9.png";
import List10 from "./../assets/list/list10.png";

import ListItem from "./listItem";

const listImages = [
  List1,
  List2,
  List3,
  List4,
  List5,
  List6,
  List7,
  List8,
  List9,
  List10,
  List1,
  List2,
];

const pValues = [
  "Shopee Pilih Lokal",
  "Shopee Mall",
  "Pulsa, Tagihan dan Tiket",
  "In Fashion",
  "Shopee Market",
  "Bayar Ditempat",
  "Termurah di Shopee",
  "Gratis Ongkir dan Voucher",
  "Shopee Barokah",
  "Semua Promo",
  "Shopee Pilih Lokal",
  "Shopee Mall",
];

const List = () => {
  return (
    <>
      <div className="container">
        <div className="row my-3">
          {listImages.map((image, index) => (
            <ListItem
              key={index}
              image={image}
              pValue={pValues[index]}
            ></ListItem>
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
