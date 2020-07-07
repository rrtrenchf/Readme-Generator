var inquirer = require("inquirer")
var fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user
const questions = ["What is the title?", "What is the description?","Installation", "Usage","Contribution guidelines" ,"Testing Instructions", "Add your table of Contents", "License", "Questions"

];
inquirer.prompt([{
    type: "input",
    name: "title",
    message: questions[0]
},
{
    type: "input",
    name: "description",
    message: questions[1]



},
{   type: "input",
    name: "installation",
    message: questions[2]

},
{   type: "input",
    name: "usage",
    message: questions[3]

},
{
    type: "input",
    name: "contributions",
    message: questions[4],
},  
{
    type: "input",
    name:"testing",
    message: questions[5]
},
{
    type: "input",
    name:"Table",
    message: questions[6]

},
{
    type: "list",
    name: "License",
    message: questions[7],
    choices: ["Permissive", "Public domain", "Proprietary.",]
},
{
    type: "input",
    name: "questions",
    message: questions[8],
    
            

},
]

).then (writeToFile)


// function to write README file
function writeToFile (data) {
        var filename = "READMEHW.md"
        const answers =generateMarkdown(data)
        
      
        fs.writeFile(filename, answers, function(err) {
      
          if (err) {
            return console.log(err);
          }
      
          console.log("Success!");
      
        });
      
    
    
    
}


// function to initialize program
function init() {
   

}

// function call to initialize program
init();
