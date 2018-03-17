# Test React App (Moca)

## Describe / It / Expect
- Use "describe" to group together similar tests
- Use "it" to test a single attribute of a target (Is that show the text)
- Use "expect" to make an 
 about a target (I might assume the target is right)

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

# Chai jQuery
[documentation](https://github.com/chaijs/chai-jquery)

### exist
Assert that the selection is not empty. Note that this overrides the built-in chai assertion. If the object asserted against is not a jQuery object, the original implementation will be called.

```js
$('#exists').should.exist;
expect($('#nonexistent')).not.to.exist;
```


# beforeEach()
- Set up to the component, run before any of each statements
- We need to declare component as a constructor using let
```js
let component;

beforeEach(() => {
    component = renderComponent(CommentBox);
})
```

## Test for the Render Component
- In App Component to test if there is Comment Component class
```js
    it('has CommentBox component',() => {
        expect(component.find('.comment-box')).to.exist;
    });
```

## Test the textarea
- Nest the "it" for the relative situation

```js
describe('entering some text', () => {

    it('shows that text in the textarea', () => {

    });

    it('when submitted, clear the input', () => {

    });
```

## Stimulation
- Stimulate Situation
```js
beforeEach(() => {
    component.find('textarea').simulate('change','new comment');
});
```
- Stimulate Behaviors (Submit Event)
- Replace the div to form
```js

```