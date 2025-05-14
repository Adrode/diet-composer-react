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
      { id: 0, name: "" },
      { id: 1, name: "" },
      { id: 2, name: "" },
    ]
  );

  const onProductOptionChange = (index, productName) => {
    setPickersArray(previous => {
      const updated = [...previous];
      updated[index] = {
        ...updated[index],
        name: productName,
      };
      console.log(updated);
      return updated;
    });
  };

  return (
    <StyledMealComposer>
      {
        pickersArray.map((_, index) => (
          <ProductPicker
            key={index}
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
              <Value>55g</Value>
              <Value>10g</Value>
              <Value>80g</Value>
              <Value>5zł</Value>
            </MacroValues>
            <ChangeValues>
              <WeightButton>-</WeightButton>
              <WeightValue type="text" defaultValue={100} readOnly={true} />
              <WeightButton>+</WeightButton>
            </ChangeValues>
          </ProductPicker>
        ))}
    </StyledMealComposer>
  )
}