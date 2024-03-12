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
* Attachment resource upload certificate RO
*/
export class AssetUploadCertificateRO {
    /**
    * Number of credentials created default 1 max 100
    */
    'count'?: number;
    /**
    * Asset Type(0:user avatar;1:space logo;2:datasheet; 3:cover image;4:node description;5:document)
    */
    'type': number;
    /**
    * Node Id (data table attachment, cover image and node description must be passed)
    */
    'nodeId'?: string;
    /**
    * Password login man-machine verification, the front end obtains the value of the get NVC Val function (man-machine verification will be performed when not logged in)
    */
    'data'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "nodeId",
            "baseName": "nodeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AssetUploadCertificateRO.attributeTypeMap;
    }

    public constructor() {
    }
}

