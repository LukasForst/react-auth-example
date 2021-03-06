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
 * @interface SystemStatisticsDtoOut
 */
export interface SystemStatisticsDtoOut {
    /**
     * 
     * @type {number}
     * @memberof SystemStatisticsDtoOut
     */
    emailsSentCount: number;
    /**
     * 
     * @type {number}
     * @memberof SystemStatisticsDtoOut
     */
    patientsDataVerifiedCount: number;
    /**
     * 
     * @type {number}
     * @memberof SystemStatisticsDtoOut
     */
    registrationsCount: number;
    /**
     * 
     * @type {number}
     * @memberof SystemStatisticsDtoOut
     */
    vaccinatedPatientsCount: number;
}

export function SystemStatisticsDtoOutFromJSON(json: any): SystemStatisticsDtoOut {
    return SystemStatisticsDtoOutFromJSONTyped(json, false);
}

export function SystemStatisticsDtoOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemStatisticsDtoOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'emailsSentCount': json['emailsSentCount'],
        'patientsDataVerifiedCount': json['patientsDataVerifiedCount'],
        'registrationsCount': json['registrationsCount'],
        'vaccinatedPatientsCount': json['vaccinatedPatientsCount'],
    };
}

export function SystemStatisticsDtoOutToJSON(value?: SystemStatisticsDtoOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'emailsSentCount': value.emailsSentCount,
        'patientsDataVerifiedCount': value.patientsDataVerifiedCount,
        'registrationsCount': value.registrationsCount,
        'vaccinatedPatientsCount': value.vaccinatedPatientsCount,
    };
}


