import {ServicesComponent} from './services.component';
import {AuthService} from "./authservice";


class MockAuthService {
	authenticated = false;

	isAuthenticated() {
		return this.authenticated;
	}
}

describe('Component: LoginMock', () => {

	let component: ServicesComponent;
	let service: MockAuthService;

	beforeEach(() => {
		service = new MockAuthService();
		component = new ServicesComponent(service);
	});

	afterEach(() => {
		service = null;
		component = null;
	});


	it('needsLogin returns true when the user has not been authenticated', () => {
		service.authenticated = false;
		expect(component.needsLogin()).toBeTruthy();
	});

	it('needsLogin returns false when the user has been authenticated', () => {
		service.authenticated = true;
		expect(component.needsLogin()).toBeFalsy();
	});
});

