import { ScrollView } from 'react-native';

import { View } from '../../components/Themed';
import Homecards from '../homecards';

export default function TabTwoScreen() {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='p-4 flex-1'>
          <Homecards
            aptName='Small sized apartment'
            location='Near CPU, Jaro, Iloilo City'
            profilePic='https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw'
            aptPic='https://www.investopedia.com/thmb/OQxvtmsJwBCy6kVw86E-ooDRVqs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rent_house_73089751-5bfc333346e0fb002602ddbe.jpg'
            aptDetails=
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          />
          <Homecards
            aptName='30 square meters apartment'
            location='Jaro, Iloilo City'
            profilePic='https://images.squarespace-cdn.com/content/v1/53acb83ee4b04c5fb2ebfb08/1575851763708-0S2ON5WIX93CFIPOXZ5E/1x1+Profile+Edit+-+08.15.2018+-+Final+Scaled+Headshot+-+8.15.2018-2.jpg'
            aptPic='https://media.istockphoto.com/id/1362129126/photo/for-rent-real-estate-sign-in-front-of-a-row-of-apartment-condominiums-balconies-and-garage.jpg?s=170667a&w=0&k=20&c=IsKHsgHWpj-2OcnV0cWgbWMwjwRrJudVRXEDDEM5cfs='
            aptDetails=
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
          />
          <Homecards
            aptName='Boarding house w/ shared bathroom'
            location='Near CPU, Jaro, Iloilo City'
            profilePic='https://absolutedjs.com/wp-content/uploads/2023/03/DSF3712-2-1X1-Profile-2.jpg'
            aptPic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEi3xZEPY76FpXFT7iV5CYoBC38q7RlxuyZA&usqp=CAU'
            aptDetails=
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          />
          <Homecards
            aptName='[CHEAP! GET NOW] 2-bedroom apartment unit'
            location='Mandurriao, Iloilo City'
            profilePic='https://www.volvocars.com/images/v/-/media/applications/pdpspecificationpage/s90-fuel/features/s90-fuel-highlights-2-1-1x1.jpg?h=1920&iar=0&w=1920'
            aptPic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF4AcGL_qazez_7-HqN00RIzYPTt3h5lNxSw&usqp=CAU'
            aptDetails=
            'Lorem ipsum dolor sit amet. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          />
        </View>
      </ScrollView>
    </View>
  );
}