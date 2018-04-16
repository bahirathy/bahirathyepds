import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('epds');
  this.route('national');
  this.route('state');
  this.route('page');
  this.route('login');
  this.route('central');
  this.route('retail');
  this.route('states');
  this.route('madurai');
  this.route('centraltrans');
  this.route('ctrans');
  this.route('transaction');
  this.route('register');
});

export default Router;
