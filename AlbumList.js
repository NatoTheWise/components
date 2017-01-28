import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import { fetch } from 'isomorphic-fetch';

class AlbumList extends Component {
  componentWillMount() {
fetch('https://rallycoding.herokuapp.com/api/music_albums')
.then(res => res.json())
.then(json => this.setState({ albums: json }));

    console.log('componentWillMount in AlbumList');
  }
  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
}
}

export default AlbumList;
