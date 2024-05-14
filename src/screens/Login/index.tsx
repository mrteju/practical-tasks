import React, {useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import ImageView from '../../components/ImageView';
import {appleImg, fbImg, googleImg, iconImg, logo} from '../../assets';
import {signin} from './helper';

const LoginScreen = props => {
  const [loginData, setLoginData] = useState({
    email: 'testpracticaluser001@mailinator.com',
    password: 'Test@123',
  });
  const [loading, setLoading] = useState(false);

  const handleSignIn = () => {
    setLoading(true);
    signin(loginData)
      .then(res => {
        setLoading(false);
        if (res.data?.token) {
          props.navigation.navigate('Home');
        }
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <ScrollView style={styles.parentView}>
      <View style={styles.topView}>
        <ImageView
          imageSource={logo}
          imageStyle={styles.logoImg}
          imageViewStyle={styles.logoView}
        />
        <ImageView
          imageSource={iconImg}
          imageViewStyle={styles.iconView}
          imageStyle={styles.iconImg}
        />
      </View>
      <View style={styles.bottomView}>
        <View style={styles.inputView}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={loginData.email}
            placeholder="email@email.com"
            onChangeText={txt => setLoginData({...loginData, email: txt})}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>Password</Text>
          <View>
            <TextInput
              style={styles.input}
              value={loginData.password}
              secureTextEntry
              placeholder="Password"
              onChangeText={txt => setLoginData({...loginData, password: txt})}
            />
          </View>
        </View>
        <Text style={styles.fpstyle}>Forgot Password ?</Text>

        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <TouchableOpacity
            style={styles.signin}
            onPress={() => handleSignIn()}>
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.signup}>Not a member? Sign Up Here</Text>

        <View style={styles.lineView}>
          <View style={styles.hLine} />
          <Text>or Sign In with:</Text>
          <View style={styles.hLine} />
        </View>

        <View style={[styles.lineView, {marginHorizontal: 70}]}>
          <TouchableOpacity>
            <ImageView
              imageSource={googleImg}
              imageViewStyle={[styles.iconView, {marginTop: 0}]}
              imageStyle={styles.iconImg}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageView
              imageSource={appleImg}
              imageViewStyle={[styles.iconView, {marginTop: 0}]}
              imageStyle={styles.iconImg}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageView
              imageSource={fbImg}
              imageViewStyle={[styles.iconView, {marginTop: 0}]}
              imageStyle={styles.iconImg}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.fpstyle}>Enter as Guest</Text>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
