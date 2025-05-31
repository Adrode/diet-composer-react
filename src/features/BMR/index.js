import { useState } from "react";
import {
  BMRSummary,
  Header,
  Subheader,
  MacroContainer,
  Macro,
  BMRCalculator,
  LabelsContainer,
  Label,
  InputsContainer,
  Input,
  Submit,
  Select,
  Description,
  DescriptionLine,
} from "./styled";

export const BMR = () => {
  const [nutritionalValues, setNutritionalValues] = useState(
    { kcal: 0, protein: 0, fat: 0, carbs: 0 }
  );

  const [perMealNutritionalValues, setPerMealNutritionalValues] = useState(
    { kcal: 0, protein: 0, fat: 0, carbs: 0 }
  );

  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [age, setAge] = useState();
  const [mealsPerDay, setMealsPerDay] = useState();
  const [activity, setActivity] = useState(1);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (height && weight && age && mealsPerDay && activity) {
      onBMRcount(height, weight, age, mealsPerDay, activity);
    } else return;
  }

  const onBMRcount = (height, weight, age, mealsPerDay, activity) => {
    const cleanBMR = (66 + (13.7 * weight) + (5 * height) - (6.8 * age));
    const BMRwithActivity = Math.round(cleanBMR * activity);
    const protein = weight * 2;
    const fat = (BMRwithActivity * 0.3) / 9;

    setNutritionalValues(previous => (
      {
        ...previous,
        kcal: Math.round(BMRwithActivity),
        protein: Math.round(protein),
        fat: Math.round(fat),
        carbs: Math.round((BMRwithActivity - (fat * 9) - (protein * 4)) / 4)
      }
    ));

    setPerMealNutritionalValues(previous => (
      {
        ...previous,
        kcal: Math.round(BMRwithActivity / mealsPerDay),
        protein: Math.round(protein / mealsPerDay),
        fat: Math.round(fat / mealsPerDay),
        carbs: Math.round(((BMRwithActivity - (fat * 9) - (protein * 4)) / 4) / mealsPerDay)
      }
    ));
  };

  return (
    <>
      <BMRSummary>
        <Header>BMR Calculator</Header>
        <Subheader>Your daily calorie and macronutrient requirements:</Subheader>
        <MacroContainer>
          <Macro>Kcal: {nutritionalValues.kcal}</Macro>
          <Macro>Protein: {nutritionalValues.protein}g</Macro>
          <Macro>Fat: {nutritionalValues.fat}g</Macro>
          <Macro>Carbs: {nutritionalValues.carbs}g</Macro>
        </MacroContainer>
        <Subheader>Your per meal calorie and macronutrient requirements:</Subheader>
        <MacroContainer>
          <Macro>Kcal: {perMealNutritionalValues.kcal}</Macro>
          <Macro>Protein: {perMealNutritionalValues.protein}g</Macro>
          <Macro>Fat: {perMealNutritionalValues.fat}g</Macro>
          <Macro>Carbs: {perMealNutritionalValues.carbs}g</Macro>
        </MacroContainer>
      </BMRSummary>
      <BMRCalculator
        onSubmit={onFormSubmit}
      >
        <LabelsContainer>
          <Label>Height [cm]:</Label>
          <Label>Weight [kg]:</Label>
          <Label>Age:</Label>
          <Label>Meals per day:</Label>
          <Label>Activity:</Label>
        </LabelsContainer>
        <InputsContainer>
          <Input
            type="number"
            min="0"
            required
            onChange={({ target }) => setHeight(Number(target.value))}
          ></Input>
          <Input
            type="number"
            min="0"
            required
            onChange={({ target }) => setWeight(Number(target.value))}
          ></Input>
          <Input
            type="number"
            min="0"
            required
            onChange={({ target }) => setAge(Number(target.value))}
          ></Input>
          <Input
            type="number"
            min="0"
            required
            onChange={({ target }) => setMealsPerDay(Number(target.value))}
          ></Input>
          <Select
            required
            min="1"
            onChange={({ target }) => setActivity(Number(target.value))}
          >
            <option value={1}>1</option>
            <option value={1.2}>1.2</option>
            <option value={1.3}>1.3</option>
            <option value={1.375}>1.375</option>
            <option value={1.45}>1.45</option>
            <option value={1.55}>1.55</option>
            <option value={1.65}>1.65</option>
            <option value={1.725}>1.725</option>
            <option value={1.8}>1.8</option>
            <option value={1.9}>1.9</option>
          </Select>
        </InputsContainer>
        <Submit
          type="submit"
        >
          Count!
        </Submit>
      </BMRCalculator >
      <Subheader>Activities examples:</Subheader>
      <Description>
        <DescriptionLine>1 - No physical activity (used as baseline, not recommended for most users)</DescriptionLine>
        <DescriptionLine>1.2 -	Sedentary (little to no exercise, desk job)</DescriptionLine>
        <DescriptionLine>1.375	- Lightly active (light exercise 1–3 days/week, light activity at work)</DescriptionLine>
        <DescriptionLine>1.55 - Moderately active (moderate exercise 3–5 days/week)</DescriptionLine>
        <DescriptionLine>1.725	- Very active (hard exercise 6–7 days/week, physically demanding job)</DescriptionLine>
        <DescriptionLine>1.9	- Extra active (very intense training or physical job, e.g. athlete, laborer)</DescriptionLine>
      </Description>
    </>
  )
};