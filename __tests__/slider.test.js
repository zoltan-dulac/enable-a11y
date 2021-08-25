/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
const simulant = require('simulant');
const html = fs.readFileSync(path.resolve(__dirname, '../tmp/32-slider.php'), 'utf8');
const interpolate = require('../js/shared/interpolate');
const accessibility = require('../js/accessibility.js');
const enableSliders = require('../js/enable-slider.js');
const visibleOnFocus = require('../js/shared/enable-visible-on-focus.js');

/**
 * keyCodes() is an object to contain key code values for the application
 */
const keyCodes = new function() {
    // Define values for keycodes
    this.backspace = 8;
    this.tab = 9;
    this.enter = 13;
    this.esc = 27;
  
    this.space = 32;
    this.pageup = 33;
    this.pagedown = 34;
    this.end = 35;
    this.home = 36;
  
    this.left = 37;
    this.up = 38;
    this.right = 39;
    this.down = 40;
  } // end keyCodes

function getSliderValue(el) {
    return parseInt(el.getAttribute('aria-valuenow'));
}

jest
    .dontMock('fs');

describe('slider', function () {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        window.interpolate = interpolate;
        enableSliders.init();
    });

    afterEach(() => {
        // restore the original func after test
        jest.resetModules();
    });

    it('slider exists', function () {
        const sr1 = document.getElementById('sr1');
        const inc = parseInt(sr1.dataset.inc);
        const sliderEl = sr1.querySelector('[role="slider"]');

        const initialVal = getSliderValue(sliderEl);
        simulant.fire(sliderEl, 'keydown', {
            keyCode: keyCodes.enter
        });

        simulant.fire(sliderEl, 'keydown', {
            keyCode: keyCodes.left
        });

        expect(getSliderValue(sliderEl) === initialVal - inc);

        
        simulant.fire(sliderEl, 'keydown', {
            keyCode: keyCodes.home
        });

        expect(getSliderValue(sliderEl) === parseInt(sr1.dataset.min));

    });
});

