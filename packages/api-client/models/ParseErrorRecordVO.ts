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

import { HttpFile } from '../http/http';

/**
* Resolution Failure Details View
*/
export class ParseErrorRecordVO {
    /**
    * Number of rows
    */
    'rowIndex'?: string;
    /**
    * Row index
    */
    'rowNumber'?: number;
    /**
    * Member nickname
    */
    'name'?: string;
    /**
    * Email
    */
    'email'?: string;
    /**
    * Number of rows
    */
    'team'?: string;
    /**
    * Error Details
    */
    'message'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "rowIndex",
            "baseName": "rowIndex",
            "type": "string",
            "format": ""
        },
        {
            "name": "rowNumber",
            "baseName": "rowNumber",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "team",
            "baseName": "team",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ParseErrorRecordVO.attributeTypeMap;
    }

    public constructor() {
    }
}

