import React from 'react';
import {
    Animated,
    View,
    StyleSheet,
    Easing,
    Text,
    TouchableHighlight,
    Button
} from 'react-native';
import styles from './styles';

/*
export default class Process extends React.Component {
    constructor (){
        super();
        this.animatedValue = new Animated.Value(0);
        this.springValue = new Animated.Value(0);
    }

    animation () {
        this.animatedValue.setValue(0);
        Animated.timing (
            this.animatedValue,
            {
                toValue: 4,
                duration: 10000,
                easing: Easing.linear
        }).start(() => this.animation())
    }

    animationSpring (){
        this.springValue.setValue(0);
        Animated.spring(
            this.springValue,
            {
                toValue: 1,
                friction: 1,
        }).start()
    }

    render (){
        
        const marginLeft = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 260],
        });

        const rotateX = this.animatedValue.interpolate ({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '360deg', '0deg']
        })

        const movingMargin = this.animatedValue.interpolate ({
            inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4],
            outputRange: [0, 260, 0, 260, 0, 260, 0, 260, 0],
        })

        const textSize = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 200]
        })

        const marginTop = this.animatedValue.interpolate ({
            inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4],
            outputRange: [0, 100, 200, 300, 400, 300, 200, 100, 0]
        })

        const height = this.animatedValue.interpolate ({
            inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 3.8, 4],
            outputRange: [100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100],
        })

        const width = this.animatedValue.interpolate ({
            inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 3.8, 4],
            outputRange: [200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200],
        })
        return (
            this.animation(),
            <View style = {styles.container}>

                <Animated.View
                    style = {
                        [
                            styles.block, 
                            {marginLeft: movingMargin}, 
                            {transform: [{rotateX}]},
                            {marginTop},
                            {height},
                            {width}
                        ]
                    }
                >
                    <Text >
                        ABCDEFGHLJUHHKNBHLHKJUGFEFEVRGERFWF
                    </Text>

                </Animated.View>
                <Text style = {styles.text} 
                    onPress = {this.animationSpring.bind(this)}>
                   Spring
                </Text>
                <Animated.View style = {[styles.block, {transform: [{scale: this.springValue}]}]}/>
            </View>
        );
    }
}
*/
/*
export default class Process extends React.Component {
    constructor(){
        super();
        this.animatedValue1 = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(0);
        this.animatedValue3 = new Animated.Value(0);
    }

    animations (){
        this.animatedValue1.setValue(0);
        this.animatedValue2.setValue(0);
        this.animatedValue3.setValue(0);
        const createAnimation = ((value, duration, easing, delay) => {
            return Animated.timing (
                value,
                {
                    toValue: 1,
                    duration,
                    easing,
                    delay
            })
        });
        Animated.parallel([
            createAnimation(this.animatedValue1, 1000, Easing.linear),
            createAnimation(this.animatedValue2, 2000, Easing.linear, 500),
            createAnimation(this.animatedValue3, 1000, Easing.linear, 1000),
        ]).start()
    }

    render (){
        const marginLeft = this.animatedValue1.interpolate ({
            inputRange: [0, 1],
            outputRange: [0, 260],
        })
        const spinText = this.animatedValue2.interpolate ({
            inputRange: [0, 1],
            outputRange: ['0deg', '720deg']
        })
        const marginTop = this.animatedValue3.interpolate({
            inputRange: [0, 1],
            outputRange: [-100, 300],
        })
        return (
            <View style = {styles.container}>
                <Animated.View style = {
                    [
                        styles.block,
                        {marginLeft}
                    ]
                }/>
                <Animated.Text style = {
                    [
                        styles.text,
                        {transform: [{rotate: spinText}]}
                    ]
                }>
                    CWECASCWEC
                </Animated.Text>
                <Animated.Text style = {
                    [ 
                        styles.text,
                        {marginTop}
                    ]
                }>
                    CAWECWVEVVE
                </Animated.Text>
                <Button 
                    title = 'RunAnimation'
                    style = {styles.button}
                    onPress = {this.animations.bind(this)}
                >
               
                </Button>
            </View>
        );
    }
}

*/

var arr = [];
for(var i = 0; i < 500; i ++){
    arr.push(i);
}
export default class Process extends React.Component {
    constructor(){
        super();
        this.animatedValue = [];
        arr.forEach (x => {
            this.animatedValue[x] = new Animated.Value(0);
        })
    }

    componentDidMount(){
        this.animation()
    }

    animation () {
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



    render(){
        this.animation()
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
            <View style = {{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {animations}

            </View>
        );
    }
}