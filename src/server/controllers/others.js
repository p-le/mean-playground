module.exports.index = (req, res) => {
  res.render('index', {
    title: 'Express'
  })
};

module.exports.about = (req, res) => {
  res.render('index', {
    title: 'About'
  })
}