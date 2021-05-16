const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// serialize url
console.log(myUrl.href);
console.log(myUrl.toString());

// host
console.log(myUrl.host);

// hostname 
console.log(myUrl.hostname);

// path name
console.log(myUrl.pathname);

// serialized query
console.log(myUrl.search);

// params obj
console.log(myUrl.searchParams);

// add param
myUrl.searchParams.append('foo', 'bar');
console.log(myUrl.searchParams);

// loop params
myUrl.searchParams.forEach((value, name) => {
    console.log(`${name}: ${value}`);
});
