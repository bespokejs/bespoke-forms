Function.prototype.bind = Function.prototype.bind || require('function-bind');

var bespoke = require('bespoke');
var keys = require('bespoke-keys');
var forms = require('../../lib-instrumented/bespoke-forms.js');

require('simulant/simulant');

describe("bespoke-forms", function() {

  var

    parent, deck,

    createDeck = function(innerHTML) {
      return function() {
        parent = document.createElement('article');
        for (var i = 0; i < 2; i++) {
          parent.appendChild((function() {
            var el = document.createElement('section');
            el.innerHTML = innerHTML;
            return el;
          }()));
        }

        document.body.appendChild(parent);

        return (deck = bespoke.from(parent, [
          keys(),
          forms()
        ]));
      };
    },

    removeDeck = function() {
      document.body.removeChild(parent);
    },

    right = function(selector) {
      simulant.fire(deck.slides[0].querySelector(selector), 'keydown', {
        which: 39,
        bubbles: true
      });
    };

  describe("deck.slide", function() {

    describe("'input' element", function() {

      beforeEach(createDeck('<input type="text" />'));

      it("should not go to the next slide when pressing right arrow inside input", function() {
        right('input');
        expect(deck.slide()).toBe(0);
      });

    });

    describe("'select' element", function() {

      beforeEach(createDeck('<select><option>Hello World</option></select>'));

      it("should not go to the next slide when pressing right arrow inside select", function() {
        right('select');
        expect(deck.slide()).toBe(0);
      });

    });

    describe("'textarea' element", function() {

      beforeEach(createDeck('<textarea></textarea>'));

      it("should not go to the next slide when pressing right arrow inside textarea", function() {
        right('textarea');
        expect(deck.slide()).toBe(0);
      });

    });

    describe("'contenteditable' element", function() {

      beforeEach(createDeck('<div contenteditable="true"></div>'));

      it("should not go to the next slide when pressing right arrow inside an editable element", function() {
        right('[contenteditable]');
        expect(deck.slide()).toBe(0);
      });

    });

  });

});
