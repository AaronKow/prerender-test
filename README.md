# Prerender test
With prerender, it allows to render my apps with actual DOM into the tree.

## Test results
```js
// Working
const $app = document.querySelector("#app");
render(<App />, $app);

// Not working
window.onload = () => {
    const $app = document.querySelector("#app");
    render(<App />, $app);
}

// Not working
const $app = document.querySelector("#app");
!!$app && import(/* webpackChunkName: "app" */ './App').then(module => {
    const init = module.default;
    init($app);
});
```