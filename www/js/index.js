/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
         this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        document.getElementById('camera').addEventListener( "click", () => {
                //hidePage('page1')
                cordova.plugins.barcodeScanner.scan(
                    function (result) {
                        alert("We got a barcode\n" +
                              "Result: " + result.text + "\n" +
                              "Format: " + result.format + "\n" +
                              "Cancelled: " + result.cancelled);
                    },
                    function (error) {
                        alert("Scanning failed: " + error);
                    },
                    {
                        preferFrontCamera : false, // iOS and Android
                        showFlipCameraButton : false, // iOS and Android
                        showTorchButton : false, // iOS and Android
                        torchOn: false, // Android, launch with the torch switched on (if available)
                        saveHistory: true, // Android, save scan history (default false)
                        prompt : "Place a barcode inside the scan area", // Android
                        resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                        formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
                        orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
                        disableAnimations : false, // iOS
                        disableSuccessBeep: true // iOS and Android
                    }
                 );
                
                // hidePage('page1');
                // showPage('page2');
            });
    }
};

function hidePage(id) {
    document.getElementById(id).setAttribute('style','display:none;');
}

function showPage(id) {
    document.getElementById(id).setAttribute('style','display:block;');
}


app.initialize();