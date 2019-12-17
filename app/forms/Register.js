import React, { Component } from 'react';
import t from 'tcomb-form-native';
import formValidation from '../utils/Validation';
import InputTemplate from './templates/Input';

export const RegisterStruct = t.struct({
    name: t.String,
    email: formValidation.email,
    password: formValidation.password,
    passwordConfirmation : formValidation.password
});

export const RegisterOptions = {
    fields: {
        name: {
            template: InputTemplate,
            config:{
                placeholder: "Escribe tu Nombres y Apellidos",
                iconType: "material-community",
                iconName: "account-outline",
            }
        },
        email: {
            template: InputTemplate,
            config:{
                placeholder: "Escribe tu Email",
                iconType: "material-community",
                iconName: "at",
            }
        },
        password: {
            template: InputTemplate,
            config:{
                placeholder: "Escribe tu Contraseña",
                password: true,
                secureTextEntry : true,
                iconType: "material-community",
                iconName: "lock-outline",
            }
        },
        passwordConfirmation : {
            template: InputTemplate,
            config:{
                placeholder: "Repite tu contraseña",
                password: true,
                secureTextEntry : true,
                iconType: "material-community",
                iconName: "lock-reset",
            }
        }
    }
}

