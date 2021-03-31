/* tslint:disable:no-unused-variable */
import { ServicesComponent } from './services.component';
import { AuthService } from "./authservice";

describe('Component: ServiceSpyOn', () => {

    let component: ServicesComponent;
    let service: AuthService;
    let spy: any;

    beforeEach(() => {
        service = new AuthService();
        component = new ServicesComponent(service);
    });

    afterEach(() => {
        service = null;
        component = null;
    });


    it('needsLogin returns true when the user has not been authenticated', () => {
        spy = spyOn(service, 'isAuthenticated').and.returnValue(false);
        expect(component.needsLogin()).toBeTruthy();
        expect(service.isAuthenticated).toHaveBeenCalled();

    });

    it('needsLogin when returns false when the user has been authenticated', () => {
        spy = spyOn(service, 'isAuthenticated').and.returnValue(true);
        expect(component.needsLogin()).toBeFalsy();
        expect(service.isAuthenticated).toHaveBeenCalled();
    });
});
