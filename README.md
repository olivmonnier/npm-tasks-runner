# npm-tasks-runner

Run a list of tasks since your package.json.
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
      {
        "name": "browserify",
        "src": "index.js",
        "dest": "-o bundle.js",
        "options": ""
      },
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
