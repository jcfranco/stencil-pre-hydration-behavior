# stencil-pre-hydration-behavior

This repo showcases the differences setting props vs attributes before the component is highlighted.

Before hydration, setting a component's attribute gets parsed and its corresponding property is set properly based on the type. This does not work the other way when setting properties as attributes are not reflected.

## To start

1. run `npm start`
2. open the browser console and see how the initial values got parsed differently depending on whether an attribute vs property was set