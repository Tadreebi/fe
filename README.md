# TADREEBI

Frontend React.Js App of TADREEBI

You may find full app documantation on [Introductory Repo](https://github.com/Tadreebi/app)

[Deployed App](https://tadreebi.vercel.app/)

## Development Instructions & Notes

- Please try to stick to the Node.Js common naming convention of camel-case, so you would nameYourThingLikeThis. Except when you name n call a component, its name should be camel-case but first letter capitalized, so it woulb be LikeThisNaming.
- Whenever you remember a missed part of the backend code, please head to BE [project task manager](https://github.com/Tadreebi/be/projects/2) & add card for it.

## How to start development

- For first time..
  - Clone repo to local machine.
  - Cd to directory
  - Run CLI command of
  
        npm install
- Run CLI command of

      npm run start

## Adding New Module Instructions

- Create your To-Do card in [project](https://github.com/Tadreebi/fe/projects/1)
- You either create the relevant branch on your machine n push it to github, or create it on github n pull it to local.
- To create remote branch first (This is recommended to help the TO-Do automation, n make sure that you branched it out of latest version of dev branch)...
  - Go to created To-Do card on [project](https://github.com/Tadreebi/fe/projects/1)
  - After transfering it into an issue, click on the card title.
  - In the right-side bar to be shown, scroll down to its tail.
  - You'de find a clickable text of "create branch". Click it, give a name to your branch n create it. Then use the given command to pull the branch to local machine.

          git fetch
          git checkout new_branch_name
- To create local branch first...
  - Make sure you have the latest version of dev branch locally by running CLI command of

          git pull
  - Create your new branch out of dev by running CLI command of

          git checkout -b new_branch dev
- Duplicate an exising module (e.g. directory of src/views/StudentReports) & rename it according to targeted model.
- Add the URL to src/_nav.js, below "Model Pages".
- Import the module inside src/routes.js, below "Modules".
- Add the path inside const routes of src/routes.js, below "Modules".
- You could find the link to yor module now in the sidebar of the app. Now you can see the page.
- Update the data inside created module.

## Testing Steps

Soon...

## Technical Features

- Centralized Components (Template & styling library only called in the components for ease of replacement)

## Future Techincal Features to Add

Soon...

## Libraries Used

- React
- React-Dom
- Redux
- CoreUi
- Chart.Js
- Prop-types
