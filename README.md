# npm-tasks-runner

Run a list of tasks since your package.json.

![release](https://img.shields.io/badge/release-1.0.1-blue.svg)

## Install
```
npm install -g npm-tasks-runner
```
## Usage
```
Usage: npm-tasks-runner [environment]
```
## Example
In your package.json, declared by environment the list of tasks to execute:
```json
{
  "name": "project",
  "version": "1.0.0",
  "description": "",
  "author": "",
  "license": "ISC",
  "tasks": {
    "production": [
      "browserify index.js -o bundle.js",
      {
        "name": "uglify-js",
        "src": "bundle.js",
        "dest": "-o bundle.min.js",
        "options": "-c"
      }
    ]
  }
}
```
Then run in your terminal:
```
npm-tasks-runner production
```
## Contributing
1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Added some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

## Licence
```
MIT
```
