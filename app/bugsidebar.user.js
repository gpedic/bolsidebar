/*
 Copyright (c) 2012 Goran Pedić

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

// ==UserScript==
// @name           BugSidebar
// @version        0.9.6
// @description    Sidebar sa aktivnim temama za BOL forum.
// @namespace      http://www.bug.hr/forum/
// @match          http://www.bug.hr/forum/*
// @include        http://www.bug.hr/forum/*
// @exclude        http://www.bug.hr/forum/login/*
// @exclude        http://www.bug.hr/forum/newpost/*
// @author         drnde (http://www.bug.hr/forum/user/drnde/6251.aspx)
// ==/UserScript==

// Load default sidebar configuration settings
//= require "../config/defaults"

// Load sidebar app
//= require "lib/libs"
//= require "models/models"
//= require "controllers/controllers"
//= require "lib/router"
//= require "helpers/helpers"
//= require "assets/assets"
//= require "views/views"

// Set up the main scheduler and init sidebar
//= require "../config/initializers/scheduler"

