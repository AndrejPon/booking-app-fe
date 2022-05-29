# VK Studija booking app FE

Simple booking app for beauty studio, where user can choose necessary service and book online.

## Installation

Install VK Studija booking app with npm

```bash
  npm install
```

## Run Application

```bash
  npm start
```

## Usage

Everybody can see home page, where application starts.
On the same page registered and logged in user can choose and order available service.
Unregistered users can only view displayed data.
User can register on /register page and login on /login page.
After registration and login user will be able to order intended service and will be redirected to /orders page, where he/she can see ordered services list.
On the same page customer can cancell order.

## Dependencies

`react: ^18.1.0`
`react-dom: ^18.1.0`
`react-router-dom: ^6.3.0`
`react-scripts: 5.0.1`
`react-toastify: ^9.0.1`
`styled-components: ^5.3.5`

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_BASE_URL=`

## Future development

- Add date and time picker for orders;
- Add availabe date and time slots;
- Add admin dashbord with possibility to add, approve/reject services

## Author

Andrejus Ponomariovas

- [@AndrejPon](https://github.com/AndrejPon)

## License

[MIT](https://choosealicense.com/licenses/mit/)
