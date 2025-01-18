import ButtonTestExample from "./ButtonTestExample";
import { fireEvent, render } from "@testing-library/react";
describe('Button', () => {
    it('it should display in the screen', () => {
        const {getByTestId} = render(<ButtonTestExample />);
        const button = getByTestId('button');
        expect(button).toBeTruthy();
    });

    it('Button should be Clickable',() => {
        const handleClick = jest.fn();

        const{getByTestId} = render(<ButtonTestExample handleClick={handleClick} buttonName={'Submit'} />);
        const button = getByTestId('button');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
    
    it('Name of the Button should be Submit',() => {
        const handleClick = jest.fn();

        const{getByTestId, getByText} = render(<ButtonTestExample handleClick={handleClick} buttonName={'Submit'} />);
        const button = getByText('Submit');
        expect(button).toHaveTextContent('Submit');
    });
});
