/// <reference path="../../../../../public/app/headers/common.d.ts" />
import { QueryCtrl } from 'app/plugins/sdk';
export declare class ElasticQueryCtrl extends QueryCtrl {
    private $rootScope;
    private $timeout;
    private uiSegmentSrv;
    static templateUrl: string;
    esVersion: any;
    rawQueryOld: string;
    /** @ngInject **/
    constructor($scope: any, $injector: any, $rootScope: any, $timeout: any, uiSegmentSrv: any);
    getFields(type: any): any;
    queryUpdated(): void;
    getCollapsedText(): string;
    handleQueryError(err: any): any[];
}
