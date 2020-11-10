
import UrlForm from './UrlForm.js';
import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';


describe('UrlForm', () => {
    
    HTMLFormElement.prototype.submit = () => {}

    test('should render the correct elements', () => {
        render(
            <UrlForm />
        )

    expect(screen.getByPlaceholderText('Title...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('URL to Shorten...')).toBeInTheDocument();
    expect(screen.getByText('Shorten Please!')).toBeInTheDocument();
    })

    test('should hold the correct values when the inputs change', () => {
        const mockFunction = jest.fn();

        render(
            
            <UrlForm />
        )

        const urltitleinput = screen.getByTestId('url-title-input')
        const urltoshorteninput = screen.getByTestId('url-toshorten-input')


        userEvent.type(urltitleinput, 'abc')
        userEvent.type(urltoshorteninput, 'xyz')
        
        expect(urltitleinput.value).toBe('abc')
        expect(urltoshorteninput.value).toBe('xyz')
    })

    test('should call the correct function onClick', () => {
        const mockClick = jest.fn()
        
        render(
            
            
            <UrlForm submit={mockClick}/>
        )
        const button = screen.getByTestId("shorten-button")
        userEvent.click(button);
        expect(mockClick).toHaveBeenCalledTimes(1);

    })
})