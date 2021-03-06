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
 * @interface InsuranceCompanyDetailsDtoOut
 */
export interface InsuranceCompanyDetailsDtoOut {
    /**
     * 
     * @type {string}
     * @memberof InsuranceCompanyDetailsDtoOut
     */
    code: InsuranceCompanyDetailsDtoOutCodeEnum;
    /**
     * 
     * @type {string}
     * @memberof InsuranceCompanyDetailsDtoOut
     */
    csFullName: string;
    /**
     * 
     * @type {string}
     * @memberof InsuranceCompanyDetailsDtoOut
     */
    name: string;
}

/**
* @export
* @enum {string}
*/
export enum InsuranceCompanyDetailsDtoOutCodeEnum {
    Vzp = 'VZP',
    Vozp = 'VOZP',
    Cpzp = 'CPZP',
    Ozp = 'OZP',
    Zps = 'ZPS',
    Zpmv = 'ZPMV',
    Rbp = 'RBP'
}

export function InsuranceCompanyDetailsDtoOutFromJSON(json: any): InsuranceCompanyDetailsDtoOut {
    return InsuranceCompanyDetailsDtoOutFromJSONTyped(json, false);
}

export function InsuranceCompanyDetailsDtoOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): InsuranceCompanyDetailsDtoOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'csFullName': json['csFullName'],
        'name': json['name'],
    };
}

export function InsuranceCompanyDetailsDtoOutToJSON(value?: InsuranceCompanyDetailsDtoOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'csFullName': value.csFullName,
        'name': value.name,
    };
}


