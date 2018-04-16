import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | madurai', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:madurai');
    assert.ok(route);
  });
});
