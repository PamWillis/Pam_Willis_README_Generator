
//function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(badge) {
console.log(badge);
  switch (badge) {
    case 'Unlicensed':
      return "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";

    case 'Apache':
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";

    case 'Boost':
      return "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";

    case 'The MIT License':
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";

    case 'BSD 2-Clause License':
      return "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)";

    case 'BSD 3-Clause License':
      return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";

    case 'Creative Commons 1.0':
      return "![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)";

    case 'Eclipse Public License 1.0':
      return "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)";

    case 'Eclipse Public License 1.0':
      return "![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)";

    case 'GNU GPL v3':
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";

    case 'GNU GPL v2':
      return "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)";

    case 'Mozilla Public License 2.0':
      return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";

  }
}

function renderLicenseLink(link) {

  switch (link) {
    case 'Unlicensed':
      return "";

    case 'Apache':
      return "https://opensource.org/licenses/Apache-2.0";

    case 'Boost':
      return "https://www.boost.org/LICENSE_1_0.txt";

    case 'The MIT License':
      return "https://opensource.org/licenses/MIT";

    case 'BSD 2-Clause License':
      return "https://opensource.org/licenses/BSD-2-Clause";

    case 'BSD 3-Clause License':
      return "https://opensource.org/licenses/BSD-3-Clause";

    case 'Creative Commons 1.0':
      return "http://creativecommons.org/publicdomain/zero/1.0/";

    case 'Eclipse Public License 1.0':
      return "https://opensource.org/licenses/EPL-1.0";

    case 'Eclipse Public License 1.0':
      return "https://www.gnu.org/licenses/agpl-3.0";

    case 'GNU GPL v3':
      return "https://www.gnu.org/licenses/gpl-3.0";

    case 'GNU GPL v2':
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";

    case 'Mozilla Public License 2.0':
      return "https://opensource.org/licenses/MPL-2.0";


  }
}

//function to generate markdown for README
function generateMarkdown(data) {
  return `
## <span style="color: Yellow; font-size: 2.75rem;">${data.title}</span>  
${renderLicenseBadge(data.license)}

# Description
    - ${data.motivation}
    - ${data.why}
    - ${data.what}
    - ${data.learn}  

## &nbsp;&nbsp;&nbsp;  Installation  
    ${data.installation}

## &nbsp;&nbsp;&nbsp;  Usage  
    ${data.usage}

## &nbsp;&nbsp;&nbsp;  Contributing  
    ${data.contributing}

## &nbsp;&nbsp;&nbsp;  Tests  
    ${data.tests}

# Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

# License
${data.license}  ${renderLicenseLink(data.license)}

# Questions
please contact me with any questions:  
GitHub: https://github.com/${data.github}  
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
