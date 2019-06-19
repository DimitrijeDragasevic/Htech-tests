# Htech tests

Convenience script for running Qa sandbox automation.


Parameters:

- environment (stage, prod) (default: prod)
- browser (chrome, firefox) (default: chrome)
- and after are standard Cucumberjs parameters


How to Run:

Open two terminals in the root of the project 


In the first one run these commands to start Selenium:


1. ``` npm i```
2. ```./node_modules/.bin/selenium-standalone install ```
3. ```./node_modules/.bin/selenium-standalone start```


In the other terminal run tests like these examples:

1. `./run.sh prod chrome features/login.feature`
2. `./run.sh prod chrome features/testCase.feature`


To delete all the test ceses you need to remove the @manul tag form the last scenario in testCase.Feature

The command to delete them all:
1. ``` ./run.sh prod chrome features/testCase.feature:32```

The command to generete them is (BUT you need to add the @manual tag to the last scenario) :
1. ``` ./run.sh prod chrome features/testCase.feature```
