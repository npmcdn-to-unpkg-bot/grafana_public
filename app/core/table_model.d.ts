declare class TableModel {
    columns: any[];
    rows: any[];
    type: string;
    constructor();
    sort(options: any): void;
}
export = TableModel;
