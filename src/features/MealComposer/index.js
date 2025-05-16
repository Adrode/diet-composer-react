import { useEffect, useState } from "react";
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

  const [weightArray, setWeightArray] = useState([
    { id: 0, weight: 100, },
    { id: 1, weight: 100, },
    { id: 2, weight: 100, },
  ]);

  useEffect(() => {
    weightArray.forEach((item, index) => {
      onGramsChange(index, item.weight);
    });
  }, [weightArray]);

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
  /*
    po zmianie opcji nie synchronizuje się to ze zmienioną wagą produktu, lub indexy się pieprzą;
    do sprawdzenia i naprawy
  */

  const onGramsChange = (index, weight) => {
    setMacrosArray(previous => {
      const updated = [...previous];
      updated[index] = {
        ...updated[index],
        protein: Math.round(pickersArray[index].protein * (weight / 100)),
        fat: Math.round(pickersArray[index].fat * (weight / 100)),
        carbs: Math.round(pickersArray[index].carbs * (weight / 100)),
        price: pickersArray[index].price * (weight / 100),
      }
      return updated;
    })
  };

  const onWeightIncrease = (index) => {
    setWeightArray(previous => {
      const updated = [...previous];
      updated[index] = {
        ...updated[index],
        weight: updated[index].weight + 10,
      }
      return updated;
    })
  };

  const onWeightDecrease = (index) => {
    setWeightArray(previous => {
      const updated = [...previous];
      updated[index] = {
        ...updated[index],
        weight: updated[index].weight - 10,
      }
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
              <WeightButton
                onClick={() => onWeightDecrease(index)}
              >-</WeightButton>
              <WeightValue
                type="text"
                value={weightArray[index].weight}
                readOnly={true}
                onChange={() => onGramsChange(index, weightArray[index].weight)}
              />
              <WeightButton
                onClick={() => onWeightIncrease(index)}
              >+</WeightButton>
            </ChangeValues>
          </ProductPicker>
        ))}
    </StyledMealComposer>
  )
}