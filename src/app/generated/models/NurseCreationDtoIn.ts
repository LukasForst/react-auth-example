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
 * @interface NurseCreationDtoIn
 */
export interface NurseCreationDtoIn {
    /**
     * 
     * @type {string}
     * @memberof NurseCreationDtoIn
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof NurseCreationDtoIn
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof NurseCreationDtoIn
     */
    lastName: string;
}

export function NurseCreationDtoInFromJSON(json: any): NurseCreationDtoIn {
    return NurseCreationDtoInFromJSONTyped(json, false);
}

export function NurseCreationDtoInFromJSONTyped(json: any, ignoreDiscriminator: boolean): NurseCreationDtoIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
        'firstName': json['firstName'],
        'lastName': json['lastName'],
    };
}

export function NurseCreationDtoInToJSON(value?: NurseCreationDtoIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'firstName': value.firstName,
        'lastName': value.lastName,
    };
}


