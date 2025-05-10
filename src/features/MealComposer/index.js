import { useState } from "react";
import { ChangeValues, MacroProperties, MacroValues, ProductPicker, Property, StyledMealComposer, Title } from "./styled"

export const MealComposer = () => {
    const [howManyPickers, setHowManyPickers] = useState(5);

    return (
        <StyledMealComposer>
            {Array.from({ length: Number(howManyPickers) }).map((_, index) => (
                <ProductPicker key={index}>
                    <Title>Product #{index + 1}</Title>
                    <MacroProperties>
                        <Property>Protein:</Property>
                        <Property>Fat:</Property>
                        <Property>Carbs:</Property>
                        <Property>Price:</Property>
                    </MacroProperties>
                    <MacroValues>
                        <div>55g</div>
                        <div>10g</div>
                        <div>90g</div>
                        <div>7zł</div>
                    </MacroValues>
                    <ChangeValues>
                        <div>+</div>
                        <div>100g</div>
                        <div>-</div>
                    </ChangeValues>
                </ProductPicker>
            ))}
        </StyledMealComposer>
    )
}