// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if (license !== 'None'){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
   }
   return null;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None'){
    return `[License Link Provided Here](#license)`;
   }
   return null;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None'){
    return `## License\nThis project is licensed under the ${license} license.\n`;
   }
   return null;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}\n
  ## Table of Contents
  [Installation](#installation)\n
  [Usage](#usage)\n
  [Contributing](#contributing)\n
  [Test](#tests)\n
  ## Installation
  ${data.installation}\n
  ## Usage
  ${data.usage}\n
  ${renderLicenseSection(data.license)}\n
  ${renderLicenseLink(data.license)}\n
  ## Contributing
  ${data.contributing}\n
  ## Tests
  ${data.test}\n
  ## Questions
  If you have further questions, please contact me:\n
  GitHub: https://github.com/${data.username}\n
  Email: ${data.email}


`;
}

module.exports = generateMarkdown;
