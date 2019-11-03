/**
 * Library for storing and editing data
 */

// Dependencies 
import fs from 'fs';
import path from 'path';

// Container for the module to be exported
const lib: {
    baseDir?: fs.PathLike
    create?: (dir: string, filename: string, data: Object, cb: (err: string | boolean) => void) =>  void
} = {};

// Base directory
lib.baseDir = path.join(__dirname, '/../.data/');

// lib.baseDir

// Write data to a file
lib.create = (dir, filename, data, cb): void => {
    // Open the file for writing
    fs.open(`${lib.baseDir}${dir}/${filename}.json`, 'wx', (err, fd) => {
        if (!err && fd) {
            // Convert data to string
            const stringData = JSON.stringify(data);
            // Write to file and close it
            fs.writeFile(fd, stringData, err => {
                if (!err) {
                    fs.close(fd, err => {
                        if (!err) {
                            cb(false);
                        } else {
                            cb('Error closing new file')
                        }
                    })
                } else {
                    cb('Error writing to new file')
                }
            });
        } else {
            cb('Could not create new file, it may already exist');  
        }
    });
};


// Export the module
export default lib;