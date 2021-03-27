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
 * @interface CredentialsDtoIn
 */
export interface CredentialsDtoIn {
    /**
     * 
     * @type {string}
     * @memberof CredentialsDtoIn
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof CredentialsDtoIn
     */
    password: string;
}

export function CredentialsDtoInFromJSON(json: any): CredentialsDtoIn {
    return CredentialsDtoInFromJSONTyped(json, false);
}

export function CredentialsDtoInFromJSONTyped(json: any, ignoreDiscriminator: boolean): CredentialsDtoIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
        'password': json['password'],
    };
}

export function CredentialsDtoInToJSON(value?: CredentialsDtoIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'password': value.password,
    };
}

