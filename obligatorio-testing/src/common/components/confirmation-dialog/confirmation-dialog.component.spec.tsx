import React from "react";
import { render, screen, within} from '@testing-library/react';
import  { userEvent } from '@testing-library/user-event';
import { ConfirmationDialogComponent } from "./confirmation-dialog.component";


describe('ConfirmationDialogComponent component spec', () => {
    it.only('should DialogTitle with text "Eliminar Proyecto"', () => {
        //Arrange
        const props = {
            isOpen: true,
            onAccept: jest.fn(),
            onClose: jest.fn(),
            title: "Título dialogo",
            labels: {acceptButton: "Aceptar", closeButton: "Cancelar"},
            children: ""
        }
        //Act
        render(<ConfirmationDialogComponent {...props}/>)
        const titleElement = screen.getByRole('heading', { level:2 })
        // const titleElement = screen.getByRole('dialog'); 
        //Assert
        expect(titleElement.textContent).toEqual('Título dialogo')
    });
    it.only('should render Dialog when isOpen', () => {
        //Arrange
        const props = {
            isOpen: true,
            onAccept: jest.fn(),
            onClose: jest.fn(),
            title: "Título dialogo",
            labels: {acceptButton: "Aceptar", closeButton: "Cancelar"},
            children: ""
        }
        //Act
        render(<ConfirmationDialogComponent {...props}/>)
        const divElement = screen.getByRole('dialog');
        //Assert
        expect(divElement).toBeInTheDocument()
    })
    it.only('should render Dialog when isOpen', () => {
        //Arrange
        const props = {
            isOpen: false,
            onAccept: jest.fn(),
            onClose: jest.fn(),
            title: "Título dialogo",
            labels: {acceptButton: "Aceptar", closeButton: "Cancelar"},
            children: ""
        }
        //Act
        render(<ConfirmationDialogComponent {...props}/>)
        const divElement = screen.queryByRole('dialog');
        //Assert
        expect(divElement).not.toBeInTheDocument()
    })
    it.only('should call onAccept when it clicks on "Aceptar"', async() => {
        //Arrange
        const onAccept = jest.fn();
        const props = {
            isOpen: true,
            onAccept,
            onClose: jest.fn(),
            title: "Título dialogo",
            labels: {acceptButton: "Aceptar", closeButton: "Cancelar"},
            children: ""
        }
        //Act
        render(<ConfirmationDialogComponent {...props}/>)

        const buttonElement = screen.getByRole('button', { name: /Aceptar/i });
        await userEvent.click(buttonElement);

        const dialogElement = screen.getByRole('dialog');
        const acceptButtonElement = within(dialogElement).getByRole('button', { name: /Aceptar/i})
        await userEvent.click(acceptButtonElement);

        //Assert
        expect(props.onAccept).toHaveBeenCalled()
    })
});
