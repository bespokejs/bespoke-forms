module.exports = function() {
  return function(deck) {
    var acceptsInput = function(element) {
      return ('disabled' in element) || element.contentEditable === 'true';
    };

    deck.parent.addEventListener('keydown', function(e) {
      if (acceptsInput(e.target)) {
        e.stopPropagation();
      }
    });
  };
};
