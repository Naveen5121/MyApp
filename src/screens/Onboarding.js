import { FlatList, StyleSheet, View, Animated,Text} from 'react-native'
import { useState,useRef } from 'react'
import React from 'react'
import slides from '../../slides'
import OnboardingItem from './OnboardingItem'


const Onboarding = () => {

const scrollX = useRef(new Animated.Value(0)).current;
const [currentIndex,setCurrentIndex]=useState(0);
const flatListRef = useRef();

const scrollToNext = (index) => {
  if (index < slides.length - 1) {
    flatListRef.current.scrollToIndex({ index: index + 1 });
  } else {
    
    console.log('Login..')
  }
};

const viewableItemsChanged=useRef(({viewableItems})=>{
  setCurrentIndex(viewableItems[0].index);
}).current;



  return (
    <View style={styles.container}>
     
      <FlatList 
        ref={flatListRef}
        data={slides}
        renderItem={({ item, index }) => (
          <OnboardingItem
            item={item}
            index={index}
            scrollToNext={()=> scrollToNext(index)}
            isLast={index === slides.length - 1}
          />
        )}
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
          keyExtractor={(item)=>item.id}
          onScroll={Animated.event([{nativeEvent:{contentOffset: {x:scrollX}}}],
          {useNativeDriver:false,}
        
      )}
      scrollEventThrottle={32}
      onViewableItemsChanged={viewableItemsChanged}
   
      
/>
   
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({
     container : {
    flex:1,
    textAlign:'center',
    justifyContent:"center",
  },
  title : {
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center'
  }
})