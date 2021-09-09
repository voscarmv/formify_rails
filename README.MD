# Formify React

A boilerplate generator that uses `ejs` to produce a `redux-saga` CRUD based on the database structure of any `rails` API using `postgresql`.

# Instructions

`git clone` the repo, `cd` to it and:

1. `$ npm install`
2. `$ cd src/scripts`
3. `$ ./generate.sh`

This should generate all the necessary components based on the database structure in `db.json`.

To use your own database structure, follow the instructions in this experimental draft:

# ToDo

- [ ] Automate database structure extraction.
- [ ] Automate component generation and saving.
- [ ] Add Ui styles to forms.
- [ ] Secure with JWT (devise-jwt)

# [License](./LICENSE.md)