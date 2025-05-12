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
    Value
} from "./styled"

export const MealComposer = () => {
    const [howManyPickers, setHowManyPickers] = useState(3);

    return (
        <StyledMealComposer>
            {Array.from({ length: Number(howManyPickers) }).map((_, index) => (
                <ProductPicker key={index}>
                    <ProductsList>
                        {products.map(product => (
                            <option value={product.name}>
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
                        <div>-</div>
                        <div>100g</div>
                        <div>+</div>
                    </ChangeValues>
                </ProductPicker>
            ))}
        </StyledMealComposer>
    )
}