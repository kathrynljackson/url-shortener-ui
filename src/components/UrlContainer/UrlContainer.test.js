
import UrlContainer from './UrlContainer';
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';



describe('UrlContainer', () => {
    test('headings and anchor tags of array elements get rendered appropriately', () => {
        const fakeData = [
            {
                id: 1,
                long_url: 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
                short_url: 'http://localhost:3001/useshorturl/1',
                title: 'Awesome photo'
              },
              {
                id: 2,
                long_url: 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
                short_url: 'http://localhost:3001/useshorturl/1',
                title: 'Cool photo'
              }
        ]

        render( 
            <UrlContainer urls={fakeData}/>
        )

    expect(screen.getAllByTestId('url-class').length).toBe(2);
        
    })

})