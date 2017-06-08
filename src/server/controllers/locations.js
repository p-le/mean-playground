module.exports.homeList = (req, res) => {
  res.render('index', {
    title: 'Home'
  });
};

module.exports.locationInfo = (req, res) => {
  res.render('index', {
    title: 'Location Info'
  });
};

module.exports.addReview = (req, res) => {
  res.render('index', {
    title: 'Add Review'
  });
};