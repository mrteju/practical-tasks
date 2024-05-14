import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import styles from './styles';
import {fetchAllEvents} from './helper';
import ImageView from '../../components/ImageView';
import {like, rightArrow, share} from '../../assets';

const HomeScreen = () => {
  const [eventList, setEventList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchAllEvents()
      .then(res => {
        setEventList(res.data.events);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);

  const EventItem = ({event}) => {
    return (
      <View style={styles.eventItem}>
        <ImageView
          imageSource={{uri: event.event_profile_img}}
          imageStyle={styles.eventImg}
          imageViewStyle={styles.eventImgView}
        />
        <View style={styles.desView}>
          <View style={styles.rowJItem}>
            <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
              {event.event_name}
            </Text>
            <ImageView imageSource={rightArrow} imageStyle={styles.arrowImg} />
          </View>
          <View style={styles.rowJItem}>
            <Text style={{fontSize: 12, color: 'green'}}>
              {event.readable_from_date}
              {event.readable_to_date !== ''
                ? ' - ' + event.readable_to_date
                : ''}
            </Text>
            <Text>
              {event.city}, {event.country}
            </Text>
          </View>
          <Text>
            €{event.event_price_from}
            {event.event_price_from !== 0 ? ' - ' + event.event_price_from : ''}
          </Text>
          <View style={styles.rowJItem}>
            <View style={[styles.rowItem]}>
              {event?.danceStyles?.map(el => (
                <Text style={styles.dsName}>{el.ds_name}</Text>
              ))}
            </View>
            <View style={styles.rowItem}>
              <ImageView
                imageSource={share}
                imageStyle={styles.icImg}
                imageViewStyle={{height: 20, width: 16}}
              />
              <ImageView
                imageSource={like}
                imageStyle={styles.icImg}
                imageViewStyle={{height: 18, width: 20, marginLeft: 10}}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.parentView}>
      <View style={styles.navBar}>
        <Text style={styles.title}>Hello Renzio!</Text>
        <Text>Are you ready to dance?</Text>
      </View>
      {loading ? (
        <ActivityIndicator style={styles.loader} />
      ) : (
        <FlatList
          data={eventList}
          renderItem={({item}) => <EventItem event={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
