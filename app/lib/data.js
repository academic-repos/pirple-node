"use strict";
/**
 * Library for storing and editing data
 */

// Dependencies 
const fs = require("fs");
const path = require("path");
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
                    fs_1.default.close(fd, function (err) {
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
lib.read = function(dir, file, callback) {
    fs.readFile(lib.baseDir+dir+'/'+file+'.json', 'utf8', function(err, data) {
        callback(err, data)
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
exports.default = lib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHOzs7OztBQUVILGdCQUFnQjtBQUNoQiwwQ0FBb0I7QUFDcEIsOENBQXdCO0FBRXhCLDBDQUEwQztBQUMxQyxJQUFNLEdBQUcsR0FHTCxFQUFFLENBQUM7QUFFUCxpQkFBaUI7QUFDakIsR0FBRyxDQUFDLE9BQU8sR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUVqRCxjQUFjO0FBRWQsdUJBQXVCO0FBQ3ZCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsVUFBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFO0lBQ2pDLDRCQUE0QjtJQUM1QixZQUFFLENBQUMsSUFBSSxDQUFDLEtBQUcsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLFNBQUksUUFBUSxVQUFPLEVBQUUsSUFBSSxFQUFFLFVBQUMsR0FBRyxFQUFFLEVBQUU7UUFDM0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUU7WUFDWix5QkFBeUI7WUFDekIsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4Qyw2QkFBNkI7WUFDN0IsWUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQUEsR0FBRztnQkFDNUIsSUFBSSxDQUFDLEdBQUcsRUFBRTtvQkFDTixZQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxVQUFBLEdBQUc7d0JBQ1osSUFBSSxDQUFDLEdBQUcsRUFBRTs0QkFDTixFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQ2I7NkJBQU07NEJBQ0gsRUFBRSxDQUFDLHdCQUF3QixDQUFDLENBQUE7eUJBQy9CO29CQUNMLENBQUMsQ0FBQyxDQUFBO2lCQUNMO3FCQUFNO29CQUNILEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO2lCQUNsQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047YUFBTTtZQUNILEVBQUUsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1NBQ3pEO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFHRixvQkFBb0I7QUFDcEIsa0JBQWUsR0FBRyxDQUFDIn0=