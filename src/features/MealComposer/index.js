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
    pickersArray.forEach((_, index) => {
      const weight = weightArray[index].weight;
      onGramsChange(index, weight);
    });
  }, [pickersArray]);

  const onProductOptionChange = (index, productName) => {
    setPickersArray(previous => {
      const updated = [...previous];
      const chosenProduct = products.find(element => element.name === productName);
      updated[index] = {
        ...updated[index],
        name: productName,
        protein: chosenProduct.protein,
        fat: chosenProduct.fat,
        carbs: chosenProduct.carbs,
        price: chosenProduct.price
      };
      return updated;
    });
  };

  const onGramsChange = (index, weight) => {
    const product = pickersArray[index];
    const factor = weight / 100;
    setMacrosArray(previous => {
      const updated = [...previous];
      updated[index] = {
        protein: Math.round(product.protein * factor),
        fat: Math.round(product.fat * factor),
        carbs: Math.round(product.carbs * factor),
        price: +(product.price * factor).toFixed(1),
      };
      return updated;
    })
  };

  const onWeightIncrease = (index) => {
    setWeightArray(previous => {
      const updated = [...previous];
      const newWeight = Math.min(990, updated[index].weight + 10);
      updated[index] = {
        ...updated[index],
        weight: newWeight,
      };
      onGramsChange(index, newWeight);
      return updated;
    })
  };

  const onWeightDecrease = (index) => {
    setWeightArray(previous => {
      const updated = [...previous];
      const newWeight = Math.max(0, updated[index].weight - 10);
      updated[index] = {
        ...updated[index],
        weight: newWeight,
      };
      onGramsChange(index, newWeight);
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
              <Value>{macrosArray[index].protein}g</Value>
              <Value>{macrosArray[index].fat}g</Value>
              <Value>{macrosArray[index].carbs}g</Value>
              <Value>{macrosArray[index].price}zł</Value>
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