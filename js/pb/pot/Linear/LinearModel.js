// Copyright 2012 Armagan Amcalar. All Rights Reserved.
//
// This file is part of Pedalboard.js.
//
// Pedalboard.js is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Pedalboard.js is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Pedalboard.js.  If not, see <http://www.gnu.org/licenses/>.

/**
 * @fileoverview Linear pot component model.
 */


goog.provide('pb.pot.LinearModel');
goog.require('pb.pot.PotModel');



/**
 * Linear model provides a potentiometer behavior similar to real world linear potentiometers.
 *
 * @constructor
 * @extends {pb.pot.PotModel}
 * @inheritDoc
 */
pb.pot.LinearModel = function(param, name, range) {
    goog.base(this, param, name, range);
};
goog.inherits(pb.pot.LinearModel, pb.pot.PotModel);
