const ejs = require('ejs');

const template = `
<!DOCTYPE html>
<html>
<head>
  <title>My EJS Template</title>
</head>
<body>
  <h1>Hello, <%= name %>!</h1>
</body>
</html>
`;

const renderedTemplate = ejs.render(template, { name: 'World' });

console.log(renderedTemplate);
