const awilix = require('awilix');
const TestService =require('./services/testService');
const DependentService = require('./services/dependentService')

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC
})

container.register({
  testService: awilix.asClass(TestService),
  dep: awilix.asClass(DependentService)
})
module.exports = container;
