# VECTOR

A tool for interacting with the SWx TREC Model Staging Platform VECTOR/SESAM model by Marcin Pilinski.

Deployed site: https://swx-trec.com/vector
Dev site: https://dev.swx-trec.com/vector
Branch demos: https://dev.swx-trec.com/`<branch-name>`
Github pages site: https://swxtrec.github.io/vector

## Contacts

* **Product Owner:**
	Marcin Pilinski, marcin.pilinski@lasp.colorado.edu
* **Experienced Devs:**
    Frontend: Jennifer Knuth, jennifer.knuth@lasp.colorado.edu
	Backend: Greg Lucas, greg.lucase@lasp.coloardo.edu

## Relevant JIRA Project(s)

* [SWT](https://mods-jira.lasp.colorado.edu:8080/browse/SWT/): Main project for the
	Space Weather Testbed codebase.
* [Incorporate SESAM Model](https://jira.lasp.colorado.edu/browse/SWT-41): Epic for VECTOR calculator
* [Vector Updates](https://jira.lasp.colorado.edu/browse/SWT-343): VECTOR epic

## Related Projects

This is one of a suite of applications deployed to the SWx TREC Model Staging Platform at https://swx-trec.com.

GitHub organization: https://github.com/SWxTREC

## Necessary Permissions

Jenkins jobs are used to deploy the application and the application is built on internal libraries, so development needs to be done behind the firewall.

## Architecture

This is the frontend code that sets the parameters to run the VECTOR model in AWS.

A Flask backend has been set up to create an API that receives a POST request with the model parameters and returns a GET request with the result. The backend code is publicly available at [https://github.com/SWxTREC/vector-code](https://github.com/SWxTREC/vector-code).

## Running VECTOR Locally

See 'Developement server' below.

### Project Dependencies

VECTOR backend is needed.

### Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Local build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Run `npm run build:prod` for a production build.

### Linting

Run `npm run lint` to lint your code, or run `npm run lint:watch` to automatically lint every time you change a file.

Automatically fix many linter warnings by running `npm run lint:fix`.

### Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](https://www.protractortest.org/).

## DOCKER

If you are using docker, be sure to follow the instructions in after-fork.instructions.

### Building a docker image

Once you have followed the steps in after-fork.instructions you can run `./docker-build.sh` to build a new image locally

### Running a dev image locally

Once you have built your image using the command above, you can `./docker-run.sh` to start a local development image. This image will be served at `http://localhost:8080/dev`

To stop your image run `docker stop {{Project-name}}`

Cleaning up old images is also a good idea from time to time. To clean up your unused docker resources run `docker system prune`

### Pushing an image to the LASP web registry

When you are ready to push your image, contact the web team infrastructure group for credentials and instructions on how to log in. Once this is complete you can run `./docker-publish.sh` to publish your image to the server.

## Deploy VECTOR

Be sure to `npm run lint && npm test` before creating a PR.

When a PR is created, the branch is served, and can be reviewed, outside of the LASP network at https://dev.swx-trec.com/`<branch-name>`. The branch deploy will update with changes to the branch code.

Merges to the `dev` branch will automatically be deployed to <https://dev.swx-trec.com/vector>. This is the `dev` deploy in the AWS environment and the contents of the `dev` branch will be reflected there. It uses a production build and the `.dev` environment file where `production = false`.

To manually trigger a deploy of the dev branch, run this job: https://jenkins-build.lasp.colorado.edu/job/swx-vector-dev/

### Version and release

Once <https://dev.swx-trec.com/vector> is tested and ready for a release, merge `dev` into `main`. From the `main` branch, run `npm version <major | minor | patch>` where major indicates a breaking change, minor is noticeable but non-breaking interface change, and patch is a non-breaking, under-the-hood refinement.

This will:

* run the linter and unit tests and abort if they fail
* increment the version, commit the change, and create a git tag
* push the changes and the new tag to the remote repo
* merge the version changes back into the dev branch

### Deploy to AWS

Run this Jenkins job https://jenkins-build.lasp.colorado.edu/job/swx-vector-prod/ to make a production build. Currently there is a manual step to deploy to the production AWS environment. Notify Brian McClellan or Greg Lucas to do this step. In future this will be automated.

### Deploy to GitHub pages

From the master branch, run `npm run deploy`

This will:

* Run `npm run build:pages` to create the `/docs` directory that will be deployed
* Make a copy of `docs/index.html` and name it `docs/404.html` (for some reason the angular instructions say to do this)
* Take the current build of `/docs` from the current branch and push it up to the remote `gh-pages` branch were it will be served

After a few minutes, you will see the changes at the GitHub-hosted site https://swxtrec.github.io/vector.

You can run this script from any branch, but the site should reflect the content of the current master branch.
