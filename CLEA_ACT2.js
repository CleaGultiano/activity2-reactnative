import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native';

const Picture  = () => {
  return(
    <View>
       <Image source={{ uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/376370304_1450706545503513_7067048448236610816_n.jpg?stp=dst-jpg_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeGV_SWYniDD5A8F9Gdk-VJOLLUtVszUj_UstS1WzNSP9aecm5aovCDeqeSrIOVW4v7TkNCQ0b56-mnMl4UBvVZd&_nc_ohc=kAaVcg3Gq9IAX8rlp3V&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS4nNISR-RqNGQkCNll4iWH87Ds6OGYt4w8tatE2ae9_g&oe=6522555B'}} style ={styles.Picture} />
     </View>
     
 ) 
};
const SubjectOfferings = ()=>{
  return(
     
       <View style = {styles.Container}>
  <View style = {styles.Offerings}>
  <View>

 <View>
  

          <Text style = {styles.sub}>☃New followers</Text>
          </View>
          </View>
          <View>
          <Text style = {styles.inbox}>Hellow kitty  started following you  ˃   </Text>
        </View>
     </View>
    <View style = {styles.Offerings}>
        <View>
        <Text style = {styles.sub}>☗ Activities</Text>
          </View>
          <View>
        <Text style = {styles.inbox}>shop updates: Price drop                 ˃ </Text>
        </View>
        </View>
    
    <View style = {styles.Offerings}>
        <View>
          <Text style = {styles.sub}>▆ System notifications</Text>
          </View>
          <View>
          <Text style = {styles.inbox}>Tiktok: Last day to vote for your f...</Text>
        </View>
        </View>

    <View style = {styles.Offerings}>
        <View>
          <Text style = {styles.sub}>◉Tweety123☺☺☺</Text>
          </View>
          <View>
          <Text style = {styles.inbox}>Say hi to Tweety123☺☺☺</Text>
        </View>
        </View>
    
    <View style = {styles.Offerings}>
        <View>
          <Text style = {styles.sub}>◉ Jungkook♥♥♥♥♥♥</Text>
          </View>
          <View>
          <Text style = {styles.inbox}>shared photos.</Text>
        </View>
        </View>
        <View>
       <Image source={{ uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/375013741_603109298431971_5132289079076205440_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeF1TbXobGQHgVzO4mCcIH1m27JLZ93O_KLbsktn3c78ohOqMTVysvJWKZ9q9PUPCGtrl50o6vQMaGwEdUizTJyL&_nc_ohc=oO5fCMHJPwgAX_15HsO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRQfFyO8pf82NXyMMmWK-p8RmN8sqk_VfdRkOhOqjmpYw&oe=6522AE67'}} style ={styles.lastPicture} />
     </View>
  
     
    </View>
  )
}

export default function App() {
  return (
   <View style = {styles.containerForAll}> 
    <View style={styles.container}>
      
    <View style={styles.profile}>
      <Picture /> 
      <firstname />
      </View>

      
      <SubjectOfferings/>
      
       
      </View>
      <View>
      </View>

    <StatusBar style="auto" />
    </View>
     
     );
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'right',
  },
 
  profile: {
    alignItems: 'center',
    width: 400,
    height: 300,
    marginBottom:'20px',
    marginTop:'20px',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
     
  },

  lastPicture: { 
    width: 400,
    height: 70,
    borderRadius: 60,
    marginTop: 10,
  },

  Picture: {
    marginLeft: '10px',
    width: 400 ,
    height: 200,
    borderRadius: 0,
    alignItems: 'center',
  },
  
 subjectOfferings: {
flex: 1,
flexDirection: 'row',
justifyContent: 'flex-start',
with: 150,
borderTopRightRadius: 10,
borderTopLeftRadius: 10,
borderBottomRightRadius: 10,
borderBottomLeftRadius: 10,
marginBottom:'8px',
marginTop:'8px',
},

 sub:  {
  fontSize: '28px', 
  padding:5,
  fontWeight:'bold',
  marginLeft:'10px',
  backgroundColor: '#fff0f5', 

},
inbox:{
  marginLeft:'10px',
  borderBottomRightRadius: 10,
  backgroundColor: '#fff0f5', 
  fontSize: '20px', 
},

subjectContainer:{
  marginLeft: '10px',
marginRight: '10px',
 },

 containerForAll:{
marginLeft: '10px',
marginRight: '10px',
backgroundColor: 'lightcyan',
 
}
}); 
