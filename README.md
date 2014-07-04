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
    server: "127.0.0.1",
    user: "nagiosuser",
    password: "nagiospassword",
    nohttps: false // force request to use http (default is https)
  },
  'mygroup-off': {
    options: {
       group: 'mygroup', // optional: target a group
       grouptype: 'hostgroup', // Options are: hostgroup or servicegroup
       command: 66 // check your nagios setup for available commands
    }
  },
  'myhost-off':{
    options: {
      host: 'my.server.com', // target a specific host
      command: 55 // check your nagios setup for available commands
    }
  }
}
```

## Running

```shell
grunt nagios
```
