# Test React App (Moca)

## Describe / It / Expect
- Use "describe" to group together similar tests
- Use "it" to test a single attribute of a target (Is that show the text)
- Use "expect" to make an assertion about a target (I might assume the target is right)

```js
describe('Test App Component', () => {
 
    it("Show the correct Text", () => {

        expect()
		});
```

### Expect
- expect - (The thing we want to make an assertion about).
- Assertion matcher - how to compare the two given value 
- (The value we expect)

```js
expect(component).to.have.class('comment-box')
```
- Create a instacne of Component
```js
 const component = renderComponent(App);
```

## Testing Error 
Make a new file in your projects root folder called .babelrc and add the following to it:
```
{
 "presets": ["react", "es2015", "stage-1"]
}
```