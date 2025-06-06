import { useEffect, useState } from "react";
import { products } from "../products";
import {
  MacrosSummary,
  Header,
  MacroContainer,
  Macro,
  ProductPickersContainer,
  ProductPicker,
  AddProductPicker,
  RemoveProductPicker,
  ProductsList,
  MacrosContainer,
  Macros,
  Value,
  ChangeValues,
  WeightValue,
  WeightButton,
  Property,
} from "./styled"

export const MealComposer = () => {
  const [pickersArray, setPickersArray] = useState(
    [
      { id: 0, name: "", kcal: 0, protein: 0, fat: 0, carbs: 0, price: 0 },
      { id: 1, name: "", kcal: 0, protein: 0, fat: 0, carbs: 0, price: 0 },
      { id: 2, name: "", kcal: 0, protein: 0, fat: 0, carbs: 0, price: 0 },
    ]
  );

  const [macrosArray, setMacrosArray] = useState([
    { id: 0, kcal: 0, protein: 0, fat: 0, carbs: 0, price: 0 },
    { id: 1, kcal: 0, protein: 0, fat: 0, carbs: 0, price: 0 },
    { id: 2, kcal: 0, protein: 0, fat: 0, carbs: 0, price: 0 },
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
  }, [pickersArray, weightArray]);

  const onProductOptionChange = (index, productName) => {
    setPickersArray(previous => {
      const updated = [...previous];
      const chosenProduct = products.find(element => element.name === productName);
      updated[index] = {
        ...updated[index],
        name: productName,
        kcal: chosenProduct.kcal,
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
        kcal: Math.round(product.kcal * factor),
        protein: Math.round(product.protein * factor),
        fat: Math.round(product.fat * factor),
        carbs: Math.round(product.carbs * factor),
        price: +(product.price * factor).toFixed(2),
      };
      return updated;
    })
  };

  const onWeightIncrease = (index) => {
    setWeightArray(previous => {
      const updated = [...previous];
      const newWeight = Math.min(990, updated[index].weight + 5);
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
      const newWeight = Math.max(0, updated[index].weight - 5);
      updated[index] = {
        ...updated[index],
        weight: newWeight,
      };
      onGramsChange(index, newWeight);
      return updated;
    })
  };

  const keysToSum = ["kcal", "protein", "fat", "carbs", "price"];
  const macrosSum = macrosArray.reduce((accumulator, object) => {
    keysToSum.forEach(key => {
      accumulator[key] = (accumulator[key] || 0) + object[key];
    });
    return accumulator;
  }, {});

  const onProductPickerAdd = () => {
    if (pickersArray.length >= 10) return;
    setPickersArray(previous => [
      ...previous,
      {
        id: previous.length, name: "", kcal: 0, protein: 0, fat: 0, carbs: 0, price: 0,
      }
    ]);
    setMacrosArray(previous => [
      ...previous,
      {
        id: previous.length, kcal: 0, protein: 0, fat: 0, carbs: 0, price: 0,
      }
    ]);
    setWeightArray(previous => [
      ...previous,
      {
        id: previous.length, weight: 100,
      }
    ]);
  };

  const onProductPickerRemove = (index) => {
    setPickersArray(previous => previous.filter((_, id) => id !== index));
    setMacrosArray(previous => previous.filter((_, id) => id !== index));
    setWeightArray(previous => previous.filter((_, id) => id !== index));
  };

  return (
    <>
      <MacrosSummary>
        <Header>Macronutrients summary:</Header>
        <MacroContainer>
          <Macro>Kcal: {macrosSum.kcal}</Macro>
          <Macro>Protein: {macrosSum.protein}g</Macro>
          <Macro>Fat: {macrosSum.fat}g</Macro>
          <Macro>Carbs: {macrosSum.carbs}g</Macro>
          <Macro>Price: {(macrosSum.price).toFixed(2)}zł</Macro>
        </MacroContainer>
      </MacrosSummary>
      <ProductPickersContainer>
        {
          pickersArray.map((picker, index) => (
            <ProductPicker
              key={picker.id}
            >
              <RemoveProductPicker
                type="button"
                onClick={() => onProductPickerRemove(index)}
              >✖</RemoveProductPicker>
              <ProductsList
                onChange={({ target }) => onProductOptionChange(index, target.value)}
              >
                {products.map(product => (
                  <option key={product.id} value={product.name}>
                    {product.name}
                  </option>
                ))}
              </ProductsList>
              <MacrosContainer>
                <Macros>
                  <Property>Kcal:</Property>
                  <Property>Protein:</Property>
                  <Property>Fat:</Property>
                  <Property>Carbs:</Property>
                  <Property>Price:</Property>
                </Macros>
                <Macros>
                  <Value>{macrosArray[index].kcal}</Value>
                  <Value>{macrosArray[index].protein}g</Value>
                  <Value>{macrosArray[index].fat}g</Value>
                  <Value>{macrosArray[index].carbs}g</Value>
                  <Value>{macrosArray[index].price}zł</Value>
                </Macros>
              </MacrosContainer>
              <ChangeValues>
                <WeightButton
                  type="button"
                  onClick={() => onWeightDecrease(index)}
                >-</WeightButton>
                <WeightValue
                  type="text"
                  value={weightArray[index].weight}
                  readOnly={true}
                  onChange={() => onGramsChange(index, weightArray[index].weight)}
                />
                <WeightButton
                  type="button"
                  onClick={() => onWeightIncrease(index)}
                >+</WeightButton>
              </ChangeValues>
            </ProductPicker>
          ))}
        <AddProductPicker
          $hidden={pickersArray.length >= 10 ? true : false}
          onClick={() => onProductPickerAdd()}
        >
          Add product picker
        </AddProductPicker>
      </ProductPickersContainer>
    </>
  )
}