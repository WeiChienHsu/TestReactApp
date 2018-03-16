import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use "describe" to group together similar tests
describe('App', () => {

    // Use "it" to test a single attribute of a target (Is that show the text)
    it("Show the correct Text", () => {

        // Create an instance of App
        const component = renderComponent(App);

        // Use "expect" to make an assertion about a target (I might assume the target is right)
        expect(component).to.contain('React simple');
    });

});

