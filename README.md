# Web Platform Prototype

The file structure is based on [NextJS](http://nextjs.org/). New routes are added in the `/routes` directory with anything in [] treated as a dynamic parameter. ie: wattpad.com/12345 would be handled by `/routes/[partId].js` and the value of `partId` is exposed as a variable within that controller.

