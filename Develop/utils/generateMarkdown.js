// function to generate markdown for README 
function generateMarkdown(data) {
  return `
# ${data.title}  

## Description

${data.description}
### Installaiton
${data.installation}
### Usage
* ${data.usage}
## Contributions
* ${data.contributions}
## Testing
* ${data.testing}
## Table
* ${data.Table}
## License
* ${data.License}
## Quesitons
* ${data.questions}
    

`;
}

module.exports = generateMarkdown;
console.log(generateMarkdown)