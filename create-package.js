#!/usr/bin/env node
const fs = require('fs');
const archiver = require('archiver');
const packageJson = require('./package.json');

const folderPrefix = '';

function getMetaProperties() {
  return `id=${packageJson.name}\n`
    + `artifactId=${packageJson.name}\n`
    + `version=${packageJson.version}\n`
    + 'shared=false\n';
}

function createPackage() {
  // Parse optional parameters
  const folderName = 'dist';
  const zipFileName = `/${folderName}/release-${packageJson.version}.zip`;
  // Create zip
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Sets the compression level.
  });
  archive.directory(folderName, folderPrefix);
  archive.append(getMetaProperties(), { name: 'meta.properties' });

  const zipFile = fs.createWriteStream(__dirname + zipFileName);
  archive.pipe(zipFile);
  archive.finalize();
}

createPackage();
