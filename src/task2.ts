import { Product } from "./modules/Product";
import { AbstractSelling } from "./modules/AbstractSelling";
import { FixedSaleSelling } from "./modules/FixedSaleSelling";
import { CountSaleSelling } from "./modules/CountSaleSelling";

const sellings: AbstractSelling[] = [
  new FixedSaleSelling(new Product('толстовка', 42), 1),
  new FixedSaleSelling(new Product('кроссовки', 33), 2),
  new FixedSaleSelling(new Product('лампа', 15.6), 3),
  new FixedSaleSelling(new Product('ноутбук', 520), 1),

  new CountSaleSelling(new Product('чипсы', 1.8), 12, 6),
  new CountSaleSelling(new Product('ложка', 1), 10, 15),
  new CountSaleSelling(new Product('книга', 3.2), 5, 5),
  new CountSaleSelling(new Product('свечка', 2), 8, 5),
];

sellings.forEach(selling => console.log(selling, 'Итого:', selling.getPrice()));

console.log('\nОтсортировали массив по убыванию стоимости покупки:\n');
sellings.sort(AbstractSelling.compare).forEach(selling => console.log(selling, 'Итого:', selling.getPrice()));
