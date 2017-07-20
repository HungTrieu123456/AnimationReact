import React from 'react';
import styles from './index.style';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing,
  TouchableHighlight,
  ScrollView
} from 'react-native';

/* basic
export default class Process extends React.Component{
    constructor (){
        super()
        this.animinatedValue = new Animated.Value(0)
    }
    componentDidMount (){
        this.animate()
    }
    animate () {
        this.animinatedValue.setValue(0)
        Animated.timing (
            this.animinatedValue,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.bounce
            }).start(() => this.animate())
    }
    render(){
        const marginLeft = this.animinatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 260]
        })

        const opacity = this.animinatedValue.interpolate ({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 0],
        })

        const movingMargin = this.animinatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 300, 0],
        })
        const textSize = this.animinatedValue.interpolate ({
            inputRange: [0, 0.5, 1],
            outputRange: [18, 32, 48]
        })
        const rotateX = this.animinatedValue.interpolate ({
            inputRange: [0, 0.5, 1],
            outputRange:['0deg', '180deg', '0deg']
        })
        return(
            <View style = {styles.containers}>
                <Animated.View style = {[styles.block, {marginLeft}]}/>
                <Animated.View style = {[styles.block, {marginLeft: movingMargin}]}/>
                <Animated.View style = {[styles.block, {opacity}]} />
                <Animated.Text style = {[styles.text, {fontSize: textSize}]}>
                    cawecgawcw
                </Animated.Text>
                <Animated.View style = {[styles.block, {transform: [{rotateX}]}]}/>
                <Animated.Text style = {[styles.text, {transform: [{rotateX}]}, {fontSize: 20}]}>
                    AVWWCWECWC
                </Animated.Text>
            </View>
        );
    }
}
*/
/* spring
export default class Process extends React.Component {
    
    constructor () {
        super();
        this.springValue = new Animated.Value(1)
    }

    spring () {
        this.springValue.setValue(0)
        Animated.spring(
            this.springValue,
            {
                toValue: 1,
                friction: 1,
        }).start()
    }


    render (){

        return (
            <View style = {styles.container}>
                <Text style = {{
                    //marginBottom: 100
                }}
                onPress = {this.spring.bind(this)}>
                    Spring Text !!!
                </Text>
                <Animated.View style = {[styles.block, {transform: [{scale: this.springValue}]}]}/>
            </View>
        );
    }
}*/
/* parallel
export default class Process extends React.Component {
    constructor () {
        super();
        this.animatedValue1 = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(0);
        this.animatedValue3 = new Animated.Value(0);
    }

    componentDidMount () {
        this.animate()
    }

    animate () {
        this.animatedValue1.setValue(0)
        this.animatedValue2.setValue(0)
        this.animatedValue3.setValue(0)
        const createAnimation = (value, duration, easing, delay = 0) => {
            return Animated.timing (
                value,
                {
                    toValue: 1,
                    duration,
                    easing,
                    delay
            })
        }
        Animated.parallel ([
            createAnimation(this.animatedValue1, 3000, Easing.ease),
            createAnimation(this.animatedValue2, 2000, Easing.ease, 1000),
            createAnimation(this.animatedValue3, 1500, Easing.ease, 1500)
        ]).start()
    }

    render (){
        const scaleText = this.animatedValue1.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5, 2],
            
        })
        const spinText = this.animatedValue2.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '720deg']
        })
        const introText = this.animatedValue3.interpolate ({
            inputRange: [0, 1],
            outputRange: [-100, 200]
        })
        return (
            <View style = {styles.container}>
                <Animated.View style = {{transform: [{scale: scaleText}]}}>
                    <Text>
                        ACWECAWCW
                    </Text>
                </Animated.View>
                <Animated.View
                    style={{ top: 50,  transform: [{rotate: spinText}] }}>
                    <Text style={{fontSize: 20}}>
                        to the App!
                    </Text>
                </Animated.View>
                <Animated.View
                    style = {{
                        top: introText,
                        position: 'absolute'
                    }}
                >
                <TouchableHighlight
                    style = {styles.button}
                    onPress = {this.animate.bind(this)}
                >
                    <Text
                        style={{color: 'white', fontSize: 20}}>
                        Click Here To Start
                    </Text>
                </TouchableHighlight>
                </Animated.View>
            </View>
        );
    }
}*/
/* sequence
const arr = []

for (var i = 0; i < 1000; i++) {
    arr.push(i)
}

export default class Process extends React.Component {
    constructor () {
        super();
        this.animatedValue = [];
        arr.forEach(x => {
            this.animatedValue[x] = new Animated.Value(0)
        })
    }

    componentDidMount() {
        this.animate()
    }

    animate (){
        const animations = arr.map((x) => {
            return Animated.timing (
                this.animatedValue[x],
                {
                    toValue: 1,
                    duration: 50,
                }
            )
        }) 
        Animated.sequence(animations).start()
    }

    render (){
        const animations = arr.map((a, x) => {
            return <Animated.View 
            key = {x} 
            
            style = {{
                opacity: this.animatedValue[a],
                height: 20,
                width: 20,
                backgroundColor: 'red',
                marginLeft: 3,
                marginTop: 3
            }}/>
            
        })
        return (
            <View style = {styles.container}>
                {animations}

            </View>
        );
    }
}*/


const arr = []
for (var i = 0; i < 500; i ++) {
    arr.push(i)
}

export default class Process extends React.Component  {
    
    constructor () {
        super();
        this.animatedValue = [];
        arr.forEach(x => {
            this.animatedValue[x] = new Animated.Value(0);
        })
    }

    componentDidMount () {
        this.animate()
    }

    animate () {
        const animations = arr.map(x => {
            return Animated.timing(
                this.animatedValue[x],
                {
                    toValue: 1,
                    duration: 10000,
            })
        })
        Animated.stagger(10, animations).start()
    }

    render (){
        const animations = arr.map((a, i) => {
            return <Animated.View 
                key = {i} 
                style = {{
                    opacity: this.animatedValue[a],
                    height: 20,
                    width: 20,
                    marginLeft: 3,
                    marginTop: 3,
                    backgroundColor: 'blue'
                }}
                />
        })
        return (
            <View style = {styles.container}>
                {animations}
            </View>
        );
    }
}