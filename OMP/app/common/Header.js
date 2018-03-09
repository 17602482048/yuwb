/**
 * Copyright 2017-present OMP
 * 项目：新能源智慧运营
 * 作者：zhaoyf on 2017年12月6日
 * 页面名称：导航菜单
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    PixelRatio,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NavigationBarItem = ({icon, onPress, type}) => {
    const style = type == 'left' ? styles.leftIcon : styles.rightIcon
    return (
        <TouchableOpacity
            activeOpacity={0.75}
            style={style}
            onPress={onPress}
        >
            <Icon color="white" size={30} name={icon}/>
        </TouchableOpacity>
    )
}

const TitleBarItem = ({title, onPress}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.75}
            style={styles.rightButton}
            onPress={onPress}
        >
            <Text style={styles.buttonTitleFont}>{title}</Text>
        </TouchableOpacity>
    )
}

const MenuItem = ({title, onPress}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.75}
            style={styles.rightMenu}
            onPress={onPress}
        >
            <Text style={{color: 'gray', fontSize: 12}}>{title}</Text>
            <Image source={{uri: 'ic_food_ordering'}} style={{width: 16, height: 16}}/>
        </TouchableOpacity>
    )
}

export default class Header extends React.Component {

    render() {
        const {
            title, titleView,
            leftIcon, leftIconAction,
            rightIcon, rightIconAction,
            rightButton, rightButtonAction,
            rightMenu, rightMenuAction
        } = this.props
        const TitleView = titleView

        return (
            <View style={styles.navigationBarContainer} {...this.props}>
                {leftIcon && <NavigationBarItem icon={leftIcon} onPress={leftIconAction} type="left"/>}
                {title && <Text style={styles.title}>{title}</Text>}
                {titleView && <TitleView/>}
                {rightIcon && <NavigationBarItem icon={rightIcon} onPress={rightIconAction} type="right"/>}
                {rightButton && <TitleBarItem title={rightButton} onPress={rightButtonAction}/>}
                {rightMenu && <MenuItem title={rightMenu} onPress={rightMenuAction}/>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navigationBarContainer: {
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#0099FF',
        borderBottomWidth: 1 / PixelRatio.get(),
        backgroundColor: '#0099FF',
    },

    title: {
        fontSize: 18,
        color:'#FFFFFF',
        fontWeight: 'bold',
    },

    leftIcon: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        left: 0,
        top: 0,
    },

    rightIcon: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 44,
        height: 44,
        right: 0,
        top: 0
    },

    rightButton: {
        position: 'absolute',
        right: 0,
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonTitleFont: {
        color: 'white',
        fontSize: 15,
    },

    rightMenu: {
        position: 'absolute',
        right: 15,
        top: 0,
        height: 44,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center'
    },
})