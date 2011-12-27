# race

Restarts a given node script until it fails.

## Install

```
npm install race
```

## Usage

Considering you have a script called `script.js` which throws an Error in 10%
of all cases, this is how you can execute it over and over until it fails and
then print the corresponding output:

```
race script.js
```
