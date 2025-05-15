import { useState } from "react";
import { products } from "../products";
import {
  ChangeValues,
  MacroProperties,
  MacroValues,
  ProductPicker,
  Property,
  StyledMealComposer,
  ProductsList,
  Value,
  WeightValue,
  WeightButton
} from "./styled"

export const MealComposer = () => {
  const [pickersArray, setPickersArray] = useState(
    [
      { id: 0, name: "", protein: 0, fat: 0, carbs: 0, price: 0 },
      { id: 1, name: "", protein: 0, fat: 0, carbs: 0, price: 0 },
      { id: 2, name: "", protein: 0, fat: 0, carbs: 0, price: 0 },
    ]
  );

  const [macrosArray, setMacrosArray] = useState([
    { id: 0, protein: 0, fat: 0, carbs: 0, price: 0 },
    { id: 1, protein: 0, fat: 0, carbs: 0, price: 0 },
    { id: 2, protein: 0, fat: 0, carbs: 0, price: 0 },
  ]);

  const onProductOptionChange = (index, productName) => {
    setPickersArray(previous => {
      const updated = [...previous];
      const chosenProduct = products.find(element => element.name === productName);
      updated[index] = {
        ...updated[index],
        name: productName,
        protein: Number(chosenProduct.protein),
        fat: Number(chosenProduct.fat),
        carbs: Number(chosenProduct.carbs),
        price: Number(chosenProduct.price)
      };
      return updated;
    });
  };

  const onGramsChange = (index, value) => {
    setMacrosArray(previous => {
      const updated = [...previous];
      updated[index] = {
        ...updated[index],
        protein: Math.round(pickersArray[index].protein * (value / 100)),
        fat: Math.round(pickersArray[index].fat * (value / 100)),
        carbs: Math.round(pickersArray[index].carbs * (value / 100)),
        price: pickersArray[index].price * (value / 100),
      }
      console.log(updated);
      return updated;
    })
  };

  return (
    <StyledMealComposer>
      {
        pickersArray.map((_, index) => (
          <ProductPicker
            key={index}
            onSubmit={event => event.preventDefault()}
          >
            <ProductsList
              onChange={({ target }) => onProductOptionChange(index, target.value)}
            >
              {products.map(product => (
                <option key={product.id} value={product.name}>
                  {product.name}
                </option>
              ))}
            </ProductsList>
            <MacroProperties>
              <Property>Protein:</Property>
              <Property>Fat:</Property>
              <Property>Carbs:</Property>
              <Property>Price:</Property>
            </MacroProperties>
            <MacroValues>
              <Value>{macrosArray[index].protein || pickersArray[index].protein}g</Value>
              <Value>{macrosArray[index].fat || pickersArray[index].fat}g</Value>
              <Value>{macrosArray[index].carbs || pickersArray[index].carbs}g</Value>
              <Value>{((macrosArray[index].price) || (pickersArray[index].price)).toFixed(1)}zł</Value>
            </MacroValues>
            <ChangeValues>
              <WeightButton>-</WeightButton>
              <WeightValue
                type="text"
                defaultValue={100}
                readOnly={false}
                onChange={({ target }) => onGramsChange(index, target.value)}
              />
              <WeightButton>+</WeightButton>
            </ChangeValues>
          </ProductPicker>
        ))}
    </StyledMealComposer>
  )
}