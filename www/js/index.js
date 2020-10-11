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
            document.getElementById('body').setAttribute('style','background-color:transparent;')
            hidePage('page1')
            QRScanner.prepare(onDone); // show the prompt
                function onDone(err, status){
                    if (err) {                
                        console.error(err);
                    }
                    if (status.authorized) {
                        function displayContents(err, text){
                            if(err){
                                alert('received event')
                                // an error occurred, or the scan was canceled (error code `6`)
                            } else {
                                // The scan completed, display the contents of the QR code:
                                document.getElementById('body').setAttribute('style','background-color:#252525;')
                                showPage('page1')
                                alert(text);
                            }
                        }
                        QRScanner.scan(displayContents);
                        QRScanner.show()
                    } else if (status.denied) {
                        QRScanner.openSettings()
                    } else {
                        QRScanner.openSettings()
                    }
                }

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