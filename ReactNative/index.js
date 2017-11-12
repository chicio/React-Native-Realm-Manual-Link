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
            schema: [{name: 'Dog', properties: {name: 'string'}}]
        }).then(realm => {
            realm.write(() => {
                realm.create('Dog', {name: 'Rex'});
            });
            this.setState({ realm });
        });
    }

    render() {
        const info = this.state.realm
            ? 'Number of dogs in this Realm: ' + this.state.realm.objects('Dog').length
            : 'Loading...';

        return (
            <View style={styles.container}>
              <Text>
                  {info}
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
