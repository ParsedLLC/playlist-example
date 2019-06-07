import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Text from '../_shared/Text';
import { styles } from './playlist.styles';
import { AudioPlaylistItem } from './audio-playlist-item';
import { VideoPlaylistItem } from './video-playlist-item';
import colors from '../_shared/colors';
import CustomIcon from '../icons/CustomIcon';
import { VideoDetailsInfo } from '../video-details/video-details-info.component';
export class Playlist extends Component {
  componentDidMount() {
    this.props.setPlaylistData(this.props.referenceId);
  }

  renderItem(item) {
    const { currentTrack, activeVideo } = this.props.playerReducer;
    if (this.props.isVideo) {
      return (
        <VideoPlaylistItem
          item={item}
          setCurrentTrack={this.props.setCurrentTrack}
          playVideo={this.props.playVideo}
          nowPlaying={activeVideo}
        />
      );
    }

    return (
      <AudioPlaylistItem
        item={item}
        setCurrentTrack={this.props.setCurrentTrack}
        playVideo={this.props.playVideo}
        nowPlaying={currentTrack}
        playlist={this.props.playlist}
      />
    );
  }

  renderDescriptionContainer() {
    return (
      <View style={styles.descriptionContainer}>
        <Text style={styles.heading}>{this.props.playlistTitle}</Text>
        <TouchableOpacity onPress={Actions.pop} style={styles.closeButton}>
          <CustomIcon name="Icons_Close" size={18} color={colors.white} />
        </TouchableOpacity>

        <Text style={styles.description} numberOfLines={5}>
          {this.props.description || 'No description'}
        </Text>
      </View>
    );
  }

  render() {
    const filteredPlaylist = this.props.playlist.filter(x => !x.tags.includes('keyart'));
    return (
      <View style={styles.viewStyle}>
        {this.props.isVideo ? (
          <View style={styles.videoDetailsContainer}>
            <VideoDetailsInfo video={{ ...this.props }} />
          </View>
        ) : (
          this.renderDescriptionContainer()
        )}
        <View style={styles.comingUp}>
          {
            <FlatList
              style={styles.flatlistDesign}
              data={filteredPlaylist}
              renderItem={({ item }) => this.renderItem(item)}
              keyExtractor={item => item.id}
            />
          }
        </View>
      </View>
    );
  }
}
