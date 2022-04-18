# TESTING

This document defines how to run tests for this app.

## Requirements

- Jest [docs](https://jestjs.io/)
- @testing/react-libary [docs](https://testing-library.com/)
- cross-env [read](https://github.com/kentcdodds/cross-env)

## How To?

- First make sure, you are in root of this project repo.
- Then in terminal, run the following commands
  ```
  $ npm install
  $ npm run test
  ```

## Test indication

✅ Completed

⌛️ Pending ( temporary skipped )

🔺 Partial ( couldn't test well as it requires more research and effort )


#### tests

1. Home page

- Test render home page ✅
  - **Test Title** Render Home page

- Test render social login ✅
  - **Test Title** Social login should be available


2. Search books

- Test render search books page ✅
  - **Test Title** Render Search Books

- Test search input ✅
  - **Test Title** Search input should render and be working fine

- Test render disabled search button ✅
  - **Test Title** Search button should be disabled when no input text

- Test render enabled search button ✅
  - **Test Title** Search button should be enabled when there's input text

- Test render searched book results ✅
  - **Test Title** Searched book results


3. Header

- Test render header ✅
  - **Test Title** Render Search Books

- Test render log out button ✅
  - **Test Title** Log out button should be available