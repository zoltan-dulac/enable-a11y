

'use strict'

/*******************************************************************************
* radiogroup.js - Enable Custom Radiogroup
* 
* Written by Zoltan Hawryluk <zoltan.dulac@gmail.com>
* Part of the Enable accessible component library.
* Version 1.0 released December 27, 2021
*
* More information about this script available at:
* https://www.useragentman.com/enable/radiogroup.php
* 
* Released under the MIT License.
******************************************************************************/

import accessibility from '../libs/accessibility-js-routines/dist/accessibility.module.js';

const radiogroup = new function () {

    this.init = function () {
        this.radioGroupEls = document.querySelectorAll('.enable-custom-radiogroup');

        for (let i=0; i<this.radioGroupEls.length; i++) {
            accessibility.initGroup(
                this.radioGroupEls[i],
                {
                    doKeyChecking: true,
                    activatedEventName: 'enable-checked',
                    deactivatedEventName: 'enable-unchecked'
                }
            );
        }

    }
}
radiogroup.init();

export default radiogroup;