import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting"

describe('Greeting Component', () => {

    test("Render Hello World as a Text", () => {
        // Arrange
        render(<Greeting></Greeting>);
    
        // Assert
        const helloWorldElement = screen.getByText('Hello World')
        expect(helloWorldElement).toBeInTheDocument()
    })
})
