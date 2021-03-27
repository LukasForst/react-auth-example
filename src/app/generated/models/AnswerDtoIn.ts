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
 * @interface AnswerDtoIn
 */
export interface AnswerDtoIn {
    /**
     * 
     * @type {string}
     * @memberof AnswerDtoIn
     */
    questionId: string;
    /**
     * 
     * @type {boolean}
     * @memberof AnswerDtoIn
     */
    value: boolean;
}

export function AnswerDtoInFromJSON(json: any): AnswerDtoIn {
    return AnswerDtoInFromJSONTyped(json, false);
}

export function AnswerDtoInFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnswerDtoIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'questionId': json['questionId'],
        'value': json['value'],
    };
}

export function AnswerDtoInToJSON(value?: AnswerDtoIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'questionId': value.questionId,
        'value': value.value,
    };
}

