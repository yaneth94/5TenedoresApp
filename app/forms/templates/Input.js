import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Input, Icon } from 'react-native-elements';

export default (InputTemplate = locals => {
    return (
        <View style={styles.viewContainer}>
            <Input 
            placeholder={locals.config.placeholder}
            password = {locals.config.password}
            secureTextEntry = {locals.config.secureTextEntry}
            rightIcon ={
                <Icon
                type={locals.config.iconType}
                name={locals.config.iconName}
                size={24}
                color='#b3b3b3'
                />
            }
            onChangeText = {value => locals.onChange(value)}
            ></Input>
        </View>
    )
});

const styles = StyleSheet.create({
    viewContainer: {
        marginTop: 12,
        marginBottom: 12
    }
});