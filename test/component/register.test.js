import '@testing-library/jest-dom/extend-expect'
import { fireEvenet, render, screen } from '@testing-library/react'
import React from 'react'
import Home from '../../src/Pages/Home'

test('When the user is in the main',()=>{
    
    render(<Home />);
    expect(screen.getByRole('heading', { name: /lista de usuarios del banco/i })).toBeInTheDocument();
    //expected(screen.getByRole('heading',{name: /lista de usuarios del banco/i})).toBeVisible();
});