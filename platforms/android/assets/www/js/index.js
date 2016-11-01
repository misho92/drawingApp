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
        //listener for the draw button
        document.getElementById("draw").addEventListener("click", this.generate, false);
    },

    //redirecting to another html file on clicking the draw button
    generate: function generate(){
        var e = document.getElementById("sky");
        var sky = e.options[e.selectedIndex].text;
        e = document.getElementById("sun");
        var sun = e.options[e.selectedIndex].text;
        e = document.getElementById("house");
        var house = e.options[e.selectedIndex].text;
        e = document.getElementById("child");
        var child = e.options[e.selectedIndex].text;
        e = document.getElementById("parents");
        var parents = e.options[e.selectedIndex].text;

        //pass data to the other html page
        sessionStorage.setItem("sky", sky)
        sessionStorage.setItem("sun", sun)
        sessionStorage.setItem("house", house)
        sessionStorage.setItem("child", child)
        sessionStorage.setItem("parents", parents)
        window.location = "drawing.html";
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
        var parentElement = document.getElementById(id);
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');

        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();