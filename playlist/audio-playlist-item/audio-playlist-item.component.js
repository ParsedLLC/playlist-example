import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import moment from 'moment';

import { styles } from './audio-playlist-item.styles';
import Text from '../../_shared/Text';
import colors from '../../_shared/colors';

const millisToMinutesAndSeconds = millis => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

export class AudioPlaylistItem extends Component {
  state = { paused: true, liked: false };
  onPress() {
    const { poster, sources, id, name } = this.props.item;

    this.props.setCurrentTrack(
      {
        ...this.props.item,
        id,
        url: sources[sources.length - 1].src,
        title: name,
        artist: 'Example Media',
        poster,
      },
      this.props.playlist
    );

    this.setState({ paused: false });
  }
  componentDidMount() {
    if (!this.props.item || !this.props.item.tags) return;
  }
  render() {
    const { id } = this.props.item;
    const { nowPlaying } = this.props;

    const isPlaying = nowPlaying ? id === nowPlaying.id : false;
    return (
      <TouchableOpacity onPress={() => this.onPress()} style={styles.container}>
        <React.Fragment>
          <View style={styles.detailContainer}>
            <Text
              style={{ ...styles.title, color: isPlaying ? colors.pink : colors.white }}
              numberOfLines={2}
            >
              {this.props.item.name}
            </Text>
            <Text style={styles.audioSubtitle}>Artist</Text>
          </View>
          <View style={styles.actionContainer}>
            <TouchableOpacity
              onPress={() => this.setState({ liked: !this.state.liked })}
              style={styles.actionStyle}
            >
              <Text style={styles.audioDuration} numberOfLines={3}>
                {millisToMinutesAndSeconds(this.props.item.duration)}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => alert('Sharing is not yet available')}
              style={styles.actionStyle}
            >
              <Text style={styles.updatedFromNow}>
                {' '}
                {moment(this.props.item.updated_at).fromNow()}
              </Text>
            </TouchableOpacity>
          </View>
        </React.Fragment>
      </TouchableOpacity>
    );
  }
}
