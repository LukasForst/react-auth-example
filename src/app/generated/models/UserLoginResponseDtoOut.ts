/* tslint:disable */
/* eslint-disable */
/**
 * Mild Blue - Covid Vaxx
 * Covid Vaxx API
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: support@mild.blue
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UserLoginResponseDtoOut
 */
export interface UserLoginResponseDtoOut {
    /**
     * 
     * @type {string}
     * @memberof UserLoginResponseDtoOut
     */
    role: UserLoginResponseDtoOutRoleEnum;
    /**
     * 
     * @type {string}
     * @memberof UserLoginResponseDtoOut
     */
    token: string;
}

/**
* @export
* @enum {string}
*/
export enum UserLoginResponseDtoOutRoleEnum {
    Admin = 'ADMIN',
    Doctor = 'DOCTOR',
    Nurse = 'NURSE',
    Receptionist = 'RECEPTIONIST'
}

export function UserLoginResponseDtoOutFromJSON(json: any): UserLoginResponseDtoOut {
    return UserLoginResponseDtoOutFromJSONTyped(json, false);
}

export function UserLoginResponseDtoOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserLoginResponseDtoOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'role': json['role'],
        'token': json['token'],
    };
}

export function UserLoginResponseDtoOutToJSON(value?: UserLoginResponseDtoOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'role': value.role,
        'token': value.token,
    };
}


