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

import { UrlAwareContentVo } from '../models/UrlAwareContentVo';
import { HttpFile } from '../http/http';

export class UrlAwareContentsVo {
    'contents'?: { [key: string]: UrlAwareContentVo; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "contents",
            "baseName": "contents",
            "type": "{ [key: string]: UrlAwareContentVo; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UrlAwareContentsVo.attributeTypeMap;
    }

    public constructor() {
    }
}

