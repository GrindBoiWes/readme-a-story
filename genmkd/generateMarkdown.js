// This function renders the license badge by using the links provided
function renderLicenseBadge(license) {
    if (license === 'MIT') {
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    } else if (license === 'ISC') {
      return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
    } else if (license === 'Apache 2.0') {
      return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    } else if (license === 'Mozilla') {
      return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
    } else {
      return ``;
    }
  };
  
  // This function will get the response from the rendeLicenseBadge, and then return the correct response.
  function renderLicenseLink(license) {
    if (license === 'MIT') {
        return 'MIT';
    } else if (license === 'ISC') {
        return 'ISC';
     } else if (license === 'Apache 2.0') {
        return 'Apache 2.0';
     } else if (license === 'Mozilla') {
        return 'Mozilla';
     } else {
        return '';
     }
  };
  
  // This function will render the license section of the readme from the selected information.
  function renderLicenseSection(license) {
    if (license) {
      return `
      License
      This repository is licensed by the ${renderLicenseLink(license)} license.
      `
    } else {
      return '';
    }
  }
  
  // This function generates the markdown for the readme file
  function generateMarkdown(data) {
  
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseSection = renderLicenseSection(data.license);
    const githubLink = `[${data.github}](https://github.com/${data.github})`;
  
    const tableOfContents = data.tableOfContents
      ? data.tableOfContents.split(",").map((item) => `-${item.trim()}`).join('\n') : "n/a";
    
    return `
## ${data.title}
${licenseBadge}
  
## Description
${data.description}
  
## Table of Contents
 * [Installation](#installation)
 * [Usage](#usage)
 * [License](#license)
 * [Contributions](#contributions)
 * [Tests](#tests)
 * [Questions](#questions)
    
## Installation
${data.installation}
  
## Usage 
${data.usage}

## License
${licenseSection}
  
## Contributions
${data.contributions}
  
## Test
${data.test}
  
## Questions
If you have any further questions, feel free to reach out to me at ${data.email}. You can also view my Github profile for all of my projects : ${data.github}.`;
}
  
  module.exports = generateMarkdown;