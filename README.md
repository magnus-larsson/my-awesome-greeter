# My Awesome Greeter

Based on [Step by step: Building and publishing an NPM Typescript package.](https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c)

# Build

## npm install commands

    npm install --save-dev typescript
    npm install --save-dev prettier tslint tslint-config-prettier
    npm install --save-dev jest ts-jest @types/jest

## npm build, test and publish commands

    npm run build
    npm run lint
    npm run format
    npm test

    git add -A && git commit -m "Setup Package"
    git push

    npm login
    npm publish --access public

    git add -A && git commit -m "Minor change..."
    git push

    npm version patch
    npm publish

# Usage