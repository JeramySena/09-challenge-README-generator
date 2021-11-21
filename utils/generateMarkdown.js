// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
    ![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)
    `;
  } else {
    return ' ';
  }
}

 // (https://opensource.org/licenses/ISC)
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
  return `
  [${license}(https://opensource.org/licenses/ISC})
  `;
} else {
  return ' ';
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## ${data.title}
  ## ${data.aboutProject}
  ## ${data.howInstall}
  ## ${data.projestUse}
  ## ${data.features}
  ## ${data.contributors}
  ## ${renderLicenseBadge(data.license)}
  ## ${renderLicenseLink(data.license)}
  ## ${renderLicenseSection(data.license)}
  ## ${data.link}
  `;
}

// module.export line here
module.exports = generateMarkdown;
