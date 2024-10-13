/* GET 'about' page */
const about = function(req, res) {
    res.render('generic-text', {
      title: 'About SHOPEASE',
      content: "For shopping like yours, my wallet doesn’t mind—it’s always ready for the best finds!.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem ac nisi dignissim accumsan. Nullam sit amet interdum magna. Morbi quis faucibus nisi. Vestibulum mollis purus quis eros adipiscing tristique. Proin posuere semper tellus, id placerat augue dapibus ornare. Aenean leo metus, tempus in nisl eget, accumsan interdum dui. Pellentesque sollicitudin volutpat ullamcorper."
    });
  };
  
    module.exports = {
        about
      };