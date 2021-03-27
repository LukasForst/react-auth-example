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
 * @interface DataCorrectnessConfirmationDtoOut
 */
export interface DataCorrectnessConfirmationDtoOut {
    /**
     * 
     * @type {boolean}
     * @memberof DataCorrectnessConfirmationDtoOut
     */
    dataAreCorrect: boolean;
    /**
     * 
     * @type {string}
     * @memberof DataCorrectnessConfirmationDtoOut
     */
    id: string;
}

export function DataCorrectnessConfirmationDtoOutFromJSON(json: any): DataCorrectnessConfirmationDtoOut {
    return DataCorrectnessConfirmationDtoOutFromJSONTyped(json, false);
}

export function DataCorrectnessConfirmationDtoOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataCorrectnessConfirmationDtoOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dataAreCorrect': json['dataAreCorrect'],
        'id': json['id'],
    };
}

export function DataCorrectnessConfirmationDtoOutToJSON(value?: DataCorrectnessConfirmationDtoOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dataAreCorrect': value.dataAreCorrect,
        'id': value.id,
    };
}


