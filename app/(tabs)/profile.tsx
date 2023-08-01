import { ImageBackground, ScrollView } from 'react-native';

import { Text, View } from '../../components/Themed';
import ProfileCard from '../ProfileCard';
import Homecards from '../homecards';

export default function Profile() {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='p-4 flex-1'>
          
          <ProfileCard
            userName='Rome'
            location='Barotac Nuevo'
            profilePic='https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw'

          />
          
        </View>
        <View>
          <ImageBackground source={{uri:'https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw'}}>

          </ImageBackground>
        </View>

       <Text className='ml-1 text-lg font-bold'>
        BOOKMARKS
       </Text>
        <ScrollView  showsHorizontalScrollIndicator={false} horizontal={true}>
          
        <Homecards
            aptName='Small sized apartment'
            location='Near CPU, Jaro, Iloilo City'
            profilePic='https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw'
            aptPic='https://www.investopedia.com/thmb/OQxvtmsJwBCy6kVw86E-ooDRVqs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rent_house_73089751-5bfc333346e0fb002602ddbe.jpg'
            aptDetails=
            ''
          />
          <Homecards
            aptName='30 square meters apartment'
            location='Jaro, Iloilo City'
            profilePic='https://images.squarespace-cdn.com/content/v1/53acb83ee4b04c5fb2ebfb08/1575851763708-0S2ON5WIX93CFIPOXZ5E/1x1+Profile+Edit+-+08.15.2018+-+Final+Scaled+Headshot+-+8.15.2018-2.jpg'
            aptPic='https://media.istockphoto.com/id/1362129126/photo/for-rent-real-estate-sign-in-front-of-a-row-of-apartment-condominiums-balconies-and-garage.jpg?s=170667a&w=0&k=20&c=IsKHsgHWpj-2OcnV0cWgbWMwjwRrJudVRXEDDEM5cfs='
            aptDetails=
            'asd'
          />
          <Homecards
            aptName='Boarding house w/ shared bathroom'
            location='Near CPU, Jaro, Iloilo City'
            profilePic='https://absolutedjs.com/wp-content/uploads/2023/03/DSF3712-2-1X1-Profile-2.jpg'
            aptPic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEi3xZEPY76FpXFT7iV5CYoBC38q7RlxuyZA&usqp=CAU'
            aptDetails=
            ''
          />
          <Homecards
            aptName='Boarding house w/ shared bathroom'
            location='Near CPU, Jaro, Iloilo City'
            profilePic='https://absolutedjs.com/wp-content/uploads/2023/03/DSF3712-2-1X1-Profile-2.jpg'
            aptPic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEi3xZEPY76FpXFT7iV5CYoBC38q7RlxuyZA&usqp=CAU'
            aptDetails=
            ''
          />
          
          

        </ScrollView>

        <Text className='ml-1 text-lg font-bold'>
        DISCOVER PLACES NEAR YOU
       </Text>
        <ScrollView  showsHorizontalScrollIndicator={false} horizontal={true}>
          
        <Homecards
            aptName='Small sized apartment'
            location='Near CPU, Jaro, Iloilo City'
            profilePic='https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw'
            aptPic='https://www.investopedia.com/thmb/OQxvtmsJwBCy6kVw86E-ooDRVqs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rent_house_73089751-5bfc333346e0fb002602ddbe.jpg'
            aptDetails=
            ''
          />
          <Homecards
            aptName='30 square meters apartment'
            location='Jaro, Iloilo City'
            profilePic='https://images.squarespace-cdn.com/content/v1/53acb83ee4b04c5fb2ebfb08/1575851763708-0S2ON5WIX93CFIPOXZ5E/1x1+Profile+Edit+-+08.15.2018+-+Final+Scaled+Headshot+-+8.15.2018-2.jpg'
            aptPic='https://media.istockphoto.com/id/1362129126/photo/for-rent-real-estate-sign-in-front-of-a-row-of-apartment-condominiums-balconies-and-garage.jpg?s=170667a&w=0&k=20&c=IsKHsgHWpj-2OcnV0cWgbWMwjwRrJudVRXEDDEM5cfs='
            aptDetails=
            'asd'
          />
          <Homecards
            aptName='Boarding house w/ shared bathroom'
            location='Near CPU, Jaro, Iloilo City'
            profilePic='https://absolutedjs.com/wp-content/uploads/2023/03/DSF3712-2-1X1-Profile-2.jpg'
            aptPic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEi3xZEPY76FpXFT7iV5CYoBC38q7RlxuyZA&usqp=CAU'
            aptDetails=
            ''
          />
          <Homecards
            aptName='Boarding house w/ shared bathroom'
            location='Near CPU, Jaro, Iloilo City'
            profilePic='https://absolutedjs.com/wp-content/uploads/2023/03/DSF3712-2-1X1-Profile-2.jpg'
            aptPic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEi3xZEPY76FpXFT7iV5CYoBC38q7RlxuyZA&usqp=CAU'
            aptDetails=
            ''
          />
          
          

        </ScrollView>

      </ScrollView>
    </View>
  );
}