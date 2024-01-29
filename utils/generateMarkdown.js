var baseURL = "https://img.shields.io/badge/License";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if (license === "Apache 2.0") {
    badge = "![Apache 2.0 licence badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  }
  else if (license === "Boost 1.0") {
    badge = "![Boost 1.0 licence badge](https://img.shields.io/badge/License-Boost_1.0-orange.svg)";
  }
  else if (license === "BSD 2.0") {
    badge = "![BSD 2.0 licence badge](https://img.shields.io/badge/License-BSD_2.0-orange.svg)";
  }
  else if (license === "BSD 3.0") {
    badge = "![BSD 3.0 licence badge](https://img.shields.io/badge/License-BSD_3.0-orange.svg)";
  }
  else if (license === "CCZ 1.0") {
    badge = "![CCZ 1.0 licence badge](https://img.shields.io/badge/License-CCZ_1.0-orange.svg)";
  }
  else if (license === "Boost 1.0") {
    badge = "![Boost 1.0 licence badge](https://img.shields.io/badge/License-Boost_1.0-orange.svg)";
  }
  else if (license === "GPL 2.0") {
    badge = "![GPL 2.0 licence badge](https://img.shields.io/badge/License-GPL_2.0-blue.svg)";
  }
  else if (license === "GPL 2.1") {
    badge = "![GPL 2.1 licence badge](https://img.shields.io/badge/License-GPL_2.1-blue.svg)";
  }
  else if (license === "GPL 3.0") {
    badge = "![GPL 3.0 licence badge](https://img.shields.io/badge/License-GPL_3.0-blue.svg)";
  }
  else if (license === "Affero GPL 3.0") {
    badge = "![Affero GPL 3.0 licence badge](https://img.shields.io/badge/License-Affero_GPL_3.0-blue.svg)";
  }
  else if (license === "EPL 2.0") {
    badge = "![EPL 2.0 licence badge](https://img.shields.io/badge/License-EPL_2.0-blue.svg)";
  }
  else if (license === "MIT") {
    badge = "![MIT licence badge](https://img.shields.io/badge/License-MIT-green.svg)";
  }
  else if (license === "MPL 2.0") {
    badge = "![MPL 2.0 licence badge](https://img.shields.io/badge/License-MPL_2.0-blue.svg)";
  }
  else if (license === "The Unlicense") {
    badge = "![The Unlicense licence badge](https://img.shields.io/badge/License-The_Unlicense-Gray.svg)";
  }
  else if (license === "None") {
    badge = "![None licence badge](https://img.shields.io/badge/License-None-red.svg)";
  }
  else {
    return badge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
