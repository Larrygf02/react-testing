import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
userEvent
import Greeting from "./Greeting"

describe('Greeting Component', () => {

    test("Render Hello World as a Text", () => {
        // Arrange
        render(<Greeting></Greeting>);
    
        // Assert
        const helloWorldElement = screen.getByText('Hello World')
        expect(helloWorldElement).toBeInTheDocument()
    })

    test('renders good to see you if the button was NOT clicked', () => {
        render(<Greeting></Greeting>);
        const outputElement = screen.getByText('good to see you', { exact: false })
        expect(outputElement).toBeInTheDocument()
    })

    test('rendes changed! if the button was clicked', () => {
        render(<Greeting></Greeting>)

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)
        
        // Assert
        const outputElement = screen.getByText('changed', { exact: false })
        expect(outputElement).toBeInTheDocument()
    })

    test('not renders good to see you if the button was clicked', () => {
        render(<Greeting></Greeting>)

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        // assert
        const outputElement = screen.queryByText('good to see you', { exact: false })
        expect(outputElement).not.toBeInTheDocument()
        
    })
})
