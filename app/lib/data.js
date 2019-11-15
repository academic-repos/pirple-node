"use strict";
/**
 * Library for storing and editing data
 */

// Dependencies 
const fs = require("fs");
const path = require("path");
const helpers = require('./helpers');

// Container for the module to be exported
var lib = {};
// Base directory
lib.baseDir = path.join(__dirname, '/../.data/');
// lib.baseDir
// Write data to a file
lib.create = function (dir, filename, data, cb) {
    // Open the file for writing
    fs.open("" + lib.baseDir + dir + "/" + filename + ".json", 'wx', function (err, fd) {
        if (!err && fd) {
            // Convert data to string
            var stringData = JSON.stringify(data);
            // Write to file and close it
            fs.writeFile(fd, stringData, function (err) {
                if (!err) {
                    fs.close(fd, function (err) {
                        if (!err) {
                            cb(false);
                        }
                        else {
                            cb('Error closing new file');
                        }
                    });
                }
                else {
                    cb('Error writing to new file');
                }
            });
        }
        else {
            cb('Could not create new file, it may already exist');
        }
    });
};

// Read data from a file
/**
 * read returns an error if the file doesn't exist. Which means one should be created first.
 */
lib.read = function(dir, file, callback) {
    fs.readFile(lib.baseDir+dir+'/'+file+'.json', 'utf8', function(err, data) {
        if (!err && data) {
            const parsedData = helpers.parseJsonToObject(data);
            callback(err, parsedData);
        } else {
            callback(err, data);
        }
    });
}

// Update data inside a file 
lib.update = function(dir, file, data, callback) {
    // Open the file for writing
    fs.open(lib.baseDir+dir+'/'+file+'.json', 'r+', function(err, fileDescriptor) {
        if (!err && fileDescriptor) { 
            const stringData = JSON.stringify(data);
            // Truncate the file
            fs.truncate(fileDescriptor, (err) => {
                if (!err) {
                    // Write to the file and close it
                    fs.writeFile(fileDescriptor, stringData, (err) => {
                        if (!err) {
                            fs.close(fileDescriptor, err => {
                                if (!err) {
                                    callback(false);
                                } else {
                                    callback('Error closing the file');
                                }
                            });
                        } else {
                            callback('Error writing to existing file');
                        }
                    })
                } else {
                    callback('Error truncating file');
                }
            });


        } else {
            callback('Could not open the file for updatingm, it may not exist yet.')
        }
    })
}

// Delete data file
lib.delete = function(dir, file, callback) {
    // Unlink the file
    fs.unlink(lib.baseDir+dir+'/'+file+'.json', function(err) {
        if (!err) {
            callback(false)
        } else {
            callback('Error deleting file');
        }
    })

};

// Export the module
module.exports = lib;