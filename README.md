# Bug report

https://github.com/umijs/umi/issues/4550

If an environment variables is referenced via `process.env.` which is not existing, the build contains **all** environment variables that were set during execution of the build command. This is a potential security issue, as it is common practise to have secrets set as environment variable in an automated CI/CD pipeline. Any secrets there would leak into the final build and leak to the open web.

## Setup

* Project was bootstrapped via `yarn create @umijs/umi-app`
* An environment variable was referenced in `src/pages/index.tsx` via `const test = process.env.SOME_ENV_VAR;` 

## Reproduce

* Set another env variables: `export SECRET=ci-cd-deploy-key`
* run `npm run build`
* You'll see that the SECRET env variable (and all others) have leaked into the build
```
> grep -o ci-cd-deploy-key dist/umi.js
ci-cd-deploy-key
``` 
* now set the environment variable that is referenced via `export SOME_ENV_VAR=123`
* run `npm run build`
* You'll notice that the bug did not occur
