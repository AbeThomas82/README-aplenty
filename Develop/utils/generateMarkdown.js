//This given function accesses badges from the Shields.io site
function renderLicenseBadge(license) {
   if (license !== 'None'){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
   }
   return '';//Returns no value in case there is no license
}
//This given function links you to the license section
function renderLicenseLink(license) {
  if (license !== 'None'){
    return `\n[License Link](#license)\n`;
   }
   return '';//Returns no value in case there is no license
}

function renderLicenseSection(license) {
  if (license !== 'None'){
    return `## License\nThis project uses the ${license} license.\n`;
   }
   return '';//Returns no value in case there is no license
}

function generateMarkdown(data) {//Populates info from user input and creates license badges if used 
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
  [ScreenCastify Link](https://drive.google.com/file/d/1KXj2s56mgfsmS7p6gSUYnPx1pyJPDsZp/view)\n
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

module.exports = generateMarkdown;//Provides whole file to index.js if imported
