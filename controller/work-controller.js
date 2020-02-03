const fetch = require("cross-fetch");

/**
 * GET ALL PUBLIC REPOS FOR YOUR GITHUB
 * 
 * @param {*} req 
 * @param {*} res
 * @param {public} visibility 
 */
const handleWorkUi = (req, res) => {
  const url = "https://api.github.com/users/VishnuRaghavan/repos?visibility=public";
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `token ${process.env.GIT_TOKEN}` 
    }})
    .then(data => {
      data.json()
        .then(data => {
          const result = data.map(x => {
            return {
              fullName: x.full_name.split('/')[1],
              description: x.description,
              url: x.html_url,
              language: x.language
            };
          });

          //render the View
          res.render('work', {title: 'WORK', repos: result});
        })
        .catch(err => console.log(err));
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = handleWorkUi;
