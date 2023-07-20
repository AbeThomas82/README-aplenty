function renderLicenseBadge(license) {
   if (license !== 'None'){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
   }
   return null;
}

function renderLicenseLink(license) {
  if (license !== 'None'){
    return `[License Link Provided Here](#license)`;
   }
   return null;
}

function renderLicenseSection(license) {
  if (license !== 'None'){
    return `## License\nThis project is licensed under the ${license} license.\n`;
   }
   return null;
}

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
