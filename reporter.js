// my-awesome-reporter.js
// @ts-check

//** @implements {import('@playwright/test/reporter').Reporter} *//

// npx playwright test --reporter=list
// npx playwright test --reporter=line
// npx playwright test --reporter=dot
// npx playwright test --reporter=html
class MyReporter {
  onBegin(config, suite) {
    console.log(`Starting the run with ${suite.allTests().length} tests`);
  }

  onTestBegin(test) {
    console.log(`Starting test ${test.title}`);
  }

  onTestEnd(test, result) {
    console.log(`Finished test ${test.title}: ${result.status}`);
  }

  onEnd(result) {
    console.log(`Finished the run: ${result.status}`);
  }
}

module.exports = MyReporter;
