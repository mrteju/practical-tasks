import React, {useEffect, useCallback, useState} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import styles from './styles';

const PostDetails = ({postId, onDetailsChange}) => {
  const [postDetails, setPostDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
      );
      setPostDetails(response.data);
      onDetailsChange(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching post details:', error);
    }
  }, [postId, onDetailsChange]);

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [fetchData]);

  return (
    <View>
      {postDetails ? (
        <View style={styles.eventItem}>
          <View style={styles.desView}>
            <Text>ID: {postDetails.id}</Text>
            <Text>Title: {postDetails.title}</Text>
            <Text>Body: {postDetails.body}</Text>
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default PostDetails;
