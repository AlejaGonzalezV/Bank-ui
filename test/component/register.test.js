import '@testing-library/jest-dom/extend-expect'
import { fireEvenet, render, screen } from '@testing-library/react'
import React from 'react'
import Home from '../../src/Pages/Home'
import Add from '../../src/Pages/Add-user'

describe("Success cases, Add Dialog Form", () => {
    test("When form is render title, buttons and required fields should be shown", () => { 
        render(<Home />)
        expect(screen.getByRole('heading', { name: /LISTA DE USUARIOS DEL BANCO/i })).toBeInTheDocument()
     
    });

    test('The female option should be checked by default', () => {
        render(<Add />);
      
        expect(screen.getByRole('button', { name: /AGREGAR USUARIO/i })).toBeInTheDocument();
      
      });

});
