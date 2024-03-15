# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


bin/rails g scaffold User name:string email:string password_digest:string
bin/rails g scaffold timeline user_id:integer datetime:string content:string content:text
bin/rails g controller admin/dashboard index