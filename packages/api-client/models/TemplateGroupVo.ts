/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TemplateVo } from '../models/TemplateVo';
import { HttpFile } from '../http/http';

/**
* Recommend Custom Template Group View
*/
export class TemplateGroupVo {
    /**
    * Template Group Name
    */
    'name'?: string;
    /**
    * Template View List
    */
    'templates'?: Array<TemplateVo>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "templates",
            "baseName": "templates",
            "type": "Array<TemplateVo>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TemplateGroupVo.attributeTypeMap;
    }

    public constructor() {
    }
}

