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
          <Input type="number"></Input>
        </InputsContainer>
        <Submit type="button">Count!</Submit>
      </BMRCalculator>
    </>
  )
};