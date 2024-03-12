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
* role member unit request parameter
*/
export class RoleMemberUnitRo {
    /**
    * ID
    */
    'id': number;
    /**
    * unit type，1 = team，3 = member
    */
    'type': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return RoleMemberUnitRo.attributeTypeMap;
    }

    public constructor() {
    }
}

