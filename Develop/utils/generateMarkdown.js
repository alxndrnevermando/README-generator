// function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}
  
  ##### Table of Contents  
  * [Description](#description)  
  * [Installation](#installation)
  * [Usage](#usage)  
  * [License](#license)  
  * [Contributions](#contributor)  
  * [Test](#github)  
  * [Questions](#questions)  


  ## Description
  ${response.description}

  ## Installation
  ${response.installation}

  ## Usage
  ${response.usage}

  ## License
  ${response.license}

  ## Contributions
  ${response.contributor}

  ## Test
  ${response.test}

  ## Questions
  Any questions? Reach out to me:
  ## Github
  https://github.com/${response.github}
  ## Email
  ${response.email}

`;
}

module.exports = generateMarkdown;
