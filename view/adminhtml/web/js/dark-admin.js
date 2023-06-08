/**
 * @author Gtstudio
 * @copyright Copyright (c) 2023 Gtstudio
 */

require([
    'jquery',
    'darkmode-js',
], function ($, Darkmode) {
    'use strict';

    $(function () {
        const options = {
            bottom: '64px', // default: '32px'
            time: '0.5s', // default: '0.3s'
            mixColor: '#fff', // default: '#fff'
            backgroundColor: '#fff',  // default: '#fff'
            buttonColorDark: '#100f2c',  // default: '#100f2c'
            buttonColorLight: '#fff', // default: '#fff'
            saveInCookies: true, // default: true,
            label: '🌓', // default: ''
            autoMatchOsTheme: true // default: true
        }
        new Darkmode(options).showWidget();
    })
});