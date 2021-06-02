import '@testing-library/jest-dom/extend-expect'
import { fireEvent, getByTestId, render, screen } from '@testing-library/react'
import React from 'react'
import Home from '../../src/Pages/Home'
import Add from '../../src/Pages/Add-user'
import Edit from '../../src/Pages/Edit-user'
import TableInfo from '../../src/components/Tableinfo'
import Navi from '../../src/components/Navbar'
//import NavBar from '../../src/components/Navbar'
describe("Success cases, Add Dialog Form", () => {
    test("When form is render the title and the head columns must be showed up", () => { 
        render(<Home />)
        expect(screen.getByRole('heading', { name: /LISTA DE USUARIOS DEL BANCO/i })).toBeInTheDocument();
        expect(screen.getByRole('columnheader', { name: /Nombre Completo/i })).toBeInTheDocument();
        expect(screen.getByRole('columnheader', { name: /Cédula/i })).toBeInTheDocument();
        expect(screen.getByRole('columnheader', { name: /Usuario/i })).toBeInTheDocument();
        expect(screen.getByRole('columnheader', { name: /Estado/i })).toBeInTheDocument();
    });

    test('The button add users must be visible and disable', () => {
        render(<Add />);
        expect(screen.getByRole('button', { name: /AGREGAR USUARIO/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /AGREGAR USUARIO/i })).toHaveAttribute("disabled");
        expect(screen.getByRole('textbox', {
            name: /nombre completo/i
          })).toBeInTheDocument();
        expect(screen.getByRole('textbox', {
            name: /cédula/i
          })).toBeInTheDocument();
        expect(screen.getByRole('textbox', {
            name: /usuario/i
          })).toBeInTheDocument();
        expect(screen.getByRole('button', {
            name: /estado ​/i
          })).toBeInTheDocument();
        
      });
    test('',()=>{
        render(<TableInfo />);
        expect(screen.getByTestId('pruebaTabla')).toBeInTheDocument();
    });
    
    /*test('The edit section must have all the forms filled ',()=>{
        
        render(<Home />);
        render(<TableInfo />);
        const {container} = render(<TableInfo />);

        const button = getByTestId(container, 'edit-button');
        fireEvent.click(button);
       // expect(screen.getByRole('button', { name: /editbutton/i })).toBeInTheDocument();
      
       //expect(screen.getAllByTestId('editButton',hidden:true)).toBeInTheDocument();
                //const submit = getByTestId('editButton');
        //expect(submit).toBeInTheDocument();
        //fireEvent.click(screen.getByTestId('iconButton',{ name: /editButton/i }));
        /*expect(screen.getByRole('button', { name: /AGREGAR USUARIO/i })).toBeInTheDocument();
        window.addEventListener('load',()=>{
            document.querySelector('#root > div:nth-child(3) > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(5) > div > div:nth-child(1)').click();
        })
        render(<Edit />);
    });
    */
    
});
