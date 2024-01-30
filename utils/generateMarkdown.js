var badgeLicenseURL = "https://img.shields.io/badge/License";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if (license === "Apache 2.0") {
    badge = "![Apache 2.0 licence badge](${badgeLicenseURL}-Apache_2.0-blue.svg)";
  }
  else if (license === "BSL 1.0") {
    badge = "![BSL 1.0 licence badge](${badgeLicenseURL}-BSL_1.0-orange.svg)";
  }
  else if (license === "BSD 2.0") {
    badge = "![BSD 2.0 licence badge](${badgeLicenseURL}-BSD_2.0-orange.svg)";
  }
  else if (license === "BSD 3.0") {
    badge = "![BSD 3.0 licence badge](${badgeLicenseURL}-BSD_3.0-orange.svg)";
  }
  else if (license === "CC0 1.0") {
    badge = "![CC0 1.0 licence badge](${badgeLicenseURL}-CC0_1.0-orange.svg)";
  }
  else if (license === "GPL 2.0") {
    badge = "![GPL 2.0 licence badge](${badgeLicenseURL}-GPL_2.0-blue.svg)";
  }
  else if (license === "GPL 2.1") {
    badge = "![GPL 2.1 licence badge](${badgeLicenseURL}-GPL_2.1-blue.svg)";
  }
  else if (license === "GPL 3.0") {
    badge = "![GPL 3.0 licence badge](${badgeLicenseURL}-GPL_3.0-blue.svg)";
  }
  else if (license === "Affero GPL 3.0") {
    badge = "![Affero GPL 3.0 licence badge](${badgeLicenseURL}-Affero_GPL_3.0-blue.svg)";
  }
  else if (license === "EPL 2.0") {
    badge = "![EPL 2.0 licence badge](${badgeLicenseURL}-EPL_2.0-blue.svg)";
  }
  else if (license === "MIT") {
    badge = "![MIT licence badge](${badgeLicenseURL}-MIT-green.svg)";
  }
  else if (license === "MPL 2.0") {
    badge = "![MPL 2.0 licence badge](${badgeLicenseURL}-MPL_2.0-blue.svg)";
  }
  else if (license === "The Unlicense") {
    badge = "![The Unlicense licence badge](${badgeLicenseURL}-The_Unlicense-Gray.svg)";
  }
  else if (license === "None") {
    badge = "![None licence badge](${badgeLicenseURL}-None-red.svg)";
  }
  else {
    return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";

  if (license === "Apache 2.0") {
    link = "https://opensource.org/licenses/Apache-2.0";
  }
  else if (license === "BSL 1.0") {
    link = "https://opensource.org/license/bsl-1-0/";
  }
  else if (license === "BSD 2.0") {
    link = "https://opensource.org/license/bsd-2-clause/";
  }
  else if (license === "BSD 3.0") {
    link = "https://opensource.org/license/bsd-3-clause/";
  }
  else if (license === "CC0 1.0") {
    link = "https://creativecommons.org/publicdomain/zero/1.0/legalcode";
  }
  else if (license === "GPL 2.0") {
    link = "https://opensource.org/license/bsd-2-clause/";
  }
  else if (license === "GPL 2.1") {
    link = "https://opensource.org/licenses/BSD-2-Clause";
  }
  else if (license === "GPL 3.0") {
    link = "https://opensource.org/license/bsd-3-clause/";
  }
  else if (license === "Affero GPL 3.0") {
    link = "https://www.gnu.org/licenses/agpl-3.0.html";
  }
  else if (license === "EPL 2.0") {
    link = "https://www.eclipse.org/legal/epl-2.0/";
  }
  else if (license === "MIT") {
    link = "!https://opensource.org/licenses/MIT";
  }
  else if (license === "MPL 2.0") {
    link = "https://www.mozilla.org/en-US/MPL/2.0/";
  }
  else if (license === "The Unlicense") {
    link = "http://unlicense.org/";
  }
  else {
    return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } 
  else {
    return `This application is licensed under ${license}. <${renderLicenseLink(license)}>`;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  
  // Badge
  ${renderLicenseBadge(data.License)}

  ## Description
  ${data.Description}

  ## Table of Contents
  
  - [Description](#description)
  - [Installation Instruction](#installation-instruction)
  - [Usage Information](#usage-information)
  - [License](#license)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Instructions](#test-instructions)
  - [Questions](#questions)

  ## Installation Instruction
  ${data.InstallationInstruction}

  ## Usage Information
  ${data.UsageInformation}

  ## License
  ${renderLicenseSection(data.license)};

  Click for licensing detail: ${renderLicenseLink(data.License)}

  ## Contribution Guidelines
  ${data.ContributionGuidelines}

  ## Test Instruction
  ${data.TestInstruction}

  ## Questions
  If you have any questions, please reach out on GitHub
  [${data.GithubUsername}](https://github.com/${data.GithubUsername})
  or Via Email:
  ${data.Email}
`;
}

module.exports = generateMarkdown;
