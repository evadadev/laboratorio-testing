import { mapProjectFromApiToVm } from './project.mapper';

describe('proyect.mapper spec', () => {
    it('mapProjectFromApiToVm should map an proyect from API to VM', () => {
        //Arrange
        const proyect = {
            id: '1',
            name: 'Raul',
            externalId: 'user1',
            isActive: true,
            employees: []
        }
        //Act
        const result = mapProjectFromApiToVm(proyect)
        //Assert
        expect(result).toEqual(proyect)
    });
    it('mapProjectFromApiToVm should return empty project when is null or undefined', () => {
        //Arrange
        const proyect = {
            id: '',
            name: '',
            externalId: '',
            comments: '',
            isActive: false,
            employees: [],
        }
        //Act
        const result = mapProjectFromApiToVm(null)
        //Assert
        expect(result).toEqual(proyect)
    });
    it('mapProjectFromApiToVm should return  project with employees', () => {
        //Arrange
        const proyect = {
            id: '2',
            name: 'Maria',
            externalId: 'User2',
            isActive: false,
            employees: [{
                id: '123',
                isAssigned: true,
                employeeName: 'Maria',
            }],
        }
        //Act
        const result = mapProjectFromApiToVm(proyect)
        //Assert
        expect(result).toEqual(proyect)
    });

});
