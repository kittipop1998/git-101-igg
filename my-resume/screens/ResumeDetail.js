import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import axios from 'axios'

export default (props) => {
  const [loading, setLoading] = useState(true)
  const [resume, setResume] = useState({ name: '', nickname: '', skill: '', age: '' })

  useEffect(() => {
    if (loading) {
      axios.get(`https://movie-api.igeargeek.com/users/profile/${props.route.params.id}`)
        .then((res) => {
          setResume(res.data)
        }).catch((error) => {
          console.log('error ', error)
        }).finally(() => {
          setLoading(false)
        })
    }
  })
  if (loading) {
    return <Text>Loading...</Text>
  } else {
    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{ uri: `https://movie-api.igeargeek.com/${resume.avatar}` }}
        />
        <View style={styles.textLine}>
          <Text style={styles.label} >Full Name : </Text><Text>{resume.name}</Text>
        </View>
        <View style={styles.textLine}>
          <Text style={styles.label} >Nickname : </Text><Text>{resume.nickname}</Text>
        </View>
        <View style={styles.textLine}>
          <Text style={styles.label} >Age : </Text><Text>{resume.age}</Text>
        </View>
        <View style={styles.textLine}>
          <Text style={styles.label} >Skill : </Text><Text>{resume.skill}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { padding: 30, backgroundColor: 'white', minHeight: '100%' },
  textLine: { display: 'flex', flexDirection: 'row', marginBottom: 20, fontSize: 14 },
  label: { fontWeight: 'bold' },
  avatar: { width: '100%', height: 360, marginBottom: 20 },
})