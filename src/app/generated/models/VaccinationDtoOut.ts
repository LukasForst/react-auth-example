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
 * @interface VaccinationDtoOut
 */
export interface VaccinationDtoOut {
    /**
     * 
     * @type {string}
     * @memberof VaccinationDtoOut
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof VaccinationDtoOut
     */
    vaccinatedOn: Date;
}

export function VaccinationDtoOutFromJSON(json: any): VaccinationDtoOut {
    return VaccinationDtoOutFromJSONTyped(json, false);
}

export function VaccinationDtoOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): VaccinationDtoOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'vaccinatedOn': (new Date(json['vaccinatedOn'])),
    };
}

export function VaccinationDtoOutToJSON(value?: VaccinationDtoOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'vaccinatedOn': (value.vaccinatedOn.toISOString()),
    };
}


