# grunt-nagios [![Build Status](https://travis-ci.org/opentable/grunt-nagios.png?branch=master)](https://travis-ci.org/opentable/grunt-nagios) [![NPM version](https://badge.fury.io/js/grunt-nagios.png)](http://badge.fury.io/js/grunt-nagios) ![Dependencies](https://david-dm.org/opentable/grunt-nagios.png)

Nagios grunt module to turn nagios groups on or off

## Getting Started

```shell
npm install grunt-nagios --save-dev
```

## Nagios task

Once installed you need to configure your grunt file with the options:

```js
nagios: {
 options: {
    server: "127.0.0.1", // nagios server IP
    user: "nagiosuser", // nagios user account username
    password: "nagiospassword", // nagios user account password
    group: 'webgroup', // nagios group
    grouptype: 'hostgroup', // Options are: hostgroup or host - default is host
    command: 66, // check your nagios setup for available commands
    nohttps: false // force request to use http (default is https)
 }
}
```

## Running

```shell
grunt nagios
```
