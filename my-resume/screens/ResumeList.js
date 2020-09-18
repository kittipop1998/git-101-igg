import React from 'react'
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  Platform
} from 'react-native'
import ValidationComponent from 'react-native-form-validator'
import axios from 'axios'
import Camera from '../components/Camera'

export default class ResumeForm extends ValidationComponent {
  state = {
    loading: false,
    name: '',
    nickname: '',
    age: '',
    skill: '',
    takePictureMode: false,
    avatar: '',
  }

  _onSubmit = () => {
    const isValid = this.validate({
      avatar: { required: true },
      name: { required: true },
      nickname: { required: true },
      age: { required: true, numbers: true },
      skill: { required: true },
    });
    if (isValid) {
      this.setState({ loading: true })
      const formData = new FormData();
      const uri = this.state.avatar
      formData.append('avatar', {
        uri: Platform.OS === 'android' ? uri : uri.replace('file://', ''),
        type: 'image/jpeg',
        name: 'avatar.jpg',
      })
      formData.append('name', this.state.name)
      formData.append('nickname', this.state.nickname)
      formData.append('age', this.state.age)
      formData.append('skill', this.state.skill)
      const config = {
        method: 'POST',
        body: formData,
      }
      axios.post('https://movie-api.igeargeek.com/users/register', formData, config)
        .then((res) => {
          Alert.alert(
            'Create success',
            'Click OK go to resume page',
            [{
              text: 'OK', onPress: () => {
                this.props.navigation.push('ResumeDetail', { id: res.data.id })
              }
            }]
          )
        }).catch((error) => {
          console.log('error :', error)
        }).finally(() => {
          this.setState({ loading: true })
        })
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.errorMessage}>
          {this.getErrorMessages()}
        </Text>
        <Camera onTakePicture={(photoUri) => this.setState({ avatar: photoUri })} />
        <View>
          <Text>Full Name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ name: text })}
            value={this.state.name}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>Nickname</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ nickname: text })}
            value={this.state.nickname}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>Age</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ age: text })}
            value={this.state.age}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>Skill</Text>
          <TextInput
            style={styles.textAreaInput}
            onChangeText={text => this.setState({ skill: text })}
            value={this.state.skill}
            multiline={true}
          />
        </View>
        <View style={{ marginTop: 20, marginBottom: 80 }}>
          <Button
            disabled={this.state.loading}
            onPress={this._onSubmit}
            title={this.state.loading ? 'Loading...' : 'Create Resume'}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: { padding: 30, backgroundColor: 'white', minHeight: '100%' },
  textInput: { height: 40, borderColor: 'gray', borderWidth: 1 },
  textAreaInput: { height: 100, borderColor: 'gray', borderWidth: 1 },
  errorMessage: { color: 'red', marginBottom: 20 }
})