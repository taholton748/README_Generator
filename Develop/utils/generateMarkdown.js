// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseLink = renderLicenseLink(license);
  return `[![License Badge](https://img.shields.io/badge/license-${license}-blue)](${licenseLink})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://choosealicense.com/licenses/mit/`;
  } else if (license === "Apache") {
    return `https://choosealicense.com/licenses/apache-2.0/`;
  } else {
    return `https://choosealicense.com/licenses/mpl-2.0/`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseLink = renderLicenseLink(data.license);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description} <hr>
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions) 
  * [License](#license) <hr>
  

  ## Installation
  ${data.installation} <hr>

  ## Usage
  ${data.usage} <hr>

  ## Contributing
  ${data.contribution} <hr>

  ## Tests
  ${data.tests} <hr>

  ## Questions
  <strong>${data.name}</strong>

  GitHub: https://github.com/${data.username}
  
  E-mail: ${data.email} <hr>
  
  ## License
  Licensed under the [${data.license}](${licenseLink}) license.
`;
}

module.exports = generateMarkdown;
