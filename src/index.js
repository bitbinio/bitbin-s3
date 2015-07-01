var util = require('util');
var path = require('path');
var q = require('q');
var BaseAdapter = require('bitbin/src/base_adapter');

var S3Adapter = function S3Adapter(config, fs, glob, md5TransposeList) {
    BaseAdapter.apply(this, arguments);
    this.fs = fs;
    this.glob = glob;
    this.md5TransposeList = md5TransposeList;
};

util.inherits(S3Adapter, BaseAdapter);

/**
 * Checks all files in the list to ensure they exist and are what is required.
 *
 * The file should be the same path and MD5 hash. If any file does not exist
 * or does not match, it should reject the install.
 *
 * @param array files
 * @return promise
 */
S3Adapter.prototype.ensureFilesExists = function ensureFilesExists(files) {
    throw new Error('ensureFilesExists not implemented on this adapter.');
};

/**
 * Download and store to the manifest location all files in the list.
 *
 * @param array files
 * @return promise
 */
S3Adapter.prototype.download = function download(files) {
    throw new Error('downloadFiles not implemented on this adapter.');
};

/**
 * Filter out of the files argument array that which is already existing.
 *
 * Depending on what the operation does, this can either return an array
 * (of similar format) or a promise.
 *
 * @param array files
 * @return array|promise
 */
S3Adapter.prototype.filterExisting = function filterExisting(files) {
    throw new Error('filterExisting not implemented on this adapter.');
};

/**
 * Upload all files provided to the adapter outbound.
 *
 * Any conflicting files should be sent through BaseAdapter#upsertVersion
 * to not over-write.
 *
 * @param array files
 * @return array|promise
 */
S3Adapter.prototype.upload = function upload(files) {
    throw new Error('upload not implemented on this adapter.');
};

module.exports = function(container) {
    return new S3Adapter(
        container.config,
        container.node.fs,
        container.glob,
        container.md5TransposeList
    );
};
