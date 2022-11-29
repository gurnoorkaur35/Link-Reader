const axios = require('axios');

axios
    .get('https://www.linkedin.com/jobs/search/?currentJobId=3358878332&keywords=software%20engineer&originalSubdomain=in , https://www.linkedin.com/jobs/search/?currentJobId=3349899220&keywords=software%20engineer&originalSubdomain=in')
    .then((response) => {
        //HTML content is stored in the data-field
        console.log(response.data)
    })
    .catch((error) => {
        console.error(error)
    });