import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Text from '../../_shared/Text';
import colors from '../../_shared/colors';
import CustomIcon from '../../icons/CustomIcon';

import { styles } from './video-playlist-item.styles';

const fakeUrl = 'https://homepages.cae.wisc.edu/~ece533/images/boat.png';

const millisToMinutesAndSeconds = millis => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

export class VideoPlaylistItem extends Component {
  state = { paused: true, liked: false };
  onPress() {
    this.props.playVideo(this.props.item);
    this.setState({ paused: false });
  }
  render() {
    const { long_description, duration, id, name, poster } = this.props.item;
    const { nowPlaying } = this.props;
    const isPlaying = nowPlaying ? id === nowPlaying.id : false;
    const uri = poster || fakeUrl;

    return (
      <TouchableOpacity onPress={() => this.onPress()} style={styles.container}>
        <View>
          {!isPlaying && (
            <View style={styles.overlay}>
              <CustomIcon name="Icons_Play" solid size={30} color={colors.white} />
            </View>
          )}
          <FastImage resizeMode="cover" style={styles.image} source={{ uri }} />
        </View>
        <React.Fragment>
          <View style={styles.detailContainer}>
            <Text
              style={{ ...styles.title, color: isPlaying ? colors.pink : colors.white }}
              numberOfLines={1}
            >
              {name}
            </Text>

            <Text style={styles.duration} numberOfLines={1}>
              {millisToMinutesAndSeconds(duration)}
            </Text>

            <Text style={styles.subTitle} numberOfLines={3}>
              {long_description}
            </Text>
          </View>
          <View style={styles.actionContainer}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ liked: !this.state.liked });
              }}
              style={styles.actionIcon}
            >
              <CustomIcon
                name={'Icons_Like'}
                solid
                size={24}
                color={this.state.liked ? colors.pink : colors.white}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                alert('Sharing is not yet available');
              }}
              style={styles.actionIcon}
            >
              <CustomIcon name={'Icons_Share'} solid size={24} color={colors.white} />
            </TouchableOpacity>
          </View>
        </React.Fragment>
      </TouchableOpacity>
    );
  }
}
