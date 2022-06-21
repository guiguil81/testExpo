# TicketLess

## Deployment

To deploy this project run

```bash
  yarn run android
```
```bash
  yarn run ios
```

We can add `-d` if you want chose a specific device

## Environment

Node js `-v 16.15.0`

Expo `-v 45.0.5`

Realm `-v ^10.20.0-beta.5`

Redux `-v ^4.2.0`

Redux-persist `-v ^6.0.0`

## Current redux store

Can find files on `app/store`

User with `uuid` value

I18n with `languages` and `language` values

Ticket with `cue` value

We add large ticket url on this cue when the user scans a large ticket and don't have internet connexion.
On the app, when the user has an internet connexion we see if the cue is empty or not. And if the cue is not empty we used API for scanning tickets.

## API

Can find files on `app/services`

We have two API:

* Basic API on `"https://6ve6kyjooc.execute-api.eu-west-1.amazonaws.com/v1/"`

* CDN API on `"https://dbuhdos8n2reu.cloudfront.net/v1/cfg/"`

Basic API => Read large ticket, remove large ticket

CDN API => Get file on CDN amazon server

## Realm

Can find files on `app/realm`

We used realm and currently store `tickets` and `stores`

For each element we defined a schema and actions.

## I18n

Can find configure files on `app/service/i18n`

I18n system is init on `app/controller`

We store language choice on i18n redux store

## Utils

Can find utils files on `app/utils`

On `app/utils/qrcode` we have some functions like read qrcode, decompress data, or verify signature

On `app/utils/qrcode` we currently have foreground app hooks

On `app/utils/erros` you can see all potential errors
