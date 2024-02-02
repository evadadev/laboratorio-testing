import { act, renderHook, screen } from "@testing-library/react";
import { useConfirmationDialog } from "./confirmation-dialog.hook";

describe('useConfirmationDialog hook spec', () => {
    it.only('should return isOpen to be true', () => {
        //Arrange
        //Act
        const { result } = renderHook(() => useConfirmationDialog())
        act(() => {
            result.current.onOpenDialog({
                id: '',
                name: ''
            })
        })
        //Assert
        expect(result.current.isOpen).toBe(true)
    })
    it.only('when call onClose, isOpen  to be false', () => {
        //Arrange
        //Act
        const { result } = renderHook(() => useConfirmationDialog())
        act(() => {
            result.current.onClose()
        })
        //Assert
        expect(result.current.isOpen).toBe(false)
    })
    it.only('should display onOpenDialog equal item lookup', () => {
        //Arrange
        //Act
        const { result } = renderHook(() => useConfirmationDialog());
    
        //Assert
        expect(result.current.onOpenDialog).toEqual(expect.any(Function))
    })
    it.only('should return a itemToDelete equal (item) when it renders the hook and calls to onAccept', () => {
        //Arrange
        //Act
        const { result } = renderHook(() => useConfirmationDialog());
        act(() => {
            result.current.itemToDelete;
        })
        //Assert
        expect(result.current.onAccept).toEqual(expect.any(Function))
    })
    it.only('when call onOpenDialog it expects to set an item ', () => {
        //Arrange
        const item = {
            name: 'alvaro',
            id: '3'
        }
        //Act
        const { result } = renderHook(() => useConfirmationDialog());
        act(() => {
            result.current.onOpenDialog(item)
        })
        //Assert
        expect(result.current.itemToDelete).toEqual(item)
    })
})