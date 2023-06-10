# MarkDown-Editor

Check out the Editor : [here](sahu-01.github.io/MarkDown-Editor/public/)

## Note:

- Create a public folder and add your HTML,CSS and JavaScript files into it
- After installing the showdown package
  add the following snippet before the main javascript <script> tags 
  ```
  <script src="showdown.js"></script>
  ```
- Also run the following command on your your terminal if you are not using webpack/bundler
    ```
  cp node_modules/showdown/dist/showdown.js public
  ```
  
- Remember to **uncheck** enable js map and enable css map from your console setting
  You should be able to now run youur own markdown editor as well
- Regarding deployment as you do not have the index file in root directory rather inside public, thus if you are using github pages kindly add */public*
  at the end of your generated url and you should be able to use and see the markdown editor
