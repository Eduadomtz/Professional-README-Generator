// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.tittle}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.use}

  ## License
  ${data.license}

  ## How to Contribute
  ${data.contribute}

  ## Tests
  ${data.test}
  
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email} You can find more of my work at https://github.com/${data.GitHub}`;
}

module.exports = generateMarkdown;
