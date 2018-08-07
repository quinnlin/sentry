import React from 'react';
import {mount, shallow} from 'enzyme';
import AlertLink from 'app/components/alertLink';

describe('AlertLink', function() {
  it('renders', function() {
    let wrapper = shallow(
      <AlertLink to="/settings/accounts/notifications">
        This is an external link button
      </AlertLink>,
      TestStubs.routerContext()
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with icon', function() {
    let wrapper = mount(
      <AlertLink to="/settings/accounts/notifications" icon="icon-mail">
        This is an external link button
      </AlertLink>,
      TestStubs.routerContext()
    );
    expect(wrapper).toSnapshot();
    expect(wrapper).toMatchSnapshot();
  });
});
