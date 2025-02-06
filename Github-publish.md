# Notes

## To deploy to Github pages

GitHub Pages uses the gh-pages branch for deployment.

```shell
git checkout -b gh-pages
git push -u origin gh-pages
```

### Remove unncessary Files from Deployment

`rm -rf test/ package.json package-lock.json node_modules jest.config.js`

`npm install --save-dev gh-pages`
