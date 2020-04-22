# cpuse

CPU Usage

Usage:

```js
const cpuse = require('cpuse')

//This returns Array with CPUs uses
cpuse.usage(/* you can use here callback */)
.then(/* you can use promise */)

//This returns average value of CPUs usages in string + % sign
cpuse.usageAvg().then(/* also */)
```

Example:

```js
const cpuse = require('cpuse')

//Average usage
cpuse.usageAvg().then(console.log)
//usages array
cpuse.usage().then(console.log)
```