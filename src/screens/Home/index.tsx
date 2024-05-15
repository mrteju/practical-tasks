import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {fetchAllPost} from './helper';
import PostDetails from './PostDetails';
import PostItem from './PostItem';

const PAGE_SIZE = 10;

const HomeScreen = () => {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetchPosts(currentPage)
      .then(res => {
        console.log('Logggg', res.length);
        setPostList(prevPosts => [...prevPosts, ...res]);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  }, [currentPage]);

  const fetchPosts = async page => {
    const response = await fetchAllPost(page, PAGE_SIZE);
    return response;
  };

  const loadMorePosts = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePostSelect = (postId: any) => {
    setSelectedPost(postId);
    console.log('Id...', postId);
  };

  return (
    <SafeAreaView style={styles.parentView}>
      <View style={styles.navBar}>
        <Text style={styles.title}>Hello Welcome back!</Text>
      </View>
      {selectedPost && (
        <PostDetails
          postId={selectedPost}
          onDetailsChange={data => console.log('Details changed:', data)}
        />
      )}
      <FlatList
        data={postList}
        renderItem={({item}) => (
          <PostItem event={item} onClick={id => handlePostSelect(id)} />
        )}
        keyExtractor={item => item.id.toString()}
        onEndReached={loadMorePosts}
        onEndReachedThreshold={0.2}
        ListFooterComponent={() =>
          loading ? (
            <ActivityIndicator size={'large'} style={{margin: 15}} />
          ) : null
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
