'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

const Realm = require('realm');

class ReactNativeRealmScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            realm: null
        };
    }

    componentWillMount() {
        Realm.open({
            schema: [{name: 'Band', properties: {name: 'string', singer: 'string'}}]
        }).then(realm => {
            realm.write(() => {
                realm.create('Band', {name: 'HIM', singer: 'Ville Valo'});
            });
            this.setState({ realm });
        });
    }

    render() {
        const message = this.state.realm
            ? 'The singer of HIM band is: ' + this.state.realm.objects('Band').filtered('name = "HIM"')[0].singer
            : 'Loading...';

        return (
            <View style={styles.container}>
              <Text>
                  {message}
              </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    }
});

AppRegistry.registerComponent('ReactNativeRealmScreen', () => ReactNativeRealmScreen, false);
