import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useCallback, useMemo} from 'react';

const PostItem = ({event, onClick}) => {
  const heavyComputation = (data: any, type: string) => {
    console.log(type, new Date().toLocaleString());
    let count = 0;
    for (let i = 1; data.body.length >= i; i++) {
      count = count + i;
    }
    return {
      bodyLatterCount: count,
      titleCapitalize: data.title.toUpperCase(),
    };
  };

  const computation = useMemo(() => {
    return heavyComputation(event, 'FOR_TITLE');
  }, [event]);

  const handleClick = useCallback(
    id => {
      console.log('Button clicked');
      onClick(id);
    },
    [onClick],
  );

  return (
    <View style={styles.eventItem}>
      <View style={styles.desView}>
        <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
          ID: {event.id}
        </Text>
        <Text style={{fontSize: 14, fontWeight: '600'}}>
          Title: {computation.titleCapitalize}
        </Text>
        <Text>Body counts: {computation.bodyLatterCount}</Text>
        <TouchableOpacity onPress={() => handleClick(event.id)}>
          <Text
            style={{
              fontSize: 18,
              textDecorationLine: 'underline',
              color: 'blue',
            }}>
            View Details
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostItem;
