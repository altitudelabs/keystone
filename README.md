# keystone

## Installation
```
git clone https://github.com/altitudelabs/keystone.git
cd keystone
npm install
bower install
gulp
```

keystone should be running on localhost:8888

browser-sync should be running on localhost:5000

## Deployment

```
ssh ubuntu@keystoneprep.com
cd production
git pull github master
npm install
forever restart keystone.js
```
