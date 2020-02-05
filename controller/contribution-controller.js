const fetch = require("cross-fetch");

/**
 * GET ALL STARRED REPOS OF YOUR GITHUB 
 * 
 * @param {*} req 
 * @param {*} res 
 */
const handleContriUi = (req, res) => {
  const url = "https://api.github.com/users/VishnuRaghavan/starred?username=VishnuRaghavan";
  fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    }})
    .then(data => {
      data.json()
        .then(data => {

          const result = data.map(x => {
            return {
              fullName: x.full_name.split('/')[1],
              description: x.description,
              url: `${x.html_url}/graphs/contributors`,
              language: x.language
            };
          });

          //render the View
          res.render('contribution', {title: 'CONTRIBUTIONS', repos: result});
        })
        .catch(err => console.log(err));
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = handleContriUi;
