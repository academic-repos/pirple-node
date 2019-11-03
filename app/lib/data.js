"use strict";
/**
 * Library for storing and editing data
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies 
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
// Container for the module to be exported
var lib = {};
// Base directory
lib.baseDir = path_1.default.join(__dirname, '/../.data/');
// lib.baseDir
// Write data to a file
lib.create = function (dir, filename, data, cb) {
    // Open the file for writing
    fs_1.default.open("" + lib.baseDir + dir + "/" + filename + ".json", 'wx', function (err, fd) {
        if (!err && fd) {
            // Convert data to string
            var stringData = JSON.stringify(data);
            // Write to file and close it
            fs_1.default.writeFile(fd, stringData, function (err) {
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
// Export the module
exports.default = lib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHOzs7OztBQUVILGdCQUFnQjtBQUNoQiwwQ0FBb0I7QUFDcEIsOENBQXdCO0FBRXhCLDBDQUEwQztBQUMxQyxJQUFNLEdBQUcsR0FHTCxFQUFFLENBQUM7QUFFUCxpQkFBaUI7QUFDakIsR0FBRyxDQUFDLE9BQU8sR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUVqRCxjQUFjO0FBRWQsdUJBQXVCO0FBQ3ZCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsVUFBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFO0lBQ2pDLDRCQUE0QjtJQUM1QixZQUFFLENBQUMsSUFBSSxDQUFDLEtBQUcsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLFNBQUksUUFBUSxVQUFPLEVBQUUsSUFBSSxFQUFFLFVBQUMsR0FBRyxFQUFFLEVBQUU7UUFDM0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUU7WUFDWix5QkFBeUI7WUFDekIsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4Qyw2QkFBNkI7WUFDN0IsWUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQUEsR0FBRztnQkFDNUIsSUFBSSxDQUFDLEdBQUcsRUFBRTtvQkFDTixZQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxVQUFBLEdBQUc7d0JBQ1osSUFBSSxDQUFDLEdBQUcsRUFBRTs0QkFDTixFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQ2I7NkJBQU07NEJBQ0gsRUFBRSxDQUFDLHdCQUF3QixDQUFDLENBQUE7eUJBQy9CO29CQUNMLENBQUMsQ0FBQyxDQUFBO2lCQUNMO3FCQUFNO29CQUNILEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO2lCQUNsQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047YUFBTTtZQUNILEVBQUUsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1NBQ3pEO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFHRixvQkFBb0I7QUFDcEIsa0JBQWUsR0FBRyxDQUFDIn0=