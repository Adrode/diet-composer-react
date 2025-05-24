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
} from "./styled";

export const BMR = () => {
  return (
    <>
      <BMRSummary>
        <Header>BMR Calculator</Header>
        <Subheader>Your daily calorie and macronutrient requirements:</Subheader>
        <MacroContainer>
          <Macro>Kcal: {0}</Macro>
          <Macro>Protein: {0}g</Macro>
          <Macro>Fat: {0}g</Macro>
          <Macro>Carbs: {0}g</Macro>
        </MacroContainer>
        <Subheader>Your per meal calorie and macronutrient requirements:</Subheader>
        <MacroContainer>
          <Macro>Kcal: {0}</Macro>
          <Macro>Protein: {0}g</Macro>
          <Macro>Fat: {0}g</Macro>
          <Macro>Carbs: {0}g</Macro>
        </MacroContainer>
      </BMRSummary>
      <BMRCalculator>
        <LabelsContainer>
          <Label>Height [cm]:</Label>
          <Label>Weight [kg]:</Label>
          <Label>Age:</Label>
          <Label>Meals per day:</Label>
          <Label>Activity:</Label>
        </LabelsContainer>
        <InputsContainer>
          <Input type="number"></Input>
          <Input type="number"></Input>
          <Input type="number"></Input>
          <Input type="number"></Input>
          <Select>
            <option value={1.2}>1.2</option>
            <option value={1.375}>1.375</option>
            <option value={1.55}>1.55</option>
            <option value={1.725}>1.725</option>
            <option value={1.9}>1.9</option>
          </Select>
        </InputsContainer>
        <Submit type="button">Count!</Submit>
      </BMRCalculator>
      <div>
        <br /><br />
        1.2 -	Sedentary (little to no exercise, desk job)<br /><br />
        1.375	- Lightly active (light exercise 1–3 days/week, light activity at work)<br /><br />
        1.55 - Moderately active (moderate exercise 3–5 days/week)<br /><br />
        1.725	- Very active (hard exercise 6–7 days/week, physically demanding job)<br /><br />
        1.9	- Extra active (very intense training or physical job, e.g. athlete, laborer)
      </div>
    </>
  )
};